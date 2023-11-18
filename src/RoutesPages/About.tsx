// import { ImageGallery } from "../Constant/ImageGallery";
import bgOne from '../assets/Gallery4.jpg'
import picOne from '../assets/aboutpic.jpg'
import picTwo from '../assets/aboutpic1.jpg'
// import picThree from '../assets/aboutpic2.jpg'
const About = () => {
 
    return ( 
 <div>
      <div className="relative">
      <img src={bgOne} className='w-full h-[100px] md:h-[250px] object-cover'/>   
     <span className="absolute bottom-2 md:bottom-10 left-1/2 transform  -translate-x-1/2">
<h1 id="header" className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2 ">Premier Hotel</h1>
     </span>
     <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0">

     </div>
     </div>
 
 <div className="mt-2 px-4 flex flex-col  mb-4 gap-4">
 
 <div>
    <img src={picOne} className='  '/>
    <h1 className='font-medium text-center'>About us</h1>
<h2>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, pariatur. Hic repudiandae vel aut provident expedita sunt esse vitae quo aliquid, minus deleniti voluptas enim molestias alias, consequuntur voluptatibus pariatur.

</h2>
    
 </div>

 <div>

    <img src={picTwo} className='object-cover'/>
    <h1>Hotel information</h1>
    <ul>
        <li>
            Restaurant & lounge bar
        </li>
        <li>
            Gym and tennis Court
        </li>
        <li>
            Outdoor pool
        </li>
        <li>
            Car rental 
        </li>
    </ul>
 </div>

      </div>  </div>
     );
}
 
export default About;