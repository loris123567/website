"use client"

import { motion } from "framer-motion"
import { Cpu, Zap, Puzzle, Feather } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Cpu size={32} />,
      title: "Powerful Servo Motors",
      description: "Experience unparalleled strength and precision.",
    },
    {
      icon: <Zap size={32} />,
      title: "Precision Control",
      description: "Accurate positioning, every time.",
    },
    {
      icon: <Puzzle size={32} />,
      title: "Easy Integration",
      description: "Seamless setup in labs, factories, or workshops.",
    },
    {
      icon: <Feather size={32} />,
      title: "Lightweight Design",
      description: "Portable form factor without compromising performance.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovative Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology designed for performance and ease.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-[#FF862F]/10 flex items-center justify-center text-[#FF862F] mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

