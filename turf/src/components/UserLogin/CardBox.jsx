// import React, { useState } from 'react';

// const CardBox = () => {
//   const [showAll, setShowAll] = useState(false);

//   // Dummy data for cards
//   const cards = [
//     {
//         image: 'https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/j9/9999px240.x240.190511174508.a7j9/catalogue/the-penalty-box-turf-and-cafe-shivaji-nagar-aurangabad-maharashtra-coffee-shops-6pi1k79tyz.jpg',
//         title: 'The Penalty Box Turf and Cafe',
//         description: 'Sutgirni Chowk | Chh. Sambhajinagar',
//       },
//       {
//         image: 'https://pr5.nicelocal.in/B6-futsfQS1Rh4RdNXy1gA/1120x700,q85/aUNift_YHO8vu0otYLoBwK7M16SwrFEIGm6VNDmxRTDfTfctryZoJYmeqWVRq_V2DCoZ1MwhAF1Zj8ZV4BxrMj37cFAIKgH1zv6Xc3xe6SC7EQh8iPMHD8T9cXbrKGJw',
//         title: 'Backwoods Arena',
//         description: 'Opposite Kalagram | Chh. Sambhajinagar',
//       },
//       {
        
//         image: 'https://lh3.googleusercontent.com/p/AF1QipNXT-YHPJXbiPxe6gG8UvXsW9OOfyq9RTY6mdqG=s1360-w1360-h1020',
//         title: 'Yash Sports Turf',
//         description: 'Prozone | Chh. Sambhajinagar',
  
//       },
//       {
//         image: 'https://th.bing.com/th/id/R.adfb791acaec0e92c982702fd1713bf8?rik=MAVBviEY3tmT%2bw&riu=http%3a%2f%2fwww.sporteeno.com%2fwp-content%2fuploads%2f2019%2f11%2fsp04.jpg&ehk=tsA4EALpk%2b9MsBp%2f7bu7nG2aDphKgAwn1jL68DhbsHM%3d&risl=&pid=ImgRaw&r=0',
//         title: 'Battlefield Turf',
//         description: 'Opposite MGM | Chh. Sambhajinagar',
//       },
//       {
        
//         image: 'https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/y7/9999px240.x240.221103084506.z7y7/catalogue/amf-turf-devanagari-aurangabad-maharashtra-kabaddi-turf-grounds-dsu9u7059x.jpg',
//         title: 'AMF Turf',
//         description: 'Pratap Nagar | Chh. Sambhajinagar',
  
//       },
//       {
        
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoa_FN3_dXD64rOtjTDJPN4x5zUfTHqEX7A&s',
//         title: 'Saani Turf',
//         description:'Naregoan | Chh. Sambhajinagar',
  
//       },
//       // Add more cards as needed
//     ];
   

//   const visibleCards = showAll ? cards : cards.slice(0, 5);

//   return (
//     <div className="bg-gray-200 p-6 rounded-lg shadow-md pt-60 pb-60">
//       <h2 className="text-2xl font-bold mb-4">Turfs</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 object-cover">
//         {visibleCards.map(card => (
//           <div key={card.id} className="bg-white p-4 rounded-lg shadow">
//             {card.title}
//           </div>
//         ))}
//       </div>
//       {!showAll && cards.length > 5 && (
//         <div className="mt-4 text-center">
//           <button
//             onClick={() => setShowAll(true)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             See All
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardBox;
