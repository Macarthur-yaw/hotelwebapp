
import picOne from '../assets/home.jpeg'

const About = () => {
  
    return ( 
 <div>
      <div className="relative">
      <img src="https://res.cloudinary.com/dnwyppsef/image/upload/v1759484151/premi_wzvraa.jpg" className='w-full h-[100px] md:h-[250px] object-cover'/>   
     <span className="absolute bottom-2 md:bottom-10 left-1/2 transform  -translate-x-1/2">
<h1 id="header" className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2 ">Premier Hotel</h1>
     </span>
     <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0">

     </div>
     </div>
 
 <div className="mt-10 px-4 flex flex-col  mx-auto  mb-4 gap-4">
 
 <div className='flex flex-col-reverse md:flex-row md:gap-4 items-center gap-2'>
    <img src={picOne} className=' rounded  md:w-[50%] '/>

    <div>
   <span className='flex flex-col items-center '>
    <h1 className='font-medium text-left py-4 text-2xl' id='heading'>About us</h1>
    {/* <p className='font-medium text-xl'>Welcome</p> */}
<p>
     Welcome to Crystal Ark Hotel

Located in the heart of Accra on Regal Street, Agbelezaa-Manet Road, Crystal Ark Hotel offers a serene escape from the hustle and bustle of city life. Our hotel is strategically situated near top hospitals, shopping malls, and restaurants, making us the perfect choice for both business and leisure travelers.

Our Story

At Crystal Ark Hotel, we believe in providing a haven of comfort and relaxation. Our 28 stylishly designed rooms, including Standard, Executive, and Premium Rooms, are equipped with modern amenities to ensure a restful stay. Whether you're visiting for work or play, our hotel's tranquil ambiance and warm hospitality will make you feel right at home.

Come and experience the Crystal Ark difference. We look forward to welcoming you!
</p>


</span>

<span>
     <h1 className='font-medium text-left py-4 text-2xl text-center' id='heading'>Our Facilities</h1>


     <p>We offer a range of facilities to enhance your stay, including:</p>
<ol>
  <li>- Accommodation in our beautifully appointed rooms</li>
  <li>- In-House Laundry services for your convenience</li>
  <li>- High-Speed WiFi to stay connected</li>
  <li>- Delicious Complimentary Breakfast options to start your day off right</li>
</ol>

</span>
</div>
 </div>

</div>

      </div>
     );
}
 
export default About;