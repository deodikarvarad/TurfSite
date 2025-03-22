import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div
      className="relative w-full h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={image.id}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out transform ${
              index === currentIndex ? "opacity-100 scale-105" : "opacity-0"
            }`}
            src={image.src}
            alt={image.text}
            loading="lazy"
          />
        ))}
      </div>

    
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold shadow-lg transition-opacity duration-700">
          {images[currentIndex].text} Booking
        </h1>
      </div>

      
      <button
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition"
        onClick={prevSlide}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition"
        onClick={nextSlide}
      >
        <FaArrowRight size={20} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeImage;
