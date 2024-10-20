"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // Array of background images
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <>
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images[currentImageIndex]} // Use the current image
            alt="Car repair"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="transition-opacity duration-1000" // Smooth fading transition
          />
          {/* Overlay for darkening the image */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">We Enhance Your Vehicle's Beauty</h1>
          <p className="text-lg md:text-xl mb-10 text-center px-4 md:px-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>

    </>
  );
}

