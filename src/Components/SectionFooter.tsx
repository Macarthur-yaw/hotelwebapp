// import React from 'react';
// import Section from './Section';
import { useState } from 'react';
// import {FaPhoneAlt,FaEnvelope} from 'react-icons/fa'
import axios from 'axios';
const SectionFooter = () => {
  const [name,setName]=useState<string>('')
  const [email,setEmail]=useState<string>('')
  const[message,setMessage]=useState<string>('')
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(message)
    axios.post('http://localhost:5000/api/contact',{
      name:name,
      email:email,
      message:message
    }).then((response)=>console.log(response)).catch((error)=>console.log(error))
  }
  return (
    <div className="p-2">
    <div className="md:flex md:flex-row flex-col  p-2 gap-6 items-center mx-auto my-8 md:w-[55%]   ">

      {/* <div className="flex flex-col  gap-8">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>

        <div>
          <h3 className="text-xl font-semibold mb-2">Hotel Address</h3>
          <p>123 Main Street</p>
          <p>City, Country</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p className='inline-flex items-center gap-[4px]'><FaEnvelope/> Email: info@yourhotel.com</p>
          <p className='inline-flex items-center gap-[4px]'> <FaPhoneAlt/>
            Phone: +1 123-456-7890</p>
        </div>
      </div> */}

      <form onSubmit={handleSubmit} className="mt-8 md:w-[80%] md:ml-auto">
        
        <span>
          <h1 className='text-center text-2xl '>Contact us</h1>
        </span>
        <div className=" flex flex-col gap-4">
      <h1 className='text-[16px] text-center font-medium' id='header'>  Kindly fill this form  with your info and enquiries, if you want us to contact you.
      </h1><div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
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
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
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
