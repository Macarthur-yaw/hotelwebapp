import bg from '../assets/bg.jpg'
import vectorImg from '../assets/Vector.svg'
import picOne from '../assets/a42e39683e23158d39680fef35ab550f.jpg'
import picTwo from '../assets/pic2.jpg'
import rooms from '../assets/roomss.jpg'
import picThree from '../assets/pic5.jpg'
import picFour from '../assets/pic4.jpg'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion/dom'
import picFive from '../assets/pexels-colon-freld-2373201.jpg'
import picSix from '../assets/pexels-eduardo-romero-3124079.jpg'
import picSeven from '../assets/pexels-naim-benjelloun-2029698.jpg'
import picEight from '../assets/pexels-suhel-vba-3659683.jpg'

const Homepage = () => {
    const backgroundPictures=[
        {id:1,
        imageUrl:picEight,
        content:'Discover Extraordinary homes'
        },
        {
            id:2,
            imageUrl:picFive,
            content:'Enjoy our services at a fee'
        },
        {
            id:3,
            imageUrl:picSix,
            content:'Make the best of every moment'
        },
        {
            id:4,
            imageUrl:picSeven,
            content:'We are very best at serving'
        }
    ]
    const[slideIndex,setSlideIndex]=useState<number>(1)
   
   useEffect(()=>{
    const intervalId=setInterval(() => {
        setSlideIndex((prevIndex) =>
          prevIndex < backgroundPictures.length ? prevIndex + 1 : 1
        );
      }, 8000);

    return () => clearInterval(intervalId);
   },[backgroundPictures.length])
    return ( 
        <div>
         
            {backgroundPictures.map((picture)=>(
            
            <motion.div
  initial={{ opacity: 0.8 }}
  animate={{
    opacity: picture.id === slideIndex ? 1 : 0.8,
    transition: { duration: 1, staggerChildren: 0.2, staggerDirection: 1 },
  }}
  key={picture.id}
>
  <motion.div>
    <img
      src={picture.imageUrl}
      loading='lazy'
      className={`${picture.id === slideIndex ? 'block w-full h-screen' : 'hidden'}`}
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: picture.id === slideIndex ? 1 : 0, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span
      className={`${picture.id === slideIndex ? 'block' : 'hidden'} absolute top-1/2 left-10 text-[35px] md:text-[54px] text-white font-bold w-[40%]`}
    >
      {picture.content}
    </span>
  </motion.div>
</motion.div>


            ))}
            {/* <img src={bg} loading='lazy' className='h-screen w-full'/> */}

          
<div className=''>

        <SearchHostels/>
            </div>
<div className='mt-20 flex flex-col bg-gray-100 py-10'>
    <p className='px-10 font-semibold text-[26px]  text-center'>Our Services</p>
<div className='flex flex-row p-4 gap-4  '>

<div className='group relative cursor-pointer'>
  <motion.img
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    src={rooms}
    loading='lazy'
    className='h-[100%] w-[100%] rounded-2xl'
  ></motion.img>
  <span className='absolute bottom-0 py-10 px-4 text-[30px] text-white font-semibold w-[100%] text-center'>
    Rooms
  </span>

  <motion.div
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10 }}
    className='hidden group-hover:block p-0 bg-gray-600 text-white border-2 absolute bottom-0 w-[100%]'>
    <h1>Rooms</h1>
    <button className='border-2 p-2 rounded-md'>BOOK</button>
    <button>See more</button>
  </motion.div>
</div>




    <div className='grid grid-cols-2 gap-4'>
        <div className='relative'>
        <motion.img
initial={{scale:1}}
whileHover={{scale:1.02}}
transition={{duration:0.3,ease:easeInOut}}
     src={picTwo} loading='lazy' className='rounded-2xl cursor-pointer'>
        </motion.img>
        <span className='absolute bottom-0  py-10 px-4 text-[30px] text-white font-semibold w-[100%] text-center'>
    Dining
   </span>

        </div>

        <div className='relative'>
            <motion.img
initial={{scale:1}}
whileHover={{scale:1.02}}
transition={{duration:0.3,ease:easeInOut}}
     src={picOne} loading='lazy' className='rounded-2xl cursor-pointer'>
        </motion.img>
            <span className='absolute bottom-0  py-10 px-4 text-[30px] text-white font-semibold w-[100%] text-center'>
    Conference
   </span>


        
        </div>

<div className='relative'>
    <motion.img
initial={{scale:1}}
whileHover={{scale:1.02}}
transition={{duration:0.3,ease:easeInOut}}
     src={picFour} loading='lazy' className='rounded-2xl cursor-pointer'>
        </motion.img>
    <span className='absolute bottom-0  py-10 px-4 text-[30px] text-white font-semibold w-[100%] text-center'>
Facilities
   </span>

</div>

<div className='relative'>
    <motion.img
initial={{scale:1}}
whileHover={{scale:1.02}}
transition={{duration:0.3,ease:easeInOut}}
     src={picThree} className='rounded-2xl cursor-pointer'>
        </motion.img>
    <span className='absolute bottom-0  py-10 px-4 text-[30px] text-white font-semibold w-[100%] text-center'>
Wedding Package 
   </span>

</div>

        </div> 
        </div>
        </div>
        <div className='mt-20'>

        </div>  </div>

     );

    }
 
const SearchHostels=()=>{
    return (
        <div className='mt-20'>
<div className='bg-[#E9F3FF] py-8 rounded-xl shadow-sm p-4   w-[85%] mx-auto flex flex-col gap-8 '>
<span className='text-center flex flex-col gap-2'>
    <h1 className='text-[32px] font-semibold '>
        Book a room 
    </h1>
    <h2 className='text-[#5E5E5E] text-[16px] font-semibold text-center'>
Discover the perfect space for you! 
    </h2>
</span>

<section className='flex flex-row items-end justify-around '>
    <span className='flex flex-col gap-2'>
        <h1 className='font-semibold'>Date</h1>
        <input type='calender' className='w-[140%] p-2 rounded-md'/>
    </span>

    <span className='flex flex-col gap-2'>
        <h1 className='font-semibold '>Person</h1>
        <div className='flex flex-row border-2  bg-white border-white rounded-md w-[100%] p-2 gap-4'>
<div className='flex flex-row items-center gap-4'>            <div className='flex flex-row gap-2 px-2'>
                
<img src={vectorImg} loading='lazy' className='w-[18%]'/>
Adults
</div>

<div>
    <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
</div>
</div>

<div className='flex flex-row items-center gap-4 px-2'>
<div className='flex flex-row gap-2'>
                
                <img src={vectorImg} loading='lazy' className='w-[18%]'/>
                Children 
                </div>
                
                <div>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                </div>
<div>

    </div>
        </div>
    </span>

<button className='p-2 font-semibold  bg-blue-400 rounded-md text-white w-[14%]'>BOOK NOW</button>
</section>

</div>

        </div>
    )
}



export default Homepage;