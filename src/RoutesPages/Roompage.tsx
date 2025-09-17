import { useParams } from "react-router-dom";
import {useState} from 'react'
// import { RoomCards } from "../Components/RoomCards";
import {FaCheck} from 'react-icons/fa'
import bgOne from '../assets/bgOne.jpg'
import { Rooms as RoomConst } from "../Constant/Rooms";
import { motion } from "framer-motion";
// import BookingDetails from "../Components/BookingDetail";
// import React, { useState } from 'react';

const Roompage = () => {
    const {id}= useParams();
    const numId:number | undefined= id? parseInt(id,10):undefined

const[display,setDisplay]=useState<string>('')
const[displayValue,setDisplayValue]=useState<boolean>(false)
    // console.log(id);
const handleDisplay=(imgUrl:string)=>{
setDisplay(imgUrl)
setDisplayValue(!false)
}

  
  

    return (  
      <div>
 <div>
    
 <div className="relative">
      <img src={bgOne} className='w-full h-[100px] md:h-[250px] object-cover'/>   
     <span className="absolute bottom-2 md:bottom-10 left-1/2 transform  -translate-x-1/2">
<h1 id="header" className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2 ">Premier Hotel</h1>
     </span>
     <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0">

     </div>
     </div>
 {/* <img src={display}/> */}
 <div className='flex md:flex-row flex-col'>
        <div className="mt-10 px-4">
            
<div className="flex flex-col gap-4">
            {RoomConst.map((content) => (
            <div
              key={content.id}
              className={`${numId === content.id ?'block':'hidden'}   `}
            >
              <motion.img
              initial={displayValue && {x:-100}}
              animate={displayValue &&  {x:0}}
              transition={{duration:2}}
                loading="lazy"
                src={displayValue ? display : content.imgUrl}
                className="md:w-[800px] w-[100%] sm:h-[400px] h-[300px] object-cover"
                alt=""
              ></motion.img>
              {/* <span className="flex flex-row justify-between py-4 items-center p-2">
                <h2> {content.title}</h2>
                <button  
                className="bg-black text-white p-2 text-[0.8rem]">
Book now                
</button>
              </span>
            */ }      <div className="flex flex-row gap-[1px] mt-4 mb-4"> 
                {
                    content.items?.map((contents)=>(
                        <div key={contents.id}
                         className={`${numId === content.id ? 'block ':'hidden'}`}>
<img onClick={()=>handleDisplay(contents.imgUrl)}
 src={contents.imgUrl} className="w-[150px] 
   
 md:w-[200px] md:h-[100px] h-[100px] cursor-pointer object-cover"/>
      
                       </div>
                    )

                    )
                }
                </div>

                <div className="md:w-[50%] mb-10 flex flex-col gap-2">
            <h1 className="font-medium text-[20px]">{content.title}</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, rerum? Culpa numquam autem, optio saepe unde enim harum quam non aliquid eveniet nesciunt dolor dolorum animi dolore architecto quibusdam veritatis.</h2>
         <div className="mt-6">
            <h1 className="font-medium text-lg md:text-2xl text-left" id="heading">SERVICES</h1>
         
         <span className="grid grid-cols-2 gap-4 ">
          {content.services?.map((content)=>(
            <div key={content.id}>
              
            <h2 className="inline-flex gap-2 items-center text-gray-600"> <FaCheck className='w-[10px]'/> {content.content}</h2>
            </div>
          ))}
         </span>
         </div>
            </div>
            </div>
          ))}
            
        </div>
        </div>
        
        
    
        </div>
        </div>

        {/* <BookingDetails/> */}
        </div>
        );
}
 
export default Roompage;