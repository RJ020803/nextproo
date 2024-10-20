import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="bg-gray-700 h-40 mt-10 text-center p-10">
        <h1 className="font-extrabold text-white text-5xl">About Us</h1>
        <p className="text-white">Home/About Us</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-5 bg-white shadow-lg rounded-lg max-w-5xl mx-auto my-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/img1.jpg"
            alt="Car repair"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Text and Second Image Section */}
        <div className="md:w-1/2">
          {/* Text Section */}
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Fast and Reliable Car Repair Services
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis
            iste perspiciatis ut perspiciatis unde omnis iste natus. We provide
            high-quality, fast, and reliable car repair services that you can
            trust.
          </p>

          {/* Second Image Below Text */}
          <div className="flex justify-center mt-4">
            <Image
              src="/images/img2.jpg"
              alt="Additional car repair image"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-5 bg-white shadow-lg rounded-lg">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-3">
            We understand your car very well
          </h1>
          <p className="text-gray-600">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          {/* First Row */}
          <div className="flex items-start gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-800">30K+</h1>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Happy Customers
              </h2>
              <p className="text-gray-600">
                Natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-start gap-4">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-800">2587</h1>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Perfect Reviews
              </h2>
              <p className="text-gray-600">
                Natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 p-5 bg-white shadow-lg rounded-lg max-w-5xl mx-auto my-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/img3.jpg"
            alt="Car repair"
            width={400}
            height={400}
            className="rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            We Enhance Your Vehicle's Beauty
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 p-5 bg-white shadow-lg rounded-lg max-w-5xl mx-auto my-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/img4.jpg"
            alt="Car repair"
            width={400}
            height={400}
            className="rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          />
        </div>

        {/* FAQ Section */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>

          <div className="border-t border-gray-200">
            {/* Question 1 */}
            <details className="py-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-700">
                Do you work on big trucks?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we have the necessary tools and expertise to work on all
                kinds of trucks, including larger models.
              </p>
            </details>

            {/* Question 2 */}
            <details className="py-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-700">
                Can I see some of the before/after images?
              </summary>
              <p className="mt-2 text-gray-600">
                Absolutely! You can check our gallery section for a detailed
                view of the transformation we ve made on various vehicles.
              </p>
            </details>

            {/* Question 3 */}
            <details className="py-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-700">
                Do you offer free consultations?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we offer free consultations for all our services. Feel free
                to get in touch with us for more details.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
