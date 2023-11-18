import  { lazy, Suspense } from 'react';

import { backgroundPictures } from "../Constant/BackgroundPictures";
import { motion } from "framer-motion";
import { RoomCards } from "../Components/RoomCards";
import { useEffect,useState } from "react";
const Section  =lazy(()=>import ( "../Components/Section"));

const AboutSection=lazy(()=>import("../Components/AboutSection"));
// import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
import manPic from '../assets/man (2).jpg'
import { Rooms } from "../Constant/Rooms";
import { ImageGallery } from "../Constant/ImageGallery";

const Location=lazy(()=>import( "../Components/Location"));
const SectionFooter = lazy(() => import("../Components/SectionFooter"));

import chevronRight from '../assets/chevron-right.png'
// import {lazy } from 'react'
const Homepage = () => {
  const[slideIndex,setSlideIndex]=useState<number>(1)
  useEffect(()=>{

    const interval=setInterval(()=>{
   if(slideIndex<(backgroundPictures.length-1)){
    setSlideIndex(prev=>prev+1)
    
   }
   else {
    setSlideIndex(1)
   }
    },5000)

    return ()=>clearInterval(interval)
   
  },[slideIndex])

  const NextSlide=(id:number)=>()=>{
    console.log(id);
    if(id<backgroundPictures.length-1){
      setSlideIndex(id+1)
 
    }
    else{
      setSlideIndex(1)
    }
  }
  const PrevSlide=(id:number)=>()=>{  
    // setSlideIndex(id-1)
    if(id===1){
      setSlideIndex(backgroundPictures.length-1)
    } else{
      setSlideIndex(id-1)
    }
  }
  const testimonialData = {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    position: "CEO, Company Name",
    avatar: manPic,
  };
  return (
    <div className={`py-20`}>
      {backgroundPictures.map((picture) => (
        <motion.div 
      initial={{opacity:0.6}}
      animate={picture.id === slideIndex ? {opacity:1}: {opacity:0.6}}
        key={picture.id} 
        transition={{duration:1}}
        
        
        className={`${picture.id === slideIndex ? 'block':'hidden'} mt-4 px-4 items-center flex md:flex-row flex-col justify-evenly md:justify-around w-full`}>
       
       <div className=" ">
              <div
                key={picture.id}
                className="  flex flex-col gap-4  items-start  md:h-[100%] justify-center md:px-10 py-20 md-py-[1px] line-clamp-5 "
              >
                <h1 className="md:text-5xl text-5xl   text-black font-bold">
Find Your Perfect Accomodotion Online Today.
                </h1>

                <span className="">
                  <div className="w-max  mx-auto">
                    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-black pr-2 text-[12px] md:text-xl text-black font--semibold">
                      {picture.content}
                    </h1>
                  </div>
                </span>

                <span className="flex flex-row gap-2   items-center">
                  <button className="bg-black text-white w-[100%] md:w-[150px] md:text-xl  md:text-normal text-[12px] border-black border-2 shadow-md md:p-2 p-[3px]">Book</button>
                  <button className="bg-white border-black w-[150px] md:w-[150px] text-[12px] md:text-xl border-[1px] md:p-2 p-[8px]  text-black shadow-md">Learn More</button>
                </span>
              </div>
            </div>
     
          <img
            loading="lazy"
            src={picture.imageUrl}
            alt="background"
            className="px-0   md:w-[600px] w-full h-[350px]  md:h-[80vh]"
          />
         
        </motion.div>
      ))}

 
      <aside className="mt-20 flex  flex-col md:flex-row-reverse items-center gap-4 md:p-20">
      <div className="flex flex-col md:w-[40%] gap-2 p-2    ">
<span className="flex flex-col md:gap-2 gap-4  ">
  <h2 className="font-semibold text-[0.8rem]">Luxury</h2>

  <h1 className="font-semibold md:text-[2.5rem] text-[1.8rem]">Experience the epitome of luxury and comfort</h1>
</span>

<span className=" flex flex-col    gap-2">
  <h2 className="line-clamp-5  font-medium">
  Our hotel offers a prime location, with breathtaking views and easy access to all the popular attractions.
  </h2>
  <span className="flex flex-row items-center gap-2">
  <button className="border-[1px] border-black  p-[4px] w-[35%] font-semibold">BOOK</button>
  <button className="flex flex-row ">Learn more <img src={chevronRight}/> </button>
  </span>
</span>
      </div>

        <div>
          {RoomCards.map((room) => (
            <div key={room.id}
            
            className={`${room.id === slideIndex ? 'block':'hidden'} flex flex-row relative`}>
        
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2  z-10   px-4">
                <button  onClick={NextSlide(room.id)} className=" p-2  font-bold text-[30px]    ">{'<'}</button>
                </span>
          
              <motion.img
              initial={{opacity:0}}
              animate={room.id === slideIndex ? {opacity:1}: {opacity:0}}
              transition={{duration:1.5}}
                src={room.imgUrl}
                alt="room"
                className=" md:h-[550px] w-full object-cover"
              >
                </motion.img>
                <span className="absolute right-0 z-10 top-1/2 px-4 transform  -translate-y-1/2">
                   <button onClick={PrevSlide(room.id)} className=" p-2    font-bold text-[30px]  "> {'>'}  </button>

                   </span>

            </div>
          ))}
        </div>
      </aside>
<Suspense fallback={<div>loading</div>}>
      <Section/>
      </Suspense>
    
      <div className="flex flex-col gap-12 py-20 items-center mt-10">  
{/* <h1 className="font-semibold text-[30px]">    What people say    about us</h1>   */}
     <span className="">  
     <h1 className="font-bold md:text-[2.6rem] text-[20px]">   What People say about us</h1>
     <h3 className="text-sm text-center">These are some of the feedbacks from our clients.</h3>
     </span>   
     <div className="flex md:flex-row flex-col mb-20">
    <Suspense fallback={<div>loading</div>}>
     <AboutSection {...testimonialData}/>
     <AboutSection {...testimonialData}/>
     <AboutSection {...testimonialData}/>
     </Suspense>
     </div> </div>

<div className='p-4'>
 <h1 className="text-center font-semibold text-[30px]">
 OUR ROOMS
  </h1>  

<div className="md:grid md:grid-cols-3 flex flex-col gap-6  w-fit mx-auto">
{Rooms.map((content)=>(
    <div key={content.id} className="border-[1px] border-white shadow-md  ">
      <img loading='lazy' src={content.imgUrl} className='md:w-[300px]
      hover:
      ' alt=""/>
      <span className="flex flex-row justify-between py-4 items-center p-2">
<h2>        {content.title}</h2>
        <button className="bg-black text-white p-2 text-[0.8rem]">VIEW DETAILS</button>

      </span>
      </div>
  ))
}</div>
</div>

<div className="mt-20">
<h1 className="text-center font-medium text-[25px] mb-10">OUR GALLERY</h1> 
<div className="md:grid md:grid-cols-3 flex flex-col gap-6  w-fit mx-auto p-2">
{ImageGallery.slice(0,5).map((content)=>(
    <div key={content.id} className="border-[1px] border-white shadow-md  ">
      <img src={content.imgUrl} className='md:w-[300px] w-full h-[250px]
      hover:
      ' alt=""/>
      <span className="flex flex-row justify-between py-4 items-center p-2">
{/* <h2>        {content.title}</h2> */}
        {/* <button className="bg-black text-white p-2 text-[0.8rem]">VIEW DETAILS</button> */}

      </span>
      </div>
  ))
}</div>
</div>

<div>
  <Suspense fallback={<div>loading</div>}>
  <Location/>
  </Suspense>
</div>
<div>
  <Suspense fallback={<div>loading</div>}>
  <SectionFooter/>
  </Suspense>
</div>
    </div>
  );
};

export default Homepage;
