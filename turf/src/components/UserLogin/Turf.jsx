import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { useLocation } from 'react-router-dom';

function Turf() {
  
  const location =useLocation();
  const { title, description, address } = location.state || {
    title: 'Default Title',
    description: 'Default Place',
    address: 'Default Address',
  };
  // const { title = 'Default Title',
  //    description = 'Default Place' } = location.state || {};
const turfdata = [
  {
    
  }
]

  return ( 

<div className="w-full h-full flex items-start">
        <div className="relative w-1/4 h-full flex flex-col">  
        
        <div className="mt-32 mx-4 border-black bg-slate-300 pb-6 pt-6 rounded-md">
        <h2 className="pb-8 font-sans text-xl pl-9">Search for Name</h2>
        <div className="flex justify-center">
        <input
        className="w-80 p-2 rounded-md text-black bg-white"
        type="text"
        placeholder="Search for Turfs near you..."
        />
        </div>
        </div>

        <div className="mt-10 mx-4 border-black bg-slate-300  pt-4 rounded-md">
          <h2 className='pb-4 font-sans text-xl pl-8'>Man Utd</h2>
          <div className='bg-white pl-8 pt-2'>
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl ">Bruno</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl">Rashford</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl">Antony</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl">Mount</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl">De Ligt</label>
            
          </div>

        </div>

        <div className="mt-10 mx-4 border-black bg-slate-300  pt-4 rounded-md">
          <h2 className='pb-4 font-sans text-xl pl-8'>liVARpool</h2>
          <div className='bg-white pl-8 pt-2'>
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl ">Salah</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl">Van Djik</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl">Gakpo</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl">Jota</label>
          <br />
          <br />
          <input type="checkbox" id="checkbox1" className="form-checkbox h-5 w-5 text-blue-600"/>
          <label htmlFor="checkbox1" className="text-gray-700 text-xl">CASEMIRO</label>
            
          </div>

        </div>
        </div>
  <div className='flex flex-col justify-center items-center mt-32'>
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-row space-y-4 w-full  ">
    <div className="w-96 h-48 bg-black rounded-lg">
    <img src="https://i.ytimg.com/vi/s0kARTWwnaM/maxresdefault.jpg" alt="Image" className="object-cover w-full h-full"/>
    </div>
    <div className='pl-20' >
    <h2 className="text-xl font-semibold text-black pb-8">{title}</h2>
    <StarIcon/>
    <StarIcon/>
    <StarIcon/>
    <StarIcon/>
    <StarIcon/>
    <p className="text-gray-600 pb-4">{description}</p>
    <button className="bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">Book Now</button>
    </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-row space-y-4 w-full mt-10">
    <div className="w-96 h-48 bg-black rounded-lg">
    <img src="" alt="Image" className="object-cover w-full h-full"/>
    </div>
    <div className='pl-20' >
    <h2 className="text-xl font-semibold text-black pb-8">Penalty Box</h2>
    <img src={StarIcon} alt="" />
    <p className="text-gray-600 pb-4">Sut Girni Shivaji Nagar Road, Shivaji Nagar, Chh.Sambhajinagar-Maharashtra - 431005 (Beside HDFC Bank)</p>
    <button className="bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">Book Now</button>
    </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-row space-y-4 w-full mt-10">
    <div className="w-96 h-48 bg-black rounded-lg">
    <img src="https://via.placeholder.com/400" alt="Image" className="object-cover w-full h-full"/>
    </div>
    <div className='pl-20' >
    <h2 className="text-xl font-semibold text-black pb-8">Penalty Box</h2>
    <img src={StarIcon} alt="" />
    <p className="text-gray-600 pb-4">Sut Girni Shivaji Nagar Road, Shivaji Nagar, Chh.Sambhajinagar-Maharashtra - 431005 (Beside HDFC Bank)</p>
    <button className="bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">Book Now</button>
    </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-row space-y-4 w-full mt-10">
    <div className="w-96 h-48 bg-black rounded-lg">
    <img src="https://via.placeholder.com/400" alt="Image" className="object-cover w-full h-full"/>
    </div>
    <div className='pl-20' >
    <h2 className="text-xl font-semibold text-black pb-8">Penalty Box</h2>
    <img src={StarIcon} alt="" />
    <p className="text-gray-600 pb-4">Sut Girni Shivaji Nagar Road, Shivaji Nagar, Chh.Sambhajinagar-Maharashtra - 431005 (Beside HDFC Bank)</p>
    <button className="bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">Book Now</button>
    </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-row space-y-4 w-full mt-10">
    <div className="w-96 h-48 bg-black rounded-lg">
    <img src="https://via.placeholder.com/400" alt="Image" className="object-cover w-full h-full"/>
    </div>
    <div className='pl-20' >
    <h2 className="text-xl font-semibold text-black pb-8">Penalty Box</h2>
    <img src={StarIcon} alt="" />
    <p className="text-gray-600 pb-4">Sut Girni Shivaji Nagar Road, Shivaji Nagar, Chh.Sambhajinagar-Maharashtra - 431005 (Beside HDFC Bank)</p>
    <button className="bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">Book Now</button>
    </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-row space-y-4 w-full mt-10">
    <div className="w-96 h-48 bg-black rounded-lg">
    <img src="https://via.placeholder.com/400" alt="Image" className="object-cover w-full h-full"/>
    </div>
    <div className='pl-20' >
    <h2 className="text-xl font-semibold text-black pb-8">Penalty Box</h2>
    <img src={StarIcon} alt="" />
    <p className="text-gray-600 pb-4">Sut Girni Shivaji Nagar Road, Shivaji Nagar, Chh.Sambhajinagar-Maharashtra - 431005 (Beside HDFC Bank)</p>
    <button className="bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">Book Now</button>
    </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-row space-y-4 w-full mt-10">
    <div className="w-96 h-48 bg-black rounded-lg">
    <img src="https://via.placeholder.com/400" alt="Image" className="object-cover w-full h-full"/>
    </div>
    <div className='pl-20' >
    <h2 className="text-xl font-semibold text-black pb-8">Penalty Box</h2>
    <img src={StarIcon} alt="" />
    <p className="text-gray-600 pb-4">Sut Girni Shivaji Nagar Road, Shivaji Nagar, Chh.Sambhajinagar-Maharashtra - 431005 (Beside HDFC Bank)</p>
    <button className="bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">Book Now</button>
    </div>
    </div>

  </div>
</div>      
    
    
    
    
  );    

  
}

export default Turf;