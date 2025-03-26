"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  scrollY: number
}

export default function Nav({ scrollY }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const isScrolled = scrollY > 50

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "gallery", "partners", "order"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-2 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        scale: isScrolled ? 0.98 : 1,
      }}
      transition={{
        duration: 0.5,
        scale: { duration: 0.2 },
      }}
    >
      <motion.div
        className={`px-4 flex items-center justify-between ${
          isScrolled || true
            ? "bg-white/85 backdrop-blur-sm rounded-full shadow-md"
            : "bg-black/20 backdrop-blur-sm rounded-full"
        } max-w-fit mx-auto`}
        initial={{ width: "auto" }}
        animate={{
          width: "auto",
          padding: isScrolled ? "0.5rem 1.5rem" : "0.75rem 2rem",
        }}
      >
        <div className="flex items-center gap-8 md:gap-12">
          <div className="flex items-center">
          <img
                src="images/aiLogo.png"
                alt="AI Palm Logo"
                className="w-10 h-8 mr-2 object-cover"
              />
            <span className={`text-2xl font-bold ${isScrolled ? "text-[#FF862F]" : "text-[#1b2432]"}`}>AI Palm</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {["home", "features", "gallery", "partners", "order"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-lg font-medium transition-colors ${
                  isScrolled ? "text-gray-800" : "text-[#1b2432]"
                } ${activeSection === section ? "text-[#FF862F]" : ""}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF862F]" layoutId="underline" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#FF862F] ml-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full mt-2 mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-md max-w-[90%] left-[5%] right-[5%]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 flex flex-col space-y-4">
              {["home", "features", "gallery", "partners", "order"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left text-lg font-medium py-2 ${
                    activeSection === section ? "text-[#FF862F]" : "text-gray-800"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

