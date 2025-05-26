import React, { useState } from "react";
import { motion } from "framer-motion";
import contactImage from "../assets/about-3.jpg"; // Replace with your contact image

const ContactPage: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }, 500);
  };

  return (
    <section className="relative bg-dark text-white py-20">
      <h1 className="text-4xl font-bold text-red-600 mb-10 font-creepster text-center tracking-wider ">
        For any information about our game, updates and other - write to us
      </h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-lg"
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-red-600 mb-6 font-creepster tracking-wider ">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 mb-4 bg-transparent text-white border-b-2 border-gray-600 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 mb-4 bg-transparent text-white border-b-2 border-gray-600 focus:outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 mb-6 bg-transparent text-white border-b-2 border-gray-600 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
              >
                Submit
              </button>
            </form>

            {/* Success Message */}
            {showMessage && (
              <motion.div
                className="mt-4 text-center text-green-500 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                We will contact you soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
