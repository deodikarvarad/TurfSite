import React, { useEffect, useState } from "react";

function HomeImage() {
  const images = [
    {
      id: "1",
      src: "https://wallpaperaccess.com/full/1311181.jpg",
      text: "Cricket",
    },
    {
      id: "2",
      src: "https://wallpaperaccess.com/full/1637819.jpg",
      text: "Football",
    },
    {
      id: "3",
      src: "https://wallpaperaccess.com/full/780482.jpg",
      text: "Tennis",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // For text transition
    }, 5000); // For image transition

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative w-full h-[950px] overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <img
              key={image.id}
              className={`w-full h-full object-cover absolute transition-transform duration-1000 ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
              src={image.src}
              alt={image.text}
            />
          ))}
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1
            className={`text-white text-5xl font-bold shadow-lg transform transition-all duration-700 ease-out ${
              isTransitioning
                ? "translate-y-10 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
            key={currentIndex}
          >
            {images[currentIndex].text}
          </h1>
          <h1 className="text-white text-5xl font-bold ml-4">Booking</h1>
        </div>
      </div>
    </>
  );
}

export default HomeImage;
