import { ImageGallery } from "../Constant/ImageGallery";
import bgOne from '../assets/Gallery4.jpg'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const Gallery = () => {
  const [index, setIndex] = useState<number>(0);
  const [all, setAll] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number>(0);

  // Get all gallery images in a flat array
  const allGalleryImages = ImageGallery.flatMap(gallery => 
    gallery.imgProps?.map(img => img.imgUrl) || []
  );

  useEffect(() => {
    setAll(true)
  }, [])

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

  const handleIndex = (indexNum: number) => {
    setIndex(indexNum)
    setAll(false);
  }

  const openImageModal = (imageUrl: string) => {
    const imageIndex = allGalleryImages.findIndex(url => url === imageUrl);
    if (imageIndex !== -1) {
      setSelectedImageIndex(imageIndex);
      setCurrentGalleryIndex(imageIndex);
    }
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
    <div>
      <div className="relative">
        <img src={bgOne} className='w-full h-[100px] md:h-[250px] object-cover'/>
        <span className="absolute bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2">
          <h1 id="header" className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2 ">
            Our Gallery
          </h1>
        </span>
        <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0">
        </div>
      </div>

      <div className="md:px-4 mx-auto w-fit mt-10 flex flex-row gap-4 px-4">
        <button 
          onClick={() => setAll(true)}   
          className="border-[1px] rounded sm:px-8 px-4 py-[2px] border-black bg-black text-white text-[12px] sm:text-[14px]"
        >
          All
        </button>
        <button 
          onClick={() => handleIndex(2)} 
          className="border-[1px] rounded sm:px-8 px-4 border-black text-white bg-black text-[12px] sm:text-[14px]"
        >
          Restaurant
        </button>
        <button 
          onClick={() => handleIndex(3)} 
          className="border-[1px] rounded sm:px-8 p-2 bg-black text-white text-[14px] sm:text-[14px]"
        >
          Gym
        </button>
        <button  
          onClick={() => handleIndex(4)} 
          className="border-[1px] rounded sm:px-8 px-4 bg-black text-white text-[12px] sm:text-[14px]"
        >
          Swimming pool
        </button>
      </div>

      <div className="mt-4 px-4 mb-10">
        {ImageGallery.map((item) => (
          <div 
            key={item.id}
            className={`${all ? '' : `${index === item.id ? 'block' : 'hidden'}`}`}
          >
            <div className="grid gap-2 grid-cols-3 md:grid md:grid-cols-3 md:gap-2">
              {item.imgProps?.map((content) => (
                <div key={content.id} className="flex flex-col mb-1 overflow-hidden rounded cursor-pointer">
                  <motion.img 
                    src={content.imgUrl} 
                    className="md:w-[800px] w-[400px] h-[200px] md:h-[500px] object-cover"
                    alt=""
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openImageModal(content.imgUrl)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
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
}

export default Gallery;