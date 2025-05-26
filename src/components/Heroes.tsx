import React from "react";
import HeroCard from "./HeroCard";
import img1 from "../assets/hero-1.jpg"; // Фото для Vladislav
import img2 from "../assets/hero-2.jpg"; // Фото для Anita
import img3 from "../assets/hero-3.jpg"; // Фото для Van Helsing
import img4 from "../assets/hero-4.jpg"; // Фото для Nosferatu

const Heroes: React.FC = () => {
  return (
    <section id="heroes" className="py-16 bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-red-600">
        Main Heroes
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <HeroCard
          name="Vladislav"
          description={[
            "An elite vampire hunter with unmatched skill in combat.",
            "Born in the heart of Transylvania, he grew up hunting the undead.",
            "Specializes in ancient combat techniques passed down through generations.",
            "His expertise is unmatched when it comes to hunting vampires, both old and new.",
          ]}
          image={img1}
        />

        <HeroCard
          name="Anita"
          description={[
            "A fierce vampire hunter who excels in stealth and agility.",
            "Known for her quick reflexes and deadly accuracy with crossbows.",
            "Her backstory involves tragic loss, fueling her relentless pursuit of vengeance.",
            "She is a force to be reckoned with, feared even by the most powerful vampires.",
          ]}
          image={img2}
        />

        <HeroCard
          name="Van Helsing"
          description={[
            "A wise and ancient vampire hunter, well-versed in arcane knowledge.",
            "Possesses powerful knowledge of vampire lore and dark arts.",
            "A master of both strategy and combat, always one step ahead of his enemies.",
            "He has dedicated his life to eradicating the vampire threat across the world.",
          ]}
          image={img3}
        />

        <HeroCard
          name="Nosferatu"
          description={[
            "A powerful vampire lord and the game's main antagonist.",
            "He has lived for centuries, ruling over vampire clans with an iron fist.",
            "His dark magic and control over his minions make him a formidable foe.",
            "Nosferatu’s ultimate goal is to plunge the world into eternal darkness.",
          ]}
          image={img4}
        />
      </div>
    </section>
  );
};

export default Heroes;
