// import React from 'react';

import {FaEnvelope,FaPhoneAlt,FaFacebook,FaTwitter,FaInstagram,FaMapMarker,} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="bg-[#272727] text-[#AAAAAA] px-4">
<div className='py-20'>
      <div className="container mx-auto md:grid grid-cols-1 md:grid-cols-4 gap-16">

<span className="flex flex-col gap-2">
   <h1 id='header' className='text-2xl font-medium text-white'> HotelLogo
   </h1>
   
   <div className='text-[12px]  w-[70%]'>
   We aim at giving you the best luxury experience you can possible ask for, right here in the heart of Tarkwa

Book your stay now and let us pamper you!
   </div>
    
    </span>      
        <div className='mt-4'>
          <h2 className="md:text-2xl text-md font-semibold md:mb-4 mb-2 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className='mt-4 '>
        <div className="flex flex-col gap-2">
                <h5 className='text-white'>Contact Us</h5>
                
                  <ul className="flex flex-col gap-2 ">
                    <li className='inline-flex text-sm items-center gap-2'>
                   <FaMapMarker className='text-[#ACBAC4]'/>
                     Tarkwa(Umat)
                    </li>
                    <li className='inline-flex text-sm items-center gap-2'>
                     <FaPhoneAlt className='text-[#ACBAC4]'/>
                      0599293572
                    </li>
                    <li className='inline-flex text-sm items-center gap-2'>
                      <FaEnvelope className='text-[#ACBAC4]'/>
                      <a href="mailto:arthurkevin1260@gmail.com">info.kevin.com</a>
                    </li>
                  </ul>
              </div>

 </div>

        <div className='mt-4'>
          <h2 className="md:text-2xl text-md font-semibold md:mb-4 mb-2 text-white">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-[#AAAAAA] hover:text-white"><FaFacebook/></a>
            <a href="#" className="text-[#AAAAAA] hover:text-white"><FaTwitter/></a>
            <a href="#" className="text-[#AAAAAA] hover:text-white"><FaInstagram/></a>
          </div>

         
        </div>
      </div>
      </div>
      {/* Bottom Footer */}
      <div className="text-sm text-center">
        <p>&copy; 2023 Hotel Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
