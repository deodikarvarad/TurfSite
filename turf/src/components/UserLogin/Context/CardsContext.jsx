import { useState } from "react";
import { createContext } from "react";

export const CardsContext = createContext();

export const CardsProvider = ({children}) =>{
   
    const [cards,setCards] = useState([
            {
                image: 'https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/j9/9999px240.x240.190511174508.a7j9/catalogue/the-penalty-box-turf-and-cafe-shivaji-nagar-aurangabad-maharashtra-coffee-shops-6pi1k79tyz.jpg',
                title: 'The Penalty Box Turf and Cafe',
                description: 'Sutgirni Chowk | Chh. Sambhajinagar',
                address:'Shivaji Nagar Sutgirni Road, Aurangabad 431001 India',
                cost:'1100/hr'
              },
              {
                image: 'https://pr5.nicelocal.in/B6-futsfQS1Rh4RdNXy1gA/1120x700,q85/aUNift_YHO8vu0otYLoBwK7M16SwrFEIGm6VNDmxRTDfTfctryZoJYmeqWVRq_V2DCoZ1MwhAF1Zj8ZV4BxrMj37cFAIKgH1zv6Xc3xe6SC7EQh8iPMHD8T9cXbrKGJw',
                title: 'Backwoods Arena',
                description: 'Opposite Kalagram | Chh. Sambhajinagar',
                address:'Plot No. E-47, Opposite Kalagram, Midc-Chikalthana, Aurangabad, Maharashtra, Maharashtra 431007',
                cost:'1200/hr'
              },
              {
                
                image: 'https://lh3.googleusercontent.com/p/AF1QipNXT-YHPJXbiPxe6gG8UvXsW9OOfyq9RTY6mdqG=s1360-w1360-h1020',
                title: 'Yash Sports Turf',
                description: 'Prozone | Chh. Sambhajinagar',
                address:'Chikalthana Midc, Aurangabad, Maharashtra',
                cost:'1300/hr'
          
              },
              {
                image: 'https://th.bing.com/th/id/R.adfb791acaec0e92c982702fd1713bf8?rik=MAVBviEY3tmT%2bw&riu=http%3a%2f%2fwww.sporteeno.com%2fwp-content%2fuploads%2f2019%2f11%2fsp04.jpg&ehk=tsA4EALpk%2b9MsBp%2f7bu7nG2aDphKgAwn1jL68DhbsHM%3d&risl=&pid=ImgRaw&r=0',
                title: 'Battlefield Turf',
                description: 'Opposite MGM | Chh. Sambhajinagar',
                address:'API Rd, N 1, Cidco, Aurangabad, Maharashtra 431006',
                cost:'1400/hr'
              },
              {
                
                image: 'https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/y7/9999px240.x240.221103084506.z7y7/catalogue/amf-turf-devanagari-aurangabad-maharashtra-kabaddi-turf-grounds-dsu9u7059x.jpg',
                title: 'AMF Turf',
                description: 'Pratap Nagar | Chh. Sambhajinagar',
                address:'',
                cost:'1500/hr'
          
              },
              {
                
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoa_FN3_dXD64rOtjTDJPN4x5zUfTHqEX7A&s',
                title: 'Saani Turf',
                description:'Naregoan | Chh. Sambhajinagar',
                address:'',
                cost:'1600/hr'
          
              },
              
            ]);


return(
    <CardsContext.Provider value={{cards}}>
    {children}
    </CardsContext.Provider>
);
}