// import React from 'react';

import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">

<span className="flex flex-col gap-2">
   <h1> HotelLogo
   </h1>
    <form className="flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border  focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black border-2 border-black text-white py-2 px-4  hover:bg-blue-600 transition-all"
            >
              Subscribe
            </button>
          </form>
          <h2 className="text-2xl font-medium mt-6 mb-4">Subscribe to Our Newsletter</h2>

    </span>      
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/amenities">Amenities</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>123 Hostel Street</p>
          <p>City, Country</p>
          <p>Email: info@hostel.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>

        {/* Social Media and Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300"><FaFacebook/></a>
            <a href="#" className="text-white hover:text-gray-300"><FaTwitter/></a>
            <a href="#" className="text-white hover:text-gray-300"><FaInstagram/></a>
          </div>

         
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 text-center">
        <p>&copy; 2023 Hotel Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
