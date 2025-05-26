import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/about-1.jpg";
import img2 from "../assets/about-2.jpg";
import img3 from "../assets/about-3.jpg";

const AboutGame: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark text-red-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-16">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={img1}
                alt="Hunter"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-uncial">
                Protect Transylvania from Darkness
              </h2>
              <p className="text-lg mb-4">
                In our game, you become part of an elite vampire hunter group
                fighting to protect the innocent people of Transylvania. Amidst
                dark forests and mysterious castles, you'll battle ancient
                vampire clans, defeating them and saving innocents from the
                nightly threat. The vampires are stronger than ever, and only
                the bravest dare to venture into their dark lairs. You must use
                all your skills, weaponry, and strategy to survive.
              </p>
              <p className="text-lg mb-4">
                Your journey is fraught with danger, but with each step, you
                will gain strength, uncover mysteries, and gradually learn the
                true source of evil. This is a world where every choice matters.
                The lives of the people of Transylvania are in your hands.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 6 }}
          >
            <div className="w-full md:w-1/2 md:pl-8 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-uncial">
                Enhance Your Skills and Gear
              </h2>
              <p className="text-lg mb-4">
                Collect ancient artifacts, upgrade your characters, and create
                powerful equipment that will help you in the fight against the
                vampire menace. The more powerful your gear, the greater your
                chances of survival in the battlefield. Explore different
                abilities, combat strategies, and discover the most efficient
                weapons to take down even the most fearsome of vampire foes.
              </p>
              <p className="text-lg mb-4">
                Throughout your journey, you’ll encounter new challenges and
                tougher enemies, forcing you to evolve and adapt your
                strategies. But the rewards are worth it: powerful relics,
                mysterious powers, and a chance to rewrite history. Only those
                who embrace their full potential will survive.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={img2}
                alt="Hunter"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 7 }}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={img3}
                alt="Hunter"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-uncial">
                Defend the World from the Night
              </h2>
              <p className="text-lg mb-4">
                Your mission is to protect the innocent from monstrous creatures
                that lurk in the shadows. With every victory over vampires, new
                dangers arise, and tougher challenges await. Your quest is a
                never-ending battle against evil, and you must gather allies,
                strengthen your weapons, and continually improve your strategies
                to stay one step ahead.
              </p>
              <p className="text-lg mb-4">
                As you progress, you'll face increasingly powerful enemies, but
                each fight brings you closer to understanding the true evil that
                haunts Transylvania. Be prepared for anything and everything,
                for the darkness knows no mercy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutGame;
