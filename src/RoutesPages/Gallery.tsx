import { ImageGallery } from "../Constant/ImageGallery";
import bgOne from '../assets/Gallery4.jpg'

const Gallery = () => {
 
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
 <div className="md:px-4 mx-auto w-fit   mt-10 flex flex-row gap-4">
<button  className="border-[1px] sm:px-4 px-2 py-[2px] border-black bg-black text-white text-[12px] sm:text-[14px]">All</button>
<button className="border-[1px] sm:px-4 px-2 border-black text-white bg-black text-[12px] sm:text-[14px]">Restaurant</button>
<button className="border-[1px] sm:px-4 px-2 bg-black text-white text-[12px] sm:text-[14px]">Gymn</button>
<button className="border-[1px] sm:px-4 px-2 bg-black text-white text-[12px] sm:text-[14px]">Swimming pool</button>
 
 </div>
 <div className="mt-2 px-4 flex flex-col md:grid md:grid-cols-3 mb-4 gap-4">
 
     {
        ImageGallery.map((item)=>(
            <div key={item.id} className={``}>
                <img src={item.imgUrl} alt=""
                
                className={`w-[500px] md:w-[700px] md:h-[600px] object-cover mx-auto`} />
                </div>
        ))
     }
     
      </div>  </div>
     );
}
 
export default Gallery;