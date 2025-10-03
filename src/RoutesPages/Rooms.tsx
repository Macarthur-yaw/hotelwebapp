// import { ImageGallery } from "../Constant/ImageGallery";
// import { RoomCards } from '../Components/RoomCards';
import { useNavigate } from "react-router-dom";

// import picOne from '../assets/aboutpic.jpg'
// import picTwo from '../assets/aboutpic1.jpg'
// import picThree from '../assets/aboutpic2.jpg'
import { Rooms as RoomsConst } from "../Constant/Rooms";
import { motion } from "framer-motion";
const Rooms = () => {
  const navigate = useNavigate();
  const ViewMore = (indexNum: number) => {
    navigate(`/Rooms/${indexNum}`);
  };
  return (
    <div>
      <div className="relative">
        <img
          src="	https://res.cloudinary.com/dnwyppsef/image/upload/v1759484151/premi_wzvraa.jpg"
          className="w-full h-[100px] md:h-[250px] object-cover"
        />
        <span className="absolute bottom-2 md:bottom-10 left-1/2 transform  -translate-x-1/2">
          <h1
            id="header"
            className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2 "
          >
            Rooms
          </h1>
        </span>
        <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0"></div>
      </div>

      <div className="p-2 py-4">
        <div className="md:grid md:grid-cols-3 flex flex-col gap-6  w-fit mx-auto">
         {RoomsConst.map((content) => (
            <div
              key={content.id}
                className="border-[1px] border-[#CE9E37] shadow-sm rounded relative overflow-hidden"
            >
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
                src={content.imgUrl}
                className="md:w-[400px] object-cover cursor-pointer"
                alt=""
              />

              <span className="flex flex-row justify-between py-4 items-center p-2">
                <h2 className="uppercase font-serif font-semibold tracking-wider text-lg"> {content.title}</h2>

                <button 
                  onClick={() => ViewMore(content.id)}
                    className="px-6 cursor-pointer py-2 md:px-8 md:py-3 font-semibold bg-[#5F9C33] text-white text-sm md:text-base border-2 border-[#CE9E37] hover:bg-[#CE9E37] hover:border-[#5F9C33] transition-colors duration-300 flex items-center gap-2"
                                    
                >
                  VIEW DETAILS
                </button>
              </span>

              <h2 className="text-black text-[20px] font-serif absolute top-0 left-0 border-l-0 border-t-0 bg-white p-1 rounded-lg shadow-md "> GH{content.price} / night</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
