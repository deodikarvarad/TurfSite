import React, { useState, useEffect } from "react";
import arrow from "../../assets/arrowright.svg";
import { addDays, format, isSameDay, startOfToday } from "date-fns";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TimeSelection({ cardTitle, cardDescription, cardAddress, costTurf }) {
  const navigate = useNavigate();
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [bookedTimes, setBookedTimes] = useState({});

  const timeSlots = Array.from({ length: 24 }, (_, index) => `${index}:00`);

  useEffect(() => {
    const today = startOfToday();
    const dates = Array.from({ length: 7 }, (_, index) =>
      addDays(today, index)
    );
    setAvailableDates(dates);
  }, []);

  const calculateHours = (checkIn, checkOut) => {
    const formattedCheckInDate = format(checkIn.date, "yyyy-MM-dd");
    const formattedCheckOutDate = format(checkOut.date, "yyyy-MM-dd");

    const checkInDateTime = new Date(
      `${formattedCheckInDate}T${checkIn.time.padStart(5, "0")}`
    );
    const checkOutDateTime = new Date(
      `${formattedCheckOutDate}T${checkOut.time.padStart(5, "0")}`
    );

    if (checkInDateTime < checkOutDateTime) {
      const diffInMs = checkOutDateTime - checkInDateTime;
      const diffInHours = diffInMs / (1000 * 60 * 60);

      return diffInHours > 0 ? diffInHours : 0;
    } else {
      toast.error("Check-Out time must be greater than Check-In time");
      setSelectedTimes([]);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimes([]);

    const currentHour = new Date().getHours();

    if (isSameDay(date, startOfToday())) {
      const availableTodayTimes = timeSlots.filter((time) => {
        const [hours] = time.split(":").map(Number);
        return hours >= currentHour;
      });
      setAvailableTimes(availableTodayTimes);
    } else {
      setAvailableTimes(timeSlots);
    }
  };

  const handleTimeSelect = (date, time) => {
    const formattedTime = time.padStart(5, "0");

    if (selectedTimes.length > 0 && selectedTimes[0].date !== date) {
      setSelectedTimes([]);
    }

    const selectedTimeObject = { date, time: formattedTime };

    const updatedSelection = selectedTimes.filter(
      (selected) =>
        !(
          selected.date === selectedTimeObject.date &&
          selected.time === formattedTime
        )
    );

    if (updatedSelection.length < selectedTimes.length) {
      setSelectedTimes(updatedSelection);
      return;
    }

    if (selectedTimes.length <= 2) {
      setSelectedTimes([...selectedTimes, selectedTimeObject]);
    } else {
      toast.error(
        "You have already selected check-in and check-out times. Click again to deselect."
      );
    }
  };

  const handleReset = () => {
    setSelectedTimes([]);
  };

  const handleProceed = (cardTitle, cardDescription, cardAddress, costTurf) => {
    if (selectedTimes.length === 2) {
      // Directly use selectedTimes[0] and selectedTimes[1] instead of creating new variables
      const selectedCheckInTime = selectedTimes[0];
      const selectedCheckOutTime = selectedTimes[1];

      navigate("/payment", {
        state: {
          selectedDate: selectedDate,
          selectedTimes: selectedTimes,
          checkInTime: selectedCheckInTime.time,
          checkOutTime: selectedCheckOutTime.time,
          title: cardTitle,
          description: cardDescription,
          address: cardAddress,
          cost: costTurf,
        },
      });
    } else {
      toast.error("Please select both check-in and check-out times.");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Select Time</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xl">
          <h3 className="font-semibold mb-2">Select a Date</h3>
          <div className="flex gap-2 overflow-x-auto">
            {availableDates.map((date, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  isSameDay(date, selectedDate)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleDateChange(date)}
              >
                {format(date, "EEE, d MMM")}
              </button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xl">
            <h3 className="font-semibold mb-2">Select Time Slots</h3>
            <div className="grid grid-cols-4 gap-2">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  className={`px-3 py-1 rounded-lg border transition-all ${
                    selectedTimes.some((t) => t.time === time)
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleTimeSelect(selectedDate, time)}
                  disabled={bookedTimes[time]}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xl">
          <h3 className="font-semibold mb-2">Selected Times</h3>
          {selectedTimes.length === 2 ? (
            <div className="space-y-2">
              <p>
                Check-in: {selectedTimes[0].time} on{" "}
                {format(selectedTimes[0].date, "EEE, MMM d")}
              </p>
              <p>
                Check-out: {selectedTimes[1].time} on{" "}
                {format(selectedTimes[1].date, "EEE, MMM d")}
              </p>
              <p className="font-semibold">
                Total Duration:{" "}
                {calculateHours(selectedTimes[0], selectedTimes[1])} hours
                <ToastContainer
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar={true}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </p>
              <div className="flex gap-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={handleReset}
                >
                  Change
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={() =>
                    handleProceed(
                      cardTitle,
                      cardDescription,
                      cardAddress,
                      costTurf
                    )
                  }
                >
                  Proceed to Payment
                </button>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          ) : (
            <p className="text-gray-500">
              Please select check-in and check-out times.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TimeSelection;
