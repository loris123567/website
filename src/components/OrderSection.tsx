"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export default function OrderSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <section id="order" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Control?</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Product Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                 <img
              src="images/mainPhoto.jpeg" // Replace with the actual image path
              alt="Robotic Arm"
              className="w-full h-full object-cover rounded-lg"
            />
              </div>
            </motion.div>

            {/* Product Details and Form */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">AI Palm So-Arm100</h3>
                    <span className="text-2xl font-bold">$499</span>
                  </div>

                  <div className="flex items-center mb-6">
                    <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full flex items-center">
                      <AlertCircle size={16} className="mr-2" />
                      <span className="font-semibold">Sold Out</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">
                    The next generation robotic arm with precision control and powerful servo motors. Perfect for labs,
                    factories, or workshops.
                  </p>
                </div>

                {!isSubmitted ? (
                  <div>
                    <h4 className="text-lg font-medium mb-3">Get notified when it's back in stock</h4>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                      <div className="flex-grow relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF862F] text-white placeholder-gray-400"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        className="bg-[#FF862F] hover:bg-[#FFA725] text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          "Notify Me"
                        )}
                      </motion.button>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    className="text-center py-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="mx-auto mb-4 text-[#FF862F]" size={48} />
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-300">We'll keep you posted when AI Palm is back in stock.</p>
                  </motion.div>
                )}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#FF862F]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span className="text-sm">2-Year Warranty</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#FF862F]"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M7 15h0"></path>
                      <path d="M2 9.5h20"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#FF862F]"
                    >
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                      <path d="M12 12v9"></path>
                      <path d="m8 17 4 4 4-4"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Free Software Updates</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

