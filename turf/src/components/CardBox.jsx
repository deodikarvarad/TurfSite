import React, { useState } from 'react';

const CardBox = () => {
  const [showAll, setShowAll] = useState(false);

  // Dummy data for cards
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
        image: 'data:image/jpeg;base64,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',
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
      // Add more cards as needed
    ];
   

  const visibleCards = showAll ? cards : cards.slice(0, 5);

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md pt-60 pb-60">
      <h2 className="text-2xl font-bold mb-4">Turfs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleCards.map(card => (
          <div key={card.id} className="bg-white p-4 rounded-lg shadow">
            {card.title}
          </div>
        ))}
      </div>
      {!showAll && cards.length > 5 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default CardBox;
