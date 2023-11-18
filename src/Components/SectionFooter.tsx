// import React from 'react';
// import Section from './Section';
import {FaPhone} from 'react-icons/fa'
const SectionFooter = () => {
  return (
    <div className="p-2">
    <div className="md:flex md:flex-row flex-col  p-2 gap-6 items-center mx-auto my-8 md:w-[55%]   ">

      <div className="flex flex-col  gap-8">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>

        <div>
          <h3 className="text-xl font-semibold mb-2">Hotel Address</h3>
          <p>123 Main Street</p>
          <p>City, Country</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p>Email: info@yourhotel.com</p>
          <p>
            <FaPhone/>
            Phone: +1 123-456-7890</p>
        </div>
      </div>

      <form className="mt-8 md:w-[50%] md:ml-auto">
        
        <div className=" flex flex-col gap-4">
        Kindly fill this form  with your info and enquiries, if you want us to contact you.
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full outline-none border rounded-md"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border outline-none rounded-md"
              placeholder="john.doe@example.com"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 bg-black text-white py-2 px-4  hover:bg-black transition-all"
        >
          Submit
        </button>
      </form>
    </div></div>
  );
};

export default SectionFooter;
