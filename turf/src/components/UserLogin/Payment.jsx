import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

const Payment = () => {
  const location = useLocation();
  const {
    selectedDate,
    selectedTimes,
    checkInTime,
    checkOutTime,
    title,
    description,
    cost,
    address,
  } = location.state || {};

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
      ("");
    }
  };

  const bookingDetails = {
    turfName: title,
    bookingDate: selectedDate
      ? format(selectedDate, "EEE, d MMM yyyy")
      : "Not selected",
    bookingTime:
      checkInTime && checkOutTime
        ? `${checkInTime} - ${checkOutTime}`
        : "Not selected",
    totalPrice: 500, // Set this to the appropriate cost
  };

  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    setPaymentStatus("success");
    setTimeout(() => {}, 2000);
  };

  return (
    <div className="payment-container bg-blue-50 min-h-screen p-6">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Let’s Secure Your Playtime! 🎉
        </h2>

        <div className="order-summary mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Booking Summary
          </h3>
          <ul className="space-y-2">
            <li>
              <strong className="text-gray-800">Turf:</strong>{" "}
              {bookingDetails.turfName}
            </li>
            <li>
              <strong className="text-gray-800">Date:</strong>{" "}
              {bookingDetails.bookingDate}
            </li>
            <li>
              <strong className="text-gray-800">Time:</strong>{" "}
              {bookingDetails.bookingTime}
            </li>
            <li>
              <strong className="text-gray-800">Total Price:</strong> ₹
              {bookingDetails.totalPrice}
            </li>
            <li>
              <strong className="text-gray-800">Total Duration:</strong>
              {selectedTimes
                ? calculateHours(selectedTimes[0], selectedTimes[1])
                : "N/A"}{" "}
              hours
            </li>
          </ul>
        </div>

        <div className="payment-method mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Choose Your Payment Method 🏦
          </h3>
          <div className="space-y-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="credit-card"
                checked={paymentMethod === "credit-card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Credit Card 💳
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              PayPal 💸
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              UPI 🤑
            </label>
          </div>
        </div>

        <div className="payment-form mb-6">
          {paymentMethod === "credit-card" && (
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm text-gray-600 mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full p-3 border rounded-md mb-4"
                placeholder="1234 5678 9012 3456"
              />
              <label
                htmlFor="expiryDate"
                className="block text-sm text-gray-600 mb-2"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                className="w-full p-3 border rounded-md mb-4"
                placeholder="MM/YY"
              />
              <label htmlFor="cvv" className="block text-sm text-gray-600 mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full p-3 border rounded-md mb-4"
                placeholder="123"
              />
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div>
              <button className="w-full bg-blue-600 text-white p-3 rounded-md mb-4 hover:bg-blue-700">
                Pay with PayPal
              </button>
            </div>
          )}

          {paymentMethod === "upi" && (
            <div>
              <label
                htmlFor="upiId"
                className="block text-sm text-gray-600 mb-2"
              >
                Enter Your UPI ID 🧾
              </label>
              <input
                type="text"
                id="upiId"
                className="w-full p-3 border rounded-md mb-4"
                placeholder="example@upi"
              />
            </div>
          )}
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
        >
          {paymentStatus === "success"
            ? "Payment Successful! 🏆"
            : "Pay Now and Book Your Turf 🏃‍♂️"}
        </button>

        {/* Payment Status */}
        {paymentStatus === "success" && (
          <div className="text-center mt-4 text-green-500">
            <p>Great job! Your booking is confirmed. See you on the turf! 🥳</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
