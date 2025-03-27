"use client"

import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"

export default function NewsletterSection() {
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

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")

    const response = await fetch("/api/send-email", {   
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: "Welcome to AI Palm!",
        text: "Thank you for subscribing to our newsletter!",
      }),
    })
    
    if (response.ok) {
      alert("Subscription successful! Check your email for updates.")
    } else {
      alert("Subscription failed. Please try again.")
    }
  }

  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left side - Heading and description */}
          <motion.div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 lg:max-w-md">
              Subscribe to our newsletter for the latest updates, product news, and exclusive offers.
            </p>
          </motion.div>

          {/* Right side - Newsletter card */}
          <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-[#FF862F]/10 flex items-center justify-center text-[#FF862F] mb-6 mx-auto">
                <Mail size={32} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-center">AI Palm Newsletter</h3>
              <p className="text-gray-600 text-center mb-8">
                Join our community and be the first to learn about new features, updates, and AI innovations.
              </p>

              <motion.form className="space-y-4" variants={itemVariants} onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-12 flex-grow px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF862F] focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="h-12 bg-[#FF862F] hover:bg-[#FF862F]/90 transition-colors duration-300 px-6 rounded-md text-white font-medium flex items-center justify-center"
                  >
                    <span className="mr-2">Subscribe</span>
                    <Send size={16} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                </p>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

