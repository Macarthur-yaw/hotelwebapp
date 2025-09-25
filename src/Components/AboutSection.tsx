import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Props {
  quote: string;
  author: string;
}

const AboutSection = ({ quote, author }: Props) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="md:max-w-[25%] gap-4 items-center mx-auto bg-white p-6 flex flex-col border-[1px] border-[#E2E8F0] shadow-sm rounded-lg"
    >
      <p className="text-[#5F9C33] font-semibold text-lg">{author}</p>
      
      <span className="flex flex-col gap-3">
        <span className="flex flex-row items-center mx-auto gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-[#CE9E37] text-lg" />
          ))}
        </span>
        
        <p className="text-[14px] text-[#4A5568] mb-2 text-center line-clamp-5 leading-relaxed">
          "{quote}"
        </p>
      </span>
    </motion.div>
  );
};

export default AboutSection;