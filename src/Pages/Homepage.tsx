// import Swiper from "swiper";
import { SwiperSlide,Swiper } from "swiper/react";
import 'swiper/css'
import { Navigation,Pagination,A11y,Autoplay,EffectFade } from "swiper/modules";
import 'swiper/css/bundle'
import { backgroundPictures } from "../Constant/BackgroundPictures";
import { motion } from "framer-motion";
import SearchHostels from "../Components/SearchHostels";
import HomeCards from "../Components/HomeCards";
import rooms from '../assets/roomss.jpg'
import picOne from '../assets/a42e39683e23158d39680fef35ab550f.jpg'
import picTwo from '../assets/pic2.jpg'
// import rooms from '../assets/roomss.jpg'
import picThree from '../assets/pic5.jpg'
import picFour from '../assets/pic4.jpg'
import { RoomCards } from "../Components/RoomCards";
const Homepage = () => {
  return (
    <div className="">
      <Swiper
              
      
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        effect="fade"
        pagination={{ clickable: true }}
      
      
      >
        {backgroundPictures.map((picture) => (
          <SwiperSlide key={picture.id}>
            <div className="relative h-screen w-full">
              <img loading="lazy" src={picture.imageUrl} alt="background" className="h-full w-full object-cover" />

              <div className="absolute bg-black w-full h-screen top-0 bg-opacity-60">
                <motion.div
                  key={picture.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 4 }}
                  className="absolute w-[70%] flex flex-col gap-4  top-1/2 transform -translate-y-1/2 left-1/2  -translate-x-1/2 "
                >
                  <h1 className="text-7xl text-center text-white font-bold">
                    {picture.Title}
                  </h1>
                
              <span className="">
  <div className="w-max  mx-auto">
    <h1
      className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 text-xl text-white font--semibold">
      {picture.content}
    </h1>
  </div>
  </span>
                
                                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

<SearchHostels/>

<section className="mt-20">
  <div className="flex flex-row p-10 gap-4">
  <HomeCards imageUrl={rooms} title="Rooms" />
<div className="grid grid-cols-2 gap-4">
<HomeCards imageUrl={picTwo} title="Dining" />
<HomeCards imageUrl={picOne} title="Conference" />
<HomeCards imageUrl={picFour} title="Facilites" />
<HomeCards imageUrl={picThree} title="Wedding Package" />
  
</div>
</div>
</section>

<aside>
  OUR SUITES

<div>
  <Swiper 
style={{
  '--swiper-navigation-color': '#fff',
  '--swiper-pagination-color': '#fff',
}}

     modules={[ Pagination, EffectFade]}
      spaceBetween={10}
     slidesPerView={2}
     effect="fade"
     pagination={{ clickable: true }}
  
  >
  {RoomCards.map((room)=>( 
   <SwiperSlide key={room.id}

   > <div className="border-2 " >
<img src={room.imgUrl} alt="room" className=" h-[400px] object-cover"/>
   <h1>{room.title}</h1>
   <h2>{room.content}</h2>
   <button>VIEW MORE</button>
      </div></SwiperSlide>
   ))}</Swiper>
</div>

</aside>
    </div>
  );
}


export default Homepage;
