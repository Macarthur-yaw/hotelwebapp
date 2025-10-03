import { useState } from 'react';

import {FaMapMarker,FaPhoneAlt,FaEnvelope} from 'react-icons/fa'
import { motion,AnimatePresence } from 'framer-motion';
const Contact = () => {
  const[display,setDisplay]=useState<boolean>(false)
    return ( 
        <div >

<div className="relative">
      <img src="	https://res.cloudinary.com/dnwyppsef/image/upload/v1759484151/premi_wzvraa.jpg" className='w-full h-[100px] md:h-[250px] object-cover' loading='lazy'/>   
     <span className="absolute bottom-2 md:bottom-10 left-1/2 transform  -translate-x-1/2">
<h1 id="header" className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2 ">Contact us</h1>
     </span>
     <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0">

     </div>
     </div>

<div className='flex w-[80%]  flex-col  border-white rounded shadow md:w-[80%] mb-20 mx-auto mt-20  '>
      <div>
        <span className=' bg-white justify-center flex flex-col gap-4   items-center'>
            <h1 id='header' className='font-medium  text-[25px] py-8'>
                Contact us
            </h1>
            <h2>
                You can send us an Email 
            </h2>
            
            <button onClick={()=>setDisplay(prevState=>!prevState)} className='border-2 p-2 mb-4 px-6'>{display ? 'Close':'Contact us'}</button>
            <div className='relative'>
      <AnimatePresence>     {display && (
        <motion.div
        initial={{y:-70,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5}}
        exit={{y:-70,opacity:0}}
        className='md:w-[450px]'>
            <form className="mb-4 md:w-[100%]  md:ml-auto">
        
        <div className=" flex flex-col gap-4 ">
      {/* <h1 className='text-[20px] font-medium' id='header'>  Kindly fill this form  with your info and enquiries, if you want us to contact you. */}
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
            className="px-6 cursor-pointer py-2 md:px-8 md:py-3 font-semibold bg-[#5F9C33] text-white text-sm md:text-base border-2 border-[#CE9E37] hover:bg-[#CE9E37] hover:border-[#5F9C33] transition-colors duration-300 flex items-center gap-2"
                                       >
          Submit
        </button>
      </form> 
        </motion.div>
     )}
     
   
     </AnimatePresence>
     </div>
        </span>

      </div>

<div className='flex md:flex-row flex-col gap-2 justify-evenly bg-gray-50 bg-opacity-95 py-20 '>
    <span className=' flex  flex-col items-center gap-[2px] p-2'>
 <span className=' text-[#CE9E37] text-3xl'><FaMapMarker /></span>
<h1 className='text-[#CE9E37] font-medium text-xl'>Location</h1>
<h2 className='text-[#222222] font-normal text-[0.9rem]'>
    Teshie Regal street, Agbelezaa-Manet road
</h2>
    </span>

    <span className='flex flex-col items-center gap-[2px] p-2'>
      <span className=' text-[#CE9E37] text-3xl'>  <FaPhoneAlt /></span>
        <h1 className='text-[#CE9E37] font-medium text-xl'>Call</h1>
        <h2 className='text-[#222222] font-normal text-[0.9rem]'>+233 030 272 6007</h2>
    </span>

    <span className='flex flex-col items-center gap-[2px] p-2'>
      <span className='text-3xl text-[#CE9E37]'>        <FaEnvelope /></span>

        <h1 className='text-[#CE9E37] font-medium text-xl'>Email</h1>
        <h2 className='text-[#222222] font-normal text-[0.9rem]'>crystalarkhotel@gmail.com</h2>
    </span>
</div>
   </div>     </div>
     );
}
 
export default Contact
;