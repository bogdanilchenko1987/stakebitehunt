import React from "react";
import GamePlayCard from "./GamePlayCard";
import img1 from "../assets/play-1.jpg"; // Перша картинка
import img2 from "../assets/play-2.jpg"; // Друга картинка
import img3 from "../assets/play-3.jpg"; // Третя картинка

const GamePlay: React.FC = () => {
  return (
    <section id="gameplay" className=" bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-red-600">
          GamePlay Features
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <GamePlayCard
            image={img1}
            title="Vampire Hunting"
            description="Track and eliminate vampires lurking in the shadows of Transylvania. Use weapons, tactics, and strategy to defeat powerful foes."
          />
          <GamePlayCard
            image={img2}
            title="Character Progression"
            description="Level up your hunter, unlock new skills, and equip powerful gear. The more you fight, the stronger you become."
          />
          <GamePlayCard
            image={img3}
            title="Protecting the Innocent"
            description="Save the villagers from the vampire threat. Use your combat skills to protect the helpless and stop the darkness from spreading."
          />
        </div>
      </div>
    </section>
  );
};

export default GamePlay;
