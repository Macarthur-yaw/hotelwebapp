import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

import { Rooms as RoomConst } from "../Constant/Rooms";
import { motion } from "framer-motion";

const Roompage = () => {
  const { id } = useParams();
  let numId: number | undefined = id ? parseInt(id, 10) : undefined;

  useEffect(() => {
    numId = 1;
  }, []);

  const [display, setDisplay] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<boolean>(false);

  const handleDisplay = (imgUrl: string) => {
    setDisplay(imgUrl);
    setDisplayValue(true);
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <img
          src='https://res.cloudinary.com/dnwyppsef/image/upload/v1759484151/premi_wzvraa.jpg'
        
          className="w-full h-[100px] md:h-[250px] object-cover"
        />
        <span className="absolute bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2">
          <h1
            id="header"
            className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2"
          >
            Premier Hotel
          </h1>
        </span>
        <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0"></div>
      </div>

      {/* Room Details */}
      <div className="mt-10 px-4">
        {RoomConst.map((content) => (
          <div
            key={content.id}
            className={`${
              numId === content.id ? "flex flex-col md:flex-row gap-8" : "hidden"
            }`}
          >
            {/* Left Column - Images */}
            <div className="flex flex-col md:w-[60%]">
              {/* Main Image with Border */}
              <motion.img
                initial={displayValue && { x: -100 }}
                animate={displayValue && { x: 0 }}
                transition={{ duration: 2 }}
                loading="lazy"
                src={displayValue ? display : content.imgUrl}
                className="w-full sm:h-[400px] h-[300px] object-cover border-2 border-[#CE9E37]"
                alt={content.title}
              />

              {/* Thumbnails in One Row (Horizontal Scroll on Small Screens) */}
              <div className="flex flex-row gap-2 mt-4 overflow-x-auto mb-4 no-scrollbar">
                {content.items?.map((contents) => (
                  <div key={contents.id}>
                    <img
                      onClick={() => handleDisplay(contents.imgUrl)}
                      src={contents.imgUrl}
                      className={`w-[150px] md:w-[200px] md:h-[100px] h-[100px] cursor-pointer object-cover 
                        ${
                          display === contents.imgUrl
                            ? "border-2 border-[#CE9E37]"
                            : "border border-gray-300"
                        }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="md:w-[40%] flex flex-col gap-4 mb-10">
              <h1 className="font-medium text-[22px]">{content.title}</h1>
              <h2 className="text-gray-600">{content.content}</h2>

              {/* Services */}
              <div className="mt-6">
                <h1 className="font-medium text-lg md:text-2xl text-left">
                  SERVICES
                </h1>
                <span className="grid grid-cols-2 gap-4 mt-2">
                  {content.services?.map((service) => (
                    <div key={service.id}>
                      <h2 className="inline-flex gap-2 items-center text-gray-600">
                        <FaCheck className="w-[10px]" /> {service.content}
                      </h2>
                    </div>
                  ))}
                </span>
              </div>

              {/* Booking Button */}
              <button
                className="px-6 cursor-pointer  py-2 md:px-8 md:py-3 font-semibold bg-[#5F9C33] text-white text-sm md:text-base border-2 border-[#CE9E37] hover:bg-[#CE9E37] hover:border-[#5F9C33] transition-colors duration-300 flex justify-center gap-2"
              
              >
                <h1 className="text-center">BOOK ROOM NOW </h1>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roompage;
