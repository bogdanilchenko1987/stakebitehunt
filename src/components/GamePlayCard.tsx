import React from "react";
import { motion } from "framer-motion";

interface GamePlayCardProps {
  image: string;
  title: string;
  description: string;
}

const GamePlayCard: React.FC<GamePlayCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="relative group w-full md:w-1/3 p-4">
      <motion.div
        className="relative bg-cover bg-center h-80 w-100 rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

        <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-xl font-semibold text-center px-4">
            {description}
          </p>
        </div>
      </motion.div>

      <div className="absolute top-2 left-2 text-xl font-bold text-white  group-hover:text-red-600 transition duration-300">
        {title}
      </div>
    </div>
  );
};

export default GamePlayCard;
