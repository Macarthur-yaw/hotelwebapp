// import { ImageGallery } from "../Constant/ImageGallery";
// import { RoomCards } from '../Components/RoomCards';
import { useNavigate } from "react-router-dom";
import bgOne from "../assets/Gallery4.jpg";
// import picOne from '../assets/aboutpic.jpg'
// import picTwo from '../assets/aboutpic1.jpg'
// import picThree from '../assets/aboutpic2.jpg'
import { Rooms as RoomConst } from "../Constant/Rooms.ts";
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
          src={bgOne}
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
          {RoomConst.map((content) => (
            <div
              key={content.id}
              className="border-[1px] border-white shadow-md  "
            >
              <motion.img
              initial={{scale:1}}
              whileHover={{scale:1.2}}
              transition={{duration:0.3}}
                loading="lazy"
                src={content.imgUrl}
                className="md:w-[400px] object-cover"
                alt=""
              />
              <span className="flex flex-row justify-between py-4 items-center p-2">
                <h2> {content.title}</h2>
                <button
                  onClick={() => ViewMore(content.id)}
                  className="bg-black rounded text-white p-2 text-[0.8rem]"
                >
                  VIEW DETAILS 
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
