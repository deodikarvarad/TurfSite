import React from "react";
import Virat from "../../assets/Virat.png";

function ProfilePage() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen pb-12">
        {/* Profile Heading */}
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 pt-4 pl-36 underline">
          My Profile
          <div className="w-full flex items-start justify-start relative pt-2">
            <div className="w-44 h-[0.75px] bg-black"></div>
          </div>
        </div>

        {/* User Info Section */}
        <div className="flex flex-row pt-14 pb-6 mx-40 justify-between items-center">
          <div className="flex items-center">
            <img
              src={Virat}
              className="rounded-full h-28 border-2 border-gray-400"
              alt="User"
            />
            <div className="pl-6">
              <h2 className="text-3xl font-semibold">Virat Kohli</h2>
              <p className="text-gray-600">@virat.kohli</p>
            </div>
          </div>

          <div className="flex space-x-8">
            <button className="transition ease-in-out delay-150 text-white bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-2 rounded-lg">
              Upload New Photo
            </button>
            <button className="transition ease-in-out delay-150 text-white bg-gradient-to-r from-red-500 via-red-900 to-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 px-4 py-2 rounded-lg">
              Delete Photo
            </button>
          </div>
        </div>

        {/* User Details */}
        <div className="bg-white shadow-lg mx-40 p-8 rounded-lg">
          {/* Personal Information */}
          <h3 className="text-2xl font-bold mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-lg">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="p-2 w-full rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-lg">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 w-full rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-lg">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="p-2 w-full rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-lg">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone No. (10 Digits)"
                className="p-2 w-full rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Turf Booking Section */}
        <div className="bg-white shadow-lg mx-40 mt-10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Your Turf Bookings</h3>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div>
                <p className="text-lg font-semibold">Booking ID: #00123</p>
                <p className="text-gray-600">Date: 12th Oct 2024</p>
                <p className="text-gray-600">Turf: Backwoods</p>
              </div>
              <button className="transition ease-in-out delay-150 text-white bg-gradient-to-r from-green-500 to-teal-500 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 px-4 py-2 rounded-lg">
                View Details
              </button>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div>
                <p className="text-lg font-semibold">Booking ID: #00124</p>
                <p className="text-gray-600">Date: 14th Oct 2024</p>
                <p className="text-gray-600">Turf: Amf</p>
              </div>
              <button className="transition ease-in-out delay-150 text-white bg-gradient-to-r from-green-500 to-teal-500 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 px-4 py-2 rounded-lg">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Account Security Section */}
        <div className="bg-white shadow-lg mx-40 mt-10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Account Security</h3>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-lg">Current Password</label>
              <input
                type="password"
                placeholder="Current Password"
                className="p-2 w-full rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-lg">New Password</label>
              <input
                type="password"
                placeholder="New Password"
                className="p-2 w-full rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-lg">Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm New Password"
                className="p-2 w-full rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Save Changes and Cancel Buttons */}
        <div className="flex justify-end mt-8 mr-40">
          <button className="transition ease-in-out delay-150 text-white bg-gradient-to-r from-red-500 via-red-900 to-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 px-6 py-2 rounded-lg mr-4">
            Cancel
          </button>
          <button className="transition ease-in-out delay-150 text-white bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-6 py-2 rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
