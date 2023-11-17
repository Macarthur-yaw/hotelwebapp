// import React from 'react';
// import './TestimonialCard.css'; // Import your Tailwind CSS file
// import {FaStar} from "react-icons/fa";
import FaStars from '../assets/Stars.png'
import { motion } from 'framer-motion'
interface Props{
    quote:string,
    author:string,
    position:string,
    avatar:string
}
const AboutSection = ({ quote, author, position, avatar }:Props) => {
  return (
    <motion.div
    initial={{scale:1}}
    
    whileHover={{scale:1.08}}
    transition={{duration:0.2}}
    className="max-w-[30%] border-2   gap-2 items-center  mx-auto bg-white p-6 rounded-md border-white shadow-md flex flex-row">
      <img src={avatar} alt="Avatar" className="w-[50%] h-[200px] rounded-md mx-auto mb-4" />
      
      <span className="flex flex-col  ">
      <span className="flex flex-row items-center gap-2">
        <img src={FaStars} alt="" className=""/>
      </span>
      <p className="text-[14px] text-gray-800 mb-2 font-medium line-clamp-5">{quote}</p>

      <p className="text-gray-600 font-semibold">{author}</p>
      <p className="text-gray-500">{position}</p>
      </span>
    </motion.div>
  );
};

export default AboutSection;
