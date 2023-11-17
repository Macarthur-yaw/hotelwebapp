import { Images } from "../Constant/Images";
import { SectionContents } from "../Constant/SectionContent";
import { useState } from "react";
import { motion } from "framer-motion";
const Section = () => {
  const [contentIndex,setContentIndex]=useState<number>(0)
//   const[color,setColor] =useState<boolean>(false)    
    function displayContent(index:number){
setContentIndex(index)
// setColor(!color)
    }
    return ( 
        <div className="">
            <h1 className="text-center font-semibold text-[30px] mt-10">OUR SERVICES </h1>
        <div className="flex flex-row p-10 items-center gap-2">

      {
            Images.map((image)=>(  
                <div key={image.id} className={`${image.id === contentIndex ? 'block': 'hidden'}`}>
<motion.img 
initial={{opacity:0.8}}
animate={image.id === contentIndex ? {opacity:1}: {opacity:0.8}}
transition={{duration:1}}
src={image.imgUrl} alt="" className="md:w-[600px] md:h-[400px]">
    </motion.img>
</div>
             ))
        }
        <div className="flex flex-col gap-4 p-4  w-[50%]">
        
        {SectionContents.map((content)=>(
            <div
            
            onClick={()=>displayContent(content.id)}
            key={content.id} className={` p-2 active:border-l-2 border-l  hover:bg-gray-100 flex flex-col gap-2  cursor-pointer`}>
        <div >  
       <h1 className="font-semibold">   {content.text}</h1>
   <h3>
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