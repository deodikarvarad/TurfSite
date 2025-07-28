import { useState } from "react";
import { createContext } from "react";

export const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      image:
        "https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/j9/9999px240.x240.190511174508.a7j9/catalogue/the-penalty-box-turf-and-cafe-shivaji-nagar-aurangabad-maharashtra-coffee-shops-6pi1k79tyz.jpg",
      title: "The Penalty Box Turf and Cafe",
      description: "Sutgirni Chowk | Chh. Sambhajinagar",
      address: "Shivaji Nagar Sutgirni Road, Aurangabad 431001 India",
      cost: "1100/hr",
    },
    {
      image:
        "https://pr5.nicelocal.in/B6-futsfQS1Rh4RdNXy1gA/1120x700,q85/aUNift_YHO8vu0otYLoBwK7M16SwrFEIGm6VNDmxRTDfTfctryZoJYmeqWVRq_V2DCoZ1MwhAF1Zj8ZV4BxrMj37cFAIKgH1zv6Xc3xe6SC7EQh8iPMHD8T9cXbrKGJw",
      title: "Backwoods Arena",
      description: "Opposite Kalagram | Chh. Sambhajinagar",
      address:
        "Plot No. E-47, Opposite Kalagram, Midc-Chikalthana, Aurangabad, Maharashtra, Maharashtra 431007",
      cost: "1200/hr",
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNXT-YHPJXbiPxe6gG8UvXsW9OOfyq9RTY6mdqG=s1360-w1360-h1020",
      title: "Yash Sports Turf",
      description: "Prozone | Chh. Sambhajinagar",
      address: "Chikalthana Midc, Aurangabad, Maharashtra",
      cost: "1300/hr",
    },
    {
      image:
        "https://th.bing.com/th/id/R.adfb791acaec0e92c982702fd1713bf8?rik=MAVBviEY3tmT%2bw&riu=http%3a%2f%2fwww.sporteeno.com%2fwp-content%2fuploads%2f2019%2f11%2fsp04.jpg&ehk=tsA4EALpk%2b9MsBp%2f7bu7nG2aDphKgAwn1jL68DhbsHM%3d&risl=&pid=ImgRaw&r=0",
      title: "Battlefield Turf",
      description: "Opposite MGM | Chh. Sambhajinagar",
      address: "API Rd, N 1, Cidco, Aurangabad, Maharashtra 431006",
      cost: "1400/hr",
    },
    {
      image:
        "https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/y7/9999px240.x240.221103084506.z7y7/catalogue/amf-turf-devanagari-aurangabad-maharashtra-kabaddi-turf-grounds-dsu9u7059x.jpg",
      title: "AMF Turf",
      description: "Pratap Nagar | Chh. Sambhajinagar",
      address: "Chikalthana Midc, Aurangabad, Maharashtra",
      cost: "1500/hr",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoa_FN3_dXD64rOtjTDJPN4x5zUfTHqEX7A&s",
      title: "Saani Turf",
      description: "Naregoan | Chh. Sambhajinagar",
      address: "",
      cost: "1600/hr",
    },
    {
      image: "https://example.com/cricket1.jpg",
      title: "The Penalty Box Turf and Cafe",
      description: "Sutgirni Chowk | Chh. Sambhajinagar",
      address: "Shivaji Nagar Sutgirni Road, Aurangabad 431001 India",
      cost: "1100/hr",
      sport: "Cricket",
    },
    {
      image: "https://example.com/cricket2.jpg",
      title: "Backwoods Arena",
      description: "Opposite Kalagram | Chh. Sambhajinagar",
      address:
        "Plot No. E-47, Opposite Kalagram, Midc-Chikalthana, Aurangabad, Maharashtra",
      cost: "1200/hr",
      sport: "Cricket",
    },
    // Football Turfs
    {
      image: "https://example.com/football1.jpg",
      title: "City Football Arena",
      description: "Downtown | Pune",
      address: "Koregaon Park, Pune, Maharashtra",
      cost: "1000/hr",
      sport: "Football",
    },
    {
      image: "https://example.com/football2.jpg",
      title: "Goalpost Turf",
      description: "Bandra | Mumbai",
      address: "Linking Road, Bandra, Mumbai, Maharashtra",
      cost: "1500/hr",
      sport: "Football",
    },
    // Badminton Courts
    {
      image: "https://example.com/badminton1.jpg",
      title: "Shuttle Smash Arena",
      description: "MG Road | Bengaluru",
      address: "Indiranagar, Bengaluru, Karnataka",
      cost: "800/hr",
      sport: "Badminton",
    },
    {
      image: "https://example.com/badminton2.jpg",
      title: "Feather Court Hub",
      description: "Sector 18 | Noida",
      address: "Noida, Uttar Pradesh",
      cost: "900/hr",
      sport: "Badminton",
    },
    // Basketball Courts
    {
      image: "https://example.com/basketball1.jpg",
      title: "Hoops Central",
      description: "Colaba | Mumbai",
      address: "Colaba, Mumbai, Maharashtra",
      cost: "1200/hr",
      sport: "Basketball",
    },
    {
      image: "https://example.com/basketball2.jpg",
      title: "Dunkers Arena",
      description: "Rajajinagar | Bengaluru",
      address: "Rajajinagar, Bengaluru, Karnataka",
      cost: "1100/hr",
      sport: "Basketball",
    },
    // Tennis Courts
    {
      image: "https://example.com/tennis1.jpg",
      title: "Ace Tennis Club",
      description: "Vasant Kunj | Delhi",
      address: "Vasant Kunj, New Delhi",
      cost: "1300/hr",
      sport: "Tennis",
    },
    {
      image: "https://example.com/tennis2.jpg",
      title: "Grand Slam Arena",
      description: "Sector 29 | Gurgaon",
      address: "Gurgaon, Haryana",
      cost: "1400/hr",
      sport: "Tennis",
    },
    // Swimming Pools
    {
      image: "https://example.com/swimming1.jpg",
      title: "Blue Wave Pool",
      description: "Marathahalli | Bengaluru",
      address: "Marathahalli, Bengaluru, Karnataka",
      cost: "500/hr",
      sport: "Swimming",
    },
    {
      image: "https://example.com/swimming2.jpg",
      title: "Aqua Sports Complex",
      description: "Sector 50 | Noida",
      address: "Noida, Uttar Pradesh",
      cost: "600/hr",
      sport: "Swimming",
    },
  ]);

  return (
    <CardsContext.Provider value={{ cards }}>{children}</CardsContext.Provider>
  );
};
