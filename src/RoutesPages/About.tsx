import bgOne from '../assets/Gallery4.jpg'
import picOne from '../assets/aboutpic.jpg'

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
 
 <div className="mt-10 px-4 flex flex-row  mx-auto  mb-4 gap-4">
 
 <div className='flex flex-col-reverse md:flex-row md:gap-4 items-center gap-2'>
    <img src={picOne} className=' rounded  md:w-[50%] '/>
   <span className='flex flex-col items-center '>
    <h1 className='font-medium text-left py-4 text-2xl' id='heading'>About us</h1>
    {/* <p className='font-medium text-xl'>Welcome</p> */}
<h2 className='text-gray-400 font-medium text-sm '>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, pariatur. Hic repudiandae vel aut provident expedita sunt esse vitae quo aliquid, minus deleniti voluptas enim molestias alias, consequuntur voluptatibus pariatur.

Home
About Us
Our Services
Gallery
Contact Us
About Us
A Place to Remember

Longji International Hotel provides a truly unforgettable experience for those with distinctive taste.

Longji International Hotel is a modern, upscale hospitality company that is passionate about ‘making moments’, recognising that small gestures make a big difference to our guests, since 2013. The hotel has 31 rooms: 16 deluxe rooms, 13 Executive Suites and 2 Executive Deluxe rooms.

Whether you are enjoying a refreshing dip in our swimming pool, relaxing with a cocktail in our exclusive Bar, you can expect service that is professional, friendly and attentive without pretention or Fuss.

For Business or Pleasure, Longji International Hotel is the true home away from home you will never want to leave. 
</h2>
</span>
 </div>

</div>

      </div>
     );
}
 
export default About;