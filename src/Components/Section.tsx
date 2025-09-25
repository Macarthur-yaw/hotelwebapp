import { Images } from "../Constant/Images";
import { SectionContents } from "../Constant/SectionContent";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
const Section = () => {
  const [contentIndex,setContentIndex]=useState<number>(0)
//   const[color,setColor] =useState<boolean>(false)    
    function displayContent(index:number){
setContentIndex(index)
// setColor(!color)
    }
    useEffect(()=>{
setContentIndex(1)
    },[])
    return ( 
        <div className="">
            <h1 className="text-center font-semibold text-[30px] mt-10 text-[#5F9C33]">OUR SERVICES </h1>
        <div className="flex md:flex-row flex-col-reverse p-4 md:p-10 items-center md:gap-2 gap-4">

      {
            Images.map((image)=>(  
                <div key={image.id} className={`${image.id === contentIndex ? 'block': 'hidden'}`}>
<motion.img 
initial={{opacity:0.8, x:-100}}
animate={image.id === contentIndex ? {opacity:1, x:0}: {opacity:0.8}}
transition={{duration:0.5}}
src={image.imgUrl} alt="" className="md:w-[600px] object-cover  md:h-[400px] h-[250px] w-[500px]">
    </motion.img>
</div>
             ))
        }
        <div className="flex flex-col gap-4 md:p-4   md:w-[50%]">
        
        {SectionContents.map((content)=>(
            <div
            
            onClick={()=>displayContent(content.id)}
            key={content.id} className={` p-2 active:border-l-2 border-l  hover:bg-gray-100 flex flex-col gap-2  cursor-pointer`}>
        <div >  
       <h1 className="font-semibold text-[16px] font-serif ">   {content.text}</h1>
   <h3 className="text-[14px]">
    {content.content}
   </h3>
              </div>
                </div>
        ))}

        {

        }
        

        </div>
        

        </div>   </div> );
}
 
export default Section;