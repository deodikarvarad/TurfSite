import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const navigate = useNavigate(); 
  const [dropdownOpen,setdropdownOpen] = useState(false);
  const [citydropdownOpen,setcitydropdownOpen] = useState(false);
  const [weather,setWeather] =useState(null);
  const defaultCity = 'Aurangabad';

  useEffect(()=>{
    const fetchweather = async()=>{
      try{
        const apiKey = '891e271e52818845def9acc363a13392'
        const respone = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`);
        setWeather (respone.data);
      }catch(error){
    console.error('Error fetching weather data',error);
    }

    };
    fetchweather();
  },[defaultCity]);
  

  const handleBookTurf = () => {
    navigate('/home'); 
  };

  const redirectsignup =()=>{
    navigate('/usercreate');
  }

  const redirectlogin =() =>{
    navigate('/userlogin');
  }

  const redirectprofile=()=>{
    navigate('/profile')
  }

  const mouseonProfile =()=>{
    setdropdownOpen(true)
  }

  const mouseleaveProfile =()=>{
    setdropdownOpen(false)
  }

  // const mouseonCity =()=>{
  //   setcitydropdownOpen(true)
  // }

  // const mouseleaveCity =()=>{
  //   setcitydropdownOpen(false)
  // }
  

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <nav className="w-full bg-transparent p-4 fixed top-0 left-0 z-10">
          <div className="container mx-auto flex items-center justify-between px-4">
            <button
              onClick={handleBookTurf}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via bg-red-500 to-yellow-500 ml-0 "
            >
              BookMyTurf
            </button>

            <div className="flex-grow mx-4 border-black">
              <input
                className="w-full p-2 rounded-md text-indigo "
                type="text"
                placeholder="Search for Turfs near you..."
              />
            </div>

            <div className="text-blue-500 flex item-center ">
              {weather ?(
                <div className=''>
                  <p>{defaultCity}:</p>
                  <p>{weather.main.temp}°C</p>
                  <p>{weather.weather[0].description}</p>
                </div>
              ):(
                <p>Loading Weather...</p>
              )}
            </div>

            <div 
            onMouseEnter={mouseonProfile}
            onMouseLeave={mouseleaveProfile}
            className="text-white hover:text-black flex space-x-4">
              
              <button
               className='transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                Profile
                
              </button>
              {dropdownOpen &&(
                <div className="absolute right-0 mt-12 w-48 bg-white shadow-lg rounded-lg py-2">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={redirectlogin}>Log In</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={redirectsignup}>Sign Up</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={redirectprofile}>My Profile</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>

        
      </div>
    </>
  );
}

export default Navbar;
