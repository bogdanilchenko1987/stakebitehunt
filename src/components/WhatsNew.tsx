import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/new-1.jpg"; // Картка Wooden Stake
import img2 from "../assets/new-2.jpg"; // Картка Silver Pistols
import img3 from "../assets/new-3.jpg"; // Картка Slayer Sword
import img4 from "../assets/new-4.jpg"; // Картка Defence Amulet

const WhatsNew: React.FC = () => {
  return (
    <section id="whatsnew" className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-red-600">
          What's New
        </h2>
        <p className="text-lg text-center mb-8">
          Updated artifacts and weapons that appeared in the new version of the
          game
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Wooden Stake */}
          <motion.div
            className="flex flex-col sm:flex-row bg-gray-900 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full sm:w-1/3">
              <img
                src={img1}
                alt="Wooden Stake"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full sm:w-2/3 sm:pl-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-red-600">
                Wooden Stake
              </h3>
              <p className="text-gray-400">
                The Wooden Stake is a powerful weapon, inflicting +25 damage to
                vampires. Ideal for close combat, it helps you quickly take down
                enemies with precision and strength.
              </p>
              <span className="text-gray-300">+25 Damage</span>
            </div>
          </motion.div>

          {/* Silver Pistols */}
          <motion.div
            className="flex flex-col sm:flex-row bg-gray-900 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full sm:w-1/3">
              <img
                src={img2}
                alt="Silver Pistols"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full sm:w-2/3 sm:pl-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-red-600">
                Silver Pistols
              </h3>
              <p className="text-gray-400">
                These Silver Pistols deliver a deadly blow with +40 damage.
                Perfect for ranged combat, their silver bullets pierce through
                the toughest vampire defenses.
              </p>
              <span className="text-gray-300">+40 Damage</span>
            </div>
          </motion.div>

          {/* Slayer Sword */}
          <motion.div
            className="flex flex-col sm:flex-row bg-gray-900 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full sm:w-1/3">
              <img
                src={img4}
                alt="Slayer Sword"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full sm:w-2/3 sm:pl-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-red-600">
                Slayer Sword
              </h3>
              <p className="text-gray-400">
                The Slayer Sword is a legendary weapon designed to decapitate
                vampires with a single strike, granting +50 damage. It's the
                perfect weapon for an ultimate showdown.
              </p>
              <span className="text-gray-300">+50 Damage</span>
            </div>
          </motion.div>

          {/* Defence Amulet */}
          <motion.div
            className="flex flex-col sm:flex-row bg-gray-900 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full sm:w-1/3">
              <img
                src={img3}
                alt="Defence Amulet"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full sm:w-2/3 sm:pl-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-red-600">
                Defence Amulet
              </h3>
              <p className="text-gray-400">
                The Defence Amulet is a powerful artifact that provides a +30
                power bonus, enhancing your defenses against the dark forces.
                It's essential for surviving in the toughest battles.
              </p>
              <span className="text-gray-300">+30 Power Bonus</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
