import React, { useRef } from 'react';
import {useNavigate} from 'react-router-dom'



function SlidingCards() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const navigate = useNavigate();

  const handleShowAll = () =>{
    navigate('/turf');
  } 
  const redirectbooking=()=>{
    navigate('/turfbooking')
  }

  const cards = [
    {
      image: 'https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/j9/9999px240.x240.190511174508.a7j9/catalogue/the-penalty-box-turf-and-cafe-shivaji-nagar-aurangabad-maharashtra-coffee-shops-6pi1k79tyz.jpg',
      title: 'The Penalty Box Turf and Cafe',
      description: 'Sutgirni Chowk | Chh. Sambhajinagar',
    },
    {
      image: 'https://pr5.nicelocal.in/B6-futsfQS1Rh4RdNXy1gA/1120x700,q85/aUNift_YHO8vu0otYLoBwK7M16SwrFEIGm6VNDmxRTDfTfctryZoJYmeqWVRq_V2DCoZ1MwhAF1Zj8ZV4BxrMj37cFAIKgH1zv6Xc3xe6SC7EQh8iPMHD8T9cXbrKGJw',
      title: 'Backwoods Arena',
      description: 'Opposite Kalagram | Chh. Sambhajinagar',
    },
    {
      
      image: 'https://lh3.googleusercontent.com/p/AF1QipNXT-YHPJXbiPxe6gG8UvXsW9OOfyq9RTY6mdqG=s1360-w1360-h1020',
      title: 'Yash Sports Turf',
      description: 'Prozone | Chh. Sambhajinagar',

    },
    {
      title: 'Battlefield Turf',
      description: 'Opposite MGM | Chh. Sambhajinagar',
    },
    {
      
      image: 'https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/y7/9999px240.x240.221103084506.z7y7/catalogue/amf-turf-devanagari-aurangabad-maharashtra-kabaddi-turf-grounds-dsu9u7059x.jpg',
      title: 'AMF Turf',
      description: 'Pratap Nagar | Chh. Sambhajinagar',

    },
    {
      
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoa_FN3_dXD64rOtjTDJPN4x5zUfTHqEX7A&s',
      title: 'Saani Turf',
      description:'Naregoan | Chh. Sambhajinagar',

    },
    
  ];

  return (
    <div className="pt-0 relative flex-row overflow-x-auto w-max ">
    <div className="mt-4 flex flex-row h-60 items-center justify-between px-5">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-600">
            Recommended For You
        </h1>
        <button
            className="h-11 px-6 mr-8 bg-blue-300 text-blue-950 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            onClick={handleShowAll}
        >
            Show All
        </button>
    </div>

    <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:bg-gray-600"
    >
        &lt;
    </button>
    <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-4 p-4 cursor-pointer"
        onClick={redirectbooking}
    >
        {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-64 overflow-hidden transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-grey-600 duration-300 p-3 rounded-xl">
                <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md hover:transform transition-transform duration-300 hover:scale-110" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="mt-1 text-sm text-black hover:text-gray-600">{card.description}</p>
                </div>
            </div>
        ))}
    </div>
    <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:bg-gray-600"
    >
        &gt;
    </button>
</div>

  );
}

export default SlidingCards;