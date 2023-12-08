import { lazy, Suspense } from "react";
// import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
import { backgroundPictures } from "../Constant/BackgroundPictures";
import { motion } from "framer-motion";
// import { RoomCards } from "../Components/RoomCards";
import { useEffect, useState } from "react";
const Section = lazy(() => import("../Components/Section"));

const AboutSection = lazy(() => import("../Components/AboutSection"));
// import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
import manPic from "../assets/man (2).jpg";
import { Rooms } from "../Constant/Rooms";
import { ImageGallery } from "../Constant/ImageGallery";
import { Link, useNavigate } from "react-router-dom";
const Location = lazy(() => import("../Components/Location"));
const SectionFooter = lazy(() => import("../Components/SectionFooter"));

const Homepage = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const navigate=useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex < backgroundPictures.length - 1) {
        setSlideIndex((prev) => prev + 1);
      } else {
        setSlideIndex(1);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const testimonialData = {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "MacArthur Yaw",
    position: "CEO, Company Name",
    avatar: manPic,
  };

  const ViewMore=(indexNum:number)=>{
    // navigate(`/Rooms/${id}`)
    navigate(`/Rooms/${indexNum}`);
  }
  return (
    <div className="">
      {backgroundPictures.map((picture) => (
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={
            picture.id === slideIndex ? { opacity: 1 } : { opacity: 0.8 }
          }
          key={picture.id}
          transition={{ duration: 2 }}
          className={`${
            picture.id === slideIndex ? "block" : "hidden"
          } relative  items-center flex md:flex-row flex-col justify-evenly md:justify-around w-full h-screen`}
        >
          <div className="bg-black bg-opacity-30 absolute w-full h-screen"></div>
          <div className=" ">
            <div
              key={picture.id}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex flex-col gap-4  items-center  md:h-[100%] justify-center md:px-10  md-py-[1px] line-clamp-5 "
            >
              <h1 id="heading" className="md:text-5xl  text-5xl   text-white ">
                Premiew View Hotel
              </h1>

              <span className="">
                <div className="w-max  mx-auto">
                  <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-2 text-[12px] md:text-xl text-white text-opacity-90 font--semibold">
                    {picture.content}
                  </h1>
                </div>
              </span>

              <span className="flex flex-row gap-2   items-center">
                <Link to="/booking">
                  {" "}
                  <button className="bg-black text-white w-[100px] md:w-[150px] md:text-xl border-black  md:text-normal text-[14px]  border-2 shadow-md md:p-2 p-2">
                    Book
                  </button>
                </Link>
                {/* <button className="bg-white border-black w-[100px] md:w-[150px] text-[14px] md:text-xl border-[1px] md:p-2 p-[8px]  text-black shadow-md">
                  Learn More
                </button> */}
              </span>
            </div>
          </div>

          <div className="absolute md:right-10 md:top-1/2 bottom-0 transform -translate-y-1/2 flex md:flex-col flex-row gap-2 items-center">
            <span
              onClick={() => setSlideIndex(1)}
              className={`dot ${slideIndex === 1 ? "active" : ""}`}
            />
            <span
              onClick={() => setSlideIndex(2)}
              className={`dot ${slideIndex === 2 ? "active" : ""}`}
            />
            <span
              onClick={() => setSlideIndex(3)}
              className={`dot ${slideIndex === 3 ? "active" : ""}`}
            />
          </div>

          <img
            src={picture.imageUrl}
            alt="background"
            className="group cursor-pointer  object-cover   w-full sm:h-screen h-[100%] "
          />
        </motion.div>
      ))}

      <div className="p-4 mt-10">
        <h1 className="text-center font-semibold text-[30px] mb-4">
          OUR ROOMS
        </h1>

        <div className="md:grid md:grid-cols-3 flex flex-col gap-6  w-fit mx-auto">
          {Rooms.map((content) => (
            <div
              key={content.id}
              className="border-[1px] border-white shadow-md  "
            >
              <img
                loading="lazy"
                src={content.imgUrl}
                className="md:w-[400px] object-cover"
                alt=""
              />
              <span className="flex flex-row justify-between py-4 items-center p-2">
                <h2> {content.title}</h2>
            <button 
            onClick={() => ViewMore(content.id)}

            className="bg-black rounded text-white p-2 text-[0.8rem]">
                  VIEW DETAILS
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>

      <Suspense fallback={<div>loading</div>}>
        <Section />
      </Suspense>

      <div className="flex flex-col gap-12 py-20  px-4 items-center mt-10">
        {/* <h1 className="font-semibold text-[30px]">    What people say    about us</h1>   */}
        <span className="">
          <h1 className="font-bold md:text-[2.6rem] text-[20px]">
            {" "}
            Our Testimonials
          </h1>
          <h3 className="text-sm text-center">
            These are some of the feedbacks from our clients.
          </h3>
        </span>
        <div className="flex md:flex-row flex-col gap-2 mb-20">
          <Suspense fallback={<div>loading</div>}>
            <AboutSection {...testimonialData} />
            <AboutSection {...testimonialData} />
            <AboutSection {...testimonialData} />
          </Suspense>
        </div>{" "}
      </div>

      <div className="mt-10">
        <h1 className="text-center font-medium text-[25px] mb-10">
          OUR GALLERY
        </h1>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-6  w-fit mx-auto p-2">
          {ImageGallery.map((content) => (
            <div
              key={content.id}
              className={`${
                content.id === 1 ? "block" : "hidden"
              } border-[1px] border-white shadow-md  `}
            >
              <div className="flex flex-col gap-6">
                {content.imgProps?.map((content) => (
                  <img
                    src={content.imgUrl}
                    className="md:w-[400px] object-cover w-full h-[250px]
      hover:
      "
                    alt=""
                  />
                ))}
              </div>
              <span className="flex flex-row justify-between py-4 items-center p-2">
                {/* <h2>        {content.title}</h2> */}
                {/* <button className="bg-black text-white p-2 text-[0.8rem]">VIEW DETAILS</button> */}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Suspense fallback={<div>loading</div>}>
          <Location />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>loading</div>}>
          <SectionFooter />
        </Suspense>
      </div>
    </div>
  );
};

export default Homepage;
