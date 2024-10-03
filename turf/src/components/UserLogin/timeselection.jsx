import React, { useState, useEffect } from "react";
import arrow from '../../assets/arrowright.svg';
import { addDays, format, isSameDay, startOfToday } from 'date-fns';

function TimeSelection() {
    const [availableDates, setAvailableDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]); // Store the two selected times across dates
    const [bookedTimes, setBookedTimes] = useState({}); // Track booked times per date

    // Time slots for a day (e.g., from 00:00 to 23:00)
    const timeSlots = Array.from({ length: 24 }, (_, index) => `${index}:00`);

    useEffect(() => {
        // Generate available dates for today and the next 6 days
        const today = startOfToday();
        const dates = Array.from({ length: 7 }, (_, index) => addDays(today, index));
        setAvailableDates(dates);
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const hour = new Date().getHours();

        if (isSameDay(date, startOfToday())) {
            // If the selected date is today, filter time slots after the current hour
            const availableTodayTimes = timeSlots.filter((time) => {
                const [hours] = time.split(':').map(Number);
                return hours > hour; // Include times after current hour
            });
            setAvailableTimes(availableTodayTimes);
        } else {
            // If the selected date is in the future, show all time slots
            setAvailableTimes(timeSlots);
        }
    };

    const handleTimeSelect = (date, time) => {
        if (selectedTimes.length === 2) {
            alert("You have already selected check-in and check-out times. Please reset if you want to change them.");
            return;
        }

        const selectedTimeObject = { date, time };

        // Add the time to the selectedTimes array
        setSelectedTimes((prev) => [...prev, selectedTimeObject]);
    };

    const handleBookedTime = (date, time) => {
        // Mark time as booked for the selected date
        setBookedTimes((prev) => ({
            ...prev,
            [date]: [...(prev[date] || []), time]
        }));
    };

    const isTimeBooked = (date, time) => {
        return bookedTimes[date]?.includes(time);
    };

    const isTimeSelected = (date, time) => {
        return selectedTimes.some((selected) => selected.date === date && selected.time === time);
    };

    const handleReset = () => {
        setSelectedTimes([]); // Clear all selected times
    };

    const currentDate = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = monthNames[currentDate.getMonth()]; // Get the current month's name

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {/* Heading Section */}
            <div className="mt-[124.68px] ml-[185px]">
                <h2 className="font-serif text-2xl text-gray-800">Select Time</h2>
            </div>

            {/* Main Flex Row with Date and Time */}
            <div className="flex flex-row">
                {/* Date Section */}
                <div className="ml-[180px] mt-[12px] border-2 border-gray-300 w-[745px] h-auto bg-white mb-40 rounded-lg shadow-sm">
                    {/* Month and Dates */}
                    <div className="mt-4 w-[740px] h-[102px] border-b-2 border-gray-300 flex flex-row bg-yellow-200">
                        <div className="ml-[28px] min-w-min h-6 bg-amber-500 text-white flex items-center justify-center rounded-md shadow-md">
                            <h2 className="font-semibold">{currentMonth}</h2>
                        </div>
                        {/* Mapping Available Dates */}
                        {availableDates.map((date, index) => (
                            <div
                                key={index}
                                className={`mt-6 w-16 gap-8 ml-7 h-16 border-2 border-gray-300 flex flex-row cursor-pointer transition-transform transform hover:scale-105 ${isSameDay(date, selectedDate) ? 'bg-blue-400' : 'bg-orange-300'}`}
                                onClick={() => handleDateChange(date)}
                            >
                                <div className={`mt-2 flex flex-col gap-4 w-5 h-6 ml-4 content-center ${isSameDay(date, selectedDate) ? 'bg-blue-600 text-white' : 'text-gray-700'}`}>
                                    <p className="font-normal text-[10px]">{format(date, 'EEE')}</p> {/* Day of the week */}
                                    <p className="font-normal text-[15px]">{format(date, 'd')}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Time Slots Section */}
                    {selectedDate && availableTimes.length > 0 && (
                        <div className="mt-4 flex flex-col max-h-[30rem] overflow-y-scroll">
                            {availableTimes.map((time) => (
                                <div
                                    key={time}
                                    className={`w-full h-[71px] border-b-2 border-gray-300 flex flex-row items-center pt-2 ${isTimeBooked(selectedDate, time) ? 'bg-red-400' : ''} ${isTimeSelected(selectedDate, time) ? 'bg-green-400' : ''} transition-colors duration-200`}
                                    onClick={() => handleTimeSelect(selectedDate, time)} // Handle time selection
                                >
                                    <div className="w-[61px] h-[24px] border-2 border-gray-300 rounded-md mt-2 ml-8 cursor-pointer hover:bg-gray-200 flex items-center justify-center">
                                        <p className="text-base">{time}</p>
                                    </div>
                                    <img className="w-4 h-4  ml-auto mr-5 mt-0" src={arrow} alt="arrow" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Selected Times Section */}
                <div className="ml-[30px] mt-[11.5px] border-2 border-gray-300 w-[300px] h-[300px] bg-white rounded-lg shadow-md">
                    <h2 className="font-serif text-xl ml-2 text-gray-800">Selected Times</h2>
                    <div className="flex flex-col p-2">
                        {selectedTimes.length === 2 ? (
                            <div>
                                <div className="mt-2 w-[200px] h-[24px] border-2 border-gray-300 rounded-md">
                                    <p className="text-base">From: {selectedTimes[0].time} on {format(selectedTimes[0].date, 'EEE, MMM d')}</p>
                                </div>
                                <div className="mt-2 w-[200px] h-[24px] border-2 border-gray-300 rounded-md">
                                    <p className="text-base">Till: {selectedTimes[1].time} on {format(selectedTimes[1].date, 'EEE, MMM d')}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="text-gray-500 text-center">Please Select Time for Booking</div>
                        )}

                        {selectedTimes.length === 2 && (
                            <button onClick={handleReset} className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200">
                                Change
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeSelection;
