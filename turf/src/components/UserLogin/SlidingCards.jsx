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
  const redirectbooking=(cardTitle,cardDescription,cardAddress)=>{
    navigate('/turfbooking',
      {state :
      {
        title:cardTitle,
        description:cardDescription,
        address:cardAddress
    }})
  }

  const cards = [
    {
      image: 'https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/j9/9999px240.x240.190511174508.a7j9/catalogue/the-penalty-box-turf-and-cafe-shivaji-nagar-aurangabad-maharashtra-coffee-shops-6pi1k79tyz.jpg',
      title: 'The Penalty Box Turf and Cafe',
      description: 'Sutgirni Chowk | Chh. Sambhajinagar',
      address :'Shivaji Nagar Sutgirni Road, Chh. Sambhajinagar 431001 India'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.CTJFjcGTky-Cup8KCBIvfgHaE8?w=900&h=600&rs=1&pid=ImgDetMain',
      title: 'Backwoods Arena',
      description: 'Opposite Kalagram | Chh. Sambhajinagar',
      address:'Plot No. E-47, Opposite Kalagram, Midc-Chikalthana, Chh. Sambhajinagar, Maharashtra, Maharashtra 431007'
    },
    {
      
      image: 'https://lh3.googleusercontent.com/p/AF1QipNXT-YHPJXbiPxe6gG8UvXsW9OOfyq9RTY6mdqG=s1360-w1360-h1020',
      title: 'Yash Sports Turf',
      description: 'Prozone | Chh. Sambhajinagar',
      address:'Plot No. 1a, Behind Mc Donalds, Midc, Chikalthana, Chh. Sambhajinagar, Maharashtra, Maharashtra 431005'
    },
    {
      image :'https://th.bing.com/th/id/OIP.jQnaOWHh3pcpFf6kXPieHgHaEv?w=854&h=546&rs=1&pid=ImgDetMain',
      title: 'Battlefield Turf',
      description: 'Opposite MGM | Chh. Sambhajinagar',
      address:'Plot no. 185 opposite MGM Stadium, amaanullah masjid, road, Chh. Sambhajinagar, Maharashtra 431001, India'
    },
    {
      
      image: 'https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/y7/9999px240.x240.221103084506.z7y7/catalogue/amf-turf-devanagari-aurangabad-maharashtra-kabaddi-turf-grounds-dsu9u7059x.jpg',
      title: 'AMF Turf',
      description: 'Pratap Nagar | Chh. Sambhajinagar',
      address:'AMF Gym, Devanagari Rd, behind Peace Point, Shahnoorwadi, Chh. Sambhajinagar, Maharashtra 431005'

    },
    {
      
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoa_FN3_dXD64rOtjTDJPN4x5zUfTHqEX7A&s',
      title: 'Saani Turf',
      description:'Naregoan | Chh. Sambhajinagar',
      address:'Naregaon - Malharpur - Warud Rd, Naregaon, Chilkalthana, Chh. Sambhajinagar , Maharashtra 431006'

    },
    
  ];

  return (
    <div className="pt-6 relative flex-row overflow-x-auto w-max">
    <div className="mt-4 flex flex-row h-60 items-center justify-between px-5">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-600">
            Recommended For You
        </h1>
        <button
            className="h-11 px-6 mr-8 bg-gradient-to-r from-blue-300 via via-blue-200 to-blue-100 text-black rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
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
        
    >
        {cards.map((card, index) => (
            <div
             key={index} 
             className="flex-shrink-0 w-64 overflow-hidden transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-grey-600 duration-300 p-3 rounded-xl"
              onClick={()=> redirectbooking(card.title,card.description,card.address)}>
                <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-40 object-cover rounded-md hover:transform transition-transform duration-300 hover:scale-110" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold  text-black">{card.title}</h3>
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