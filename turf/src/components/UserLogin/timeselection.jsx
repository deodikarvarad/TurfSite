import React, { useState, useEffect } from "react";
import arrow from '../../assets/arrowright.svg';
import { addDays, format, isSameDay, startOfToday } from 'date-fns';

function TimeSelection() {
    const [availableDates, setAvailableDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]); // State for selected times
    const [currentHour, setCurrentHour] = useState(new Date().getHours());

    // Time slots for a day (e.g., from 14:00 to 23:00)
    const timeSlots = Array.from({ length: 24 }, (_, index) => `${index + 0}:00`); // 14:00 to 23:00

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
                return hours >= hour; // Include current hour
            });
            setAvailableTimes(availableTodayTimes);
        } else {
            // If the selected date is in the future, show all time slots
            setAvailableTimes(timeSlots);
        }
    };

    const handleTimeSelect = (time) => {
        if (!selectedTimes.includes(time)) {
            setSelectedTimes((prevSelected) => [...prevSelected, time]); // Add time if not already selected
        }
    };

    const currentDate = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = monthNames[currentDate.getMonth()]; // Get the current month's name

    return (
        <div>
            <div className="mt-[124.68px] ml-[185px]">
                <div className="w-[158px] h-[35px] text-black">
                    <h2 className="font-serif text-xl">Select Time</h2>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="ml-[180px] mt-[12px] mb-[20px] border-2 border-black border-separate w-[751px] h-[690px] bg-white">
                    <div className="mt-4 w-[750px] h-[102px] border-2 border-black flex flex-col">
                        <div className="ml-[28px] w-10 h-6 border-2 border-black">
                            <h2>{currentMonth}</h2>
                        </div>
                        <div className="ml-[28px] mt-2 w-16 h-16 border-2 border-black flex flex-row">
                            {availableDates.map((date, index) => (
                                <div
                                    key={index}
                                    className={`ml-[16px] mt-2 w-5 h-6 border-2 border-black ${isSameDay(date, selectedDate) ? 'bg-blue-500' : ''}`}
                                    onClick={() => handleDateChange(date)}
                                >
                                    <p className="font-normal text-[15px]">{format(date, 'd')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[751px] h-[71px] border-2 border-black flex flex-row">
                        <div className="w-[662.5px] h-[24px] border-2 border-black mt-5 ml-8">
                            {availableTimes.length > 0 ? (
                                availableTimes.map((time) => (
                                    <div
                                        key={time}
                                        className="w-[61px] h-[24px] border-2 border-black cursor-pointer hover:bg-gray-200"
                                        onClick={() => handleTimeSelect(time)} // Handle time selection
                                    >
                                        <p className="text-base">{time}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-base">No available times</p>
                            )}
                        </div>
                        <img className="w-4 h-4 flex flex-row mt-6 ml-4" src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className="ml-[30px] mt-[11.5px] border-2 border-black w-[300px] h-[270px]">
                    <h2 className="font-serif text-xl ml-2">Selected Time</h2>
                    <div className="flex flex-col">
                        {selectedTimes.map((time, index) => (
                            <div key={index} className="mt-2 w-[100px] h-[24px] border-2 border-black">
                                <p className="text-base">{time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeSelection;
