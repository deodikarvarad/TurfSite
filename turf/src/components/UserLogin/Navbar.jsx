import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate(); 

  const handleBookTurf = () => {
    navigate('/'); 
  };

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <nav className="w-full bg-transparent p-4 fixed top-0 left-0 z-10">
          <div className="container mx-auto flex items-center justify-between px-4">
            <button
              onClick={handleBookTurf}
              className="text-xl font-bold text-transparent bg-clip-text bg-blue-500 ml-0 "
            >
              BookMyTurf
            </button>

            <div className="flex-grow mx-4 hover:bg-black">
              <input
                className="w-full  p-2 rounded-md text-white  "
                type="text"
                placeholder="Search for Turfs near you..."
              />
            </div>

            <div className="text-white hover:text-black mx-4">
              <select className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-md">
              <option value="chatrapati sambhajinagar">Chatrapati Sambhajinagar</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                
              </select>
            </div>

            <div className="text-white hover:text-black flex space-x-4">
              {/* <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Sign In
              </button>
              <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Sign Up
              </button> */}
              <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                Profile
                {/* <option value="userdashboard">Dashboard</option>
                <option value="mybookings">My Bookings</option>
                <option value="favorites">Favorites</option>
                <option value="accsettings">Account Settings</option>
                <option value="logout">Logout</option>
                
                <option></option> */}
              </button>
            </div>
          </div>
        </nav>

        
      </div>
    </>
  );
}

export default Navbar;
