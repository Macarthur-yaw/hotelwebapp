// import React from 'react';
// import './TestimonialCard.css'; // Import your Tailwind CSS file
// import {FaStar} from "react-icons/fa";
import FaStars from '../assets/Stars.png'
import { motion } from 'framer-motion'
interface Props{
    quote:string,
    author:string,
    
}
const AboutSection = ({ quote, author,   }:Props) => {
  return (
    <motion.div
    initial={{scale:1}}
    
    whileHover={{scale:1.01}}
    transition={{duration:0.2}}
    className="md:max-w-[25%]   gap-2 items-center  mx-auto bg-white p-6    flex flex-col border-[1px] border-gray-50 ">
      {/* <img src={avatar} alt="Avatar" className="w-[50%] h-[200px] rounded-md mx-auto mb-4" /> */}
      <p className="text-gray-600 font-medium">{author}</p>  
      <span className="flex flex-col gap-2 ">
      <span className="flex flex-row items-center mx-auto gap-2">
        <img src={FaStars} alt="" className=""/>
      </span>
      <p className="text-[14px] text-gray-800 mb-2  text-center line-clamp-5">{quote}</p>

    
      {/* <p className="text-gray-500">{position}</p> */}
      </span>
    </motion.div>
  );
};

export default AboutSection;
