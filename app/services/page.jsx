"use client"
import { useEffect } from "react";
import Image from "next/image";

const services = [
  {
    title: "Car Repair",
    imgSrc: "/images/service1.jpg",
  },
  {
    title: "Engine Diagnostics",
    imgSrc: "/images/service2.jpg",
  },
  {
    title: "Tire Replacement",
    imgSrc: "/images/service3.jpg",
  },
  {
    title: "Oil Change",
    imgSrc: "/images/service4.jpg",
  },
  {
    title: "Body Work",
    imgSrc: "/images/service5.jpg",
  },
];

export default function Services() {
  useEffect(() => {
    const slider = document.getElementById("slider");
    let scrollAmount = 0;
    const scrollInterval = setInterval(() => {
      scrollAmount += 2; // Adjust speed by changing this value
      if (slider) {
        slider.scrollLeft = scrollAmount;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0; // Reset to the start
        }
      }
    }, 30); // Lower value for smoother/slower scroll

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="bg-gray-700 h-40 mt-10 text-center p-10">
        <h1 className="font-extrabold text-white text-5xl">Our Services</h1>
        <p className="text-white">Home/Service</p>
      </div>
      
      <div className="bg-gray-100 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
        <div
          id="slider"
          className="flex gap-8 overflow-x-scroll no-scrollbar max-w-6xl mx-auto px-4 py-5"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-72 h-80 flex-shrink-0"
            >
              <div className="w-full h-48 mb-4 relative">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 p-5 bg-white shadow-lg rounded-lg max-w-5xl mx-auto my-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/service5.jpg"
            alt="Car repair"
            width={400}
            height={400}
            className="rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Refresh your car with our services
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium unde omnis iste.
          </p>
          
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            About Us
          </button>
        </div>
      </div>
    </>
  );
}

