import React from "react";

interface HeroCardProps {
  name: string;
  description: string[];
  image: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ name, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row mb-12 p-6 bg-black bg-opacity-80 rounded-lg shadow-lg text-red-600">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2 md:pl-6">
        <h2 className="text-3xl font-bold text-red-500 mb-2 font-uncial">
          {name}
        </h2>
        <ul className="text-gray-200 mb-4">
          {description.map((text, index) => (
            <li key={index} className="mb-2">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroCard;
