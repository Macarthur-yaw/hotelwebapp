import { lazy, Suspense } from "react";
// import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
import { backgroundPictures } from "../Constant/BackgroundPictures";
import { motion } from "framer-motion";
// import { RoomCards } from "../Components/RoomCards";
import { useEffect, useState } from "react";
const Section = lazy(() => import("../components/Section"));

const AboutSection = lazy(() => import("../components/AboutSection"));
// import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
import manPic from "../assets/man (2).jpg";
import { Rooms } from "../Constant/Rooms";
import { ImageGallery } from "../Constant/ImageGallery";
import { Link, useNavigate } from "react-router-dom";
// const Location = lazy(() => import("../Components/Location"));


const Homepage = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number>(0);
  const navigate = useNavigate();

  // Get all gallery images in a flat array
  const allGalleryImages = ImageGallery.flatMap(gallery => 
    gallery.imgProps?.map(img => img.imgUrl) || []
  );

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

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'Escape') {
          setSelectedImageIndex(null);
        } else if (e.key === 'ArrowLeft') {
          navigateImage('prev');
        } else if (e.key === 'ArrowRight') {
          navigateImage('next');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex]);

  const testimonialData = {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "MacArthur Yaw",
    position: "CEO, Company Name",
    avatar: manPic,
  };

  const ViewMore = (indexNum: number) => {
    navigate(`/Rooms/${indexNum}`);
  };

  const openImageModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setCurrentGalleryIndex(imageIndex);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImageIndex === null) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentGalleryIndex + 1) % allGalleryImages.length;
    } else {
      newIndex = (currentGalleryIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
    }
    
    setCurrentGalleryIndex(newIndex);
    setSelectedImageIndex(newIndex);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

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

          <motion.img
            src={picture.imageUrl}
            alt="background"
            loading="lazy"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
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
              className="border-[1px] border-gray-300 shadow-sm rounded  relative overflow-hidden"
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
                  className="bg-black rounded text-white p-2 text-[0.8rem] font-semibold text-md font-serif tracking-wider"
                >
                  VIEW DETAILS
                </button>
              </span>

              <h2 className="text-black text-[20px] font-serif absolute top-0 left-0 border-l-0 border-t-0 bg-white p-1 rounded-lg shadow-md "> GH{content.price} / night</h2>
            </div>
          ))}
        </div>
      </div>

      <Suspense fallback={<div>loading</div>}>
        <Section />
      </Suspense>

      <div className="flex flex-col gap-12 py-20  px-4 items-center mt-10">
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
        <div className=" gap-6  w-fit mx-auto p-2">
          {ImageGallery.map((content) => (
            <div
              key={content.id}
              className={`${
                content.id === 1 ? "block" : "hidden"
              } border-[1px] border-white  shadow-sm  `}
            >
              <div className="flex flex-col md:flex-row  md:justify-between gap-6">
                {content.imgProps?.map((imageContent, index) => (
                  <div key={index} className="overflow-hidden rounded cursor-pointer">
                    <motion.img
                      src={imageContent.imgUrl}
                      className="md:w-[500px] rounded object-cover w-full h-[250px]"
                      alt=""
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openImageModal(index)}
                    />
                  </div>
                ))}
              </div>
              <span className="flex flex-row justify-between py-4 items-center p-2">
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen image modal */}
      {selectedImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
            >
              ×
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
            >
              &#8249;
            </button>

            {/* Image */}
            <motion.img
              key={currentGalleryIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={allGalleryImages[currentGalleryIndex]}
              className="max-w-full max-h-full object-contain"
              alt=""
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
            >
              &#8250;
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {currentGalleryIndex + 1} / {allGalleryImages.length}
            </div>
          </div>
        </motion.div>
      )}

     
    </div>
  );
};

export default Homepage;