import React from 'react'

export default function Footer() {
  return (
   <>
   <div className="bg-slate-200 py-16 mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 text-sm p-10 max-w-6xl mx-auto">
    {/*.....Left Section....*/}
    <div>
      <p className="text-2xl font-semibold mb-5 text-gray-800">Office</p>
      <p className="text-gray-600 leading-relaxed mb-3">
        Germany — 785 15h Street, Office 478, Berlin, De 81566
      </p>
      <p className="text-gray-900 mb-2">info@email.com</p>
      <p className="text-gray-800">+1 840 841 25 69</p>
    </div>

    {/*.....Center Section....*/}
    <div>
      <p className="text-2xl font-semibold mb-5 text-gray-800">Links</p>
      <ul className="flex flex-col gap-3 text-gray-600">
        <li className="hover:text-gray-900 transition-colors">Home</li>
        <li className="hover:text-gray-900 transition-colors">Services</li>
        <li className="hover:text-gray-900 transition-colors">About Us</li>
        <li className="hover:text-gray-900 transition-colors">Appointment</li>
        <li className="hover:text-gray-900 transition-colors">Contacts</li>
      </ul>
    </div>

    {/*.....Right Section....*/}
    <div>
      <p className="text-2xl font-semibold mb-5 text-gray-800">Socials</p>
      <ul className="flex flex-col gap-3 text-gray-600">
        <li className="hover:text-gray-900 transition-colors">Facebook</li>
        <li className="hover:text-gray-900 transition-colors">Twitter-X</li>
        <li className="hover:text-gray-900 transition-colors">Dribble</li>
        <li className="hover:text-gray-900 transition-colors">Instagram</li>
      </ul>
    </div>
  </div>

  {/*.....Copyright Section....*/}
  <div className="bg-slate-300 mt-10">
    <hr className="border-gray-400" />
    <p className="py-5 text-sm text-center text-gray-700">
      ThemeREX © 2024. All rights reserved.
    </p>
  </div>
</div>

   </>
  )
}
