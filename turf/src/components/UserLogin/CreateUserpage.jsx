
import React, { useState } from "react";
import grass from "../../assets/img.png";
import Google from "../../assets/Google.png";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config.js";

function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const redirectlogin = () => {
    navigate("/userlogin");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered: ", userCredential.user);
    } catch (error) {
      alert(error.message);
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-start">
        <div className="w-full h-full bg-transparent flex flex-col pl-[35%] pr-[35%] items-center justify-center">
          <h1 className="text-6xl font-bold font-sans text-transparent pb-8 pt-6 bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            BookMyTurf
          </h1>

          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-10 items-center justify-center">
              <h3 className="text-5xl font-sans font-semibold mb-2">
                Register
              </h3>
              <p className="text-lg  font-sans">
                Welcome! Register to book Turf from home.
              </p>
            </div>

            <div className="w-full flex flex-col pb-5">
              <input
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-black font-sans py-4 my-0 bg-transparent border-b border-black outline-none focus:outline-none font-semibold"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black font-sans py-4 my-0 bg-transparent border-b border-black outline-none focus:outline-none font-semibold"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black font-sans py-4 my-0 bg-transparent border-b border-black outline-none focus:outline-none font-semibold"
              />

              <input
                type="password"
                placeholder="Re-Enter Password"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                className="w-full text-black font-sans py-4 my-0 bg-transparent border-b border-black outline-none focus:outline-none font-semibold"
              />
            </div>

            <div className="w-full flex flex-col pt-8cpb-8">
              <button
                className="bg-gradient-to-r text-white hover:bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 p-4 font-sans font-semibold text-xl"
                onClick={handleSignUp}
              >
                Register
              </button>
              {error && <p>{error}</p>}
            </div>

            <div className="w-full flex items-center justify-center relative pt-8">
              <div className="w-full h-[0.75px] bg-black"></div>
              <p className="absolute text-black bg-white text-xl">or</p>
            </div>

            <div className="w-full pt-8 flex items-center justify-center">
              <button className="flex items-center justify-center w-full px-4 py-2 rounded-full hover:bg-white hover:border border-gray-300 hover:border-black transition duration-200">
                <img src={Google} className="h-6 w-6 mr-3" alt="Google" />
                Sign Up With Google
              </button>
            </div>

            <div className="w-full pt-4 flex items-center justify-center">
              <button className="flex items-center justify-center w-full px-4 py-2 rounded-full hover:bg-sky-600 hover:text-white border border-gray-300 transition duration-200">
                <img src={Facebook} className="h-6 w-6 mr-3" alt="Facebook" />
                Sign Up With Facebook
              </button>
            </div>

            <div className="w-full pt-4 flex items-center justify-center">
              <button className="flex items-center justify-center w-full px-4 py-2 rounded-full hover:bg-black hover:text-white border border-gray-300 transition duration-200">
                <img src={Twitter} className="h-6 w-6 mr-3" alt="Twitter" />
                Sign Up With X
              </button>
            </div>
          </div>

          <div className="w-full flex items-center justify-center pt-4">
            <p className="text-sm font-sans text-black">
              Already have an account?
              <span
                className="font-semibold underline-offset-2 font-sans underline cursor-pointer text-sky-600"
                onClick={redirectlogin}
              >
                Click to Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
