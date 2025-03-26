"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"



export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 z-0"></div>

      <div className="container mx-auto mt-8 px-4 z-10 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left text-white mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Meet AI Palm: The Next Generation Robotic Arm.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Precision, Power, and Intelligence in the Palm of Your Hand.
          </p>
          <motion.button
            className="bg-[#FF862F] hover:bg-[#FFA725] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const section = document.getElementById("features");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <img
              src="images/mainPhoto.jpeg" // Replace with the actual image path
              alt="Robotic Arm"
              className="w-full h-full object-cover"
            />
          </div>

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}

