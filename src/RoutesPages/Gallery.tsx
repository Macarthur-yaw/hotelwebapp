import { ImageGallery } from "../Constant/ImageGallery";
import bgOne from '../assets/Gallery4.jpg'
import {useEffect, useState} from 'react'
const Gallery = () => {
//  const[display,setDisplay]=useState<boolean>(false)
const[index,setIndex]=useState<number>(0);
const[all,setAll]=useState<boolean>(false)
useEffect(()=>
{
setAll(true)
},[])
const handleIndex=(indexNum:number)=>{
  setIndex(indexNum)
  setAll(false);

}
    return ( 
 <div>
      <div className="relative">
      <img src={bgOne} className='w-full h-[100px] md:h-[250px] object-cover'/>   
     <span className="absolute bottom-2 md:bottom-10 left-1/2 transform  -translate-x-1/2">
<h1 id="header" className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2 ">Our Gallery</h1>
     </span>
     <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0">

     </div>
     </div>
 <div className="md:px-4 mx-auto  w-fit  mt-10 flex flex-row gap-4 px-4">
<button onClick={()=>setAll(true)}   className="border-[1px] rounded sm:px-8 px-4 py-[2px] border-black bg-black text-white text-[12px] sm:text-[14px]">All</button>
<button onClick={()=>handleIndex(2)} className="border-[1px] rounded sm:px-8 px-4 border-black text-white bg-black text-[12px] sm:text-[14px]">Restaurant</button>
<button onClick={()=>handleIndex(3)} className="border-[1px] rounded sm:px-8 p-2 bg-black text-white text-[14px] sm:text-[14px]">Gymn</button>
<button  onClick={()=>handleIndex(4)} className="border-[1px] rounded sm:px-8 px-4 bg-black text-white text-[12px] sm:text-[14px]">Swimming pool</button>
 
 </div>
 <div className="mt-4 px-4 mb-10 ">
 
     {
        ImageGallery.map((item)=>(
            <div key={item.id}
            
            className={`${all ? '' : `${index === item.id ? 'block':'hidden'}` } `}>
             
        <div className="grid  gap-2 grid-cols-3 md:grid md:grid-cols-3 md:gap-2"> {
            item.imgProps?.map((content)=>(
              <div key={content.id} className="flex flex-col mb-1 " >
                <img src={content.imgUrl} className="md:w-[800px] w-[400px] h-[200px] md:h-[500px] object-cover  "/>
                
              </div>  
            ))
         }    </div>   
              </div>
        ))
     }
     
      </div>  </div>
     );
}
 
export default Gallery;