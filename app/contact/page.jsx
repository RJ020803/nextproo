import React from "react";

export default function page() {
  return (
    <>
      {/* Contact Header */}
      <div className="bg-gray-700 h-40 mt-10 text-center p-10">
        <h1 className="font-extrabold text-white text-5xl">Contact Us</h1>
        <p className="text-white">Home/Contact Us</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center gap-16 mt-16 px-4 md:px-20">
        {/* Contact Section */}
        <div className="flex flex-col items-start text-center md:text-left">
          <h1 className="text-3xl font-semibold mb-4">Get in Touch</h1>
          <p className="text-sm font-light max-w-md leading-relaxed">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim. Adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Address Section */}
        <div className="flex flex-col items-start text-center md:text-left">
          <h1 className="text-3xl font-semibold mb-4">Address</h1>
          <p className="text-sm font-light leading-relaxed">
            Germany — 785 15h Street, Office 478, Berlin, De 81566
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col items-start text-center md:text-left">
          <h1 className="text-3xl font-semibold mb-4">Contact Details</h1>
          <p className="text-sm font-light leading-relaxed">
            infoAyoursite.com
          </p>
          <p className="text-sm font-medium mt-2">+1 840 841 25 69</p>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-10 px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Find Us Here
        </h2>
        <div className="w-full h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29194.427749267357!2d91.42613175!3d23.84335535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1729370117370!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
