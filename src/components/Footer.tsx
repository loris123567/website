"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <img
                src="images/aiLogo.png"
                alt="AI Palm Logo"
                className="w-10 h-8 mr-2 object-cover"
              />
              <span className="text-xl font-bold text-white">AI Palm</span>
            </div>
          </div>


          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-[#FF862F] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#FF862F] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#FF862F] transition-colors">
              Contact
            </a>
          </div>

          <div className="text-sm">&copy; {currentYear} AI Palm. All rights reserved.</div>
        </motion.div>
      </div>
    </footer>
  )
}