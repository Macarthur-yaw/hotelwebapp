import {motion} from 'framer-motion'
interface Props{
    imageUrl:string,
    title:string,
}
const HomeCards = ({imageUrl,title}:Props) => {
    return ( 
        <motion.div
        initial={{ scale: 1 }}
        
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
    
        className='cursor-pointer group'>
              <img
    src={imageUrl}
    loading='lazy'
    className='h-[100%] rounded-2xl'
  />
  <span className='absolute      '>
   <h1 className='absolute bottom-0  py-10 px-10 text-xl text-white'> {title}</h1>
  </span>

  <motion.div 
  initial={{opacity:0,y:-10}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
  className='hidden  z-20 rounded-2xl group-hover:block bg-opacity-90  bottom-0 bg-black absolute w-full h-[100%]'>
<span className='text-white p-2 flex flex-col gap-2 absolute top-1/2 transform text-center -translate-y-1/2'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit enim cumque nemo consequuntur, commodi corporis, itaque nulla neque odio cum recusandae facere? Voluptate nam accusantium reprehenderit fugiat. Laudantium, inventore sunt.
<button className='w-fit mx-auto border-2 p-2 rounded-md bg-blue-300 border-blue-300'>BOOK NOW</button>
<button>
    Explore Now 
</button>

</span>
  </motion.div>
        </motion.div>
     );
}
 
export default HomeCards;