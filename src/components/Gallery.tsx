"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function GallerySection() {
  // Generate placeholder images with different sizes
  const images = [
    { id: 1, size: "lg", url: "images/mainPhoto.jpeg" },
    { id: 2, size: "sm", url: "images/photo2.jpeg" },
    { id: 3, size: "md", url: "images/photo3.jpeg" },
    { id: 4, size: "sm", url: "images/photo4.jpeg" },
    { id: 5, size: "md", url: "images/mainPhoto.jpeg" },
    { id: 6, size: "lg", url: "images/mainPhoto.jpeg" },
  ]

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  // Find the image data for the currently selected image
  const selectedImageData = images.find((img) => img.id === selectedImage)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  // For mobile, always use a 1x1 span.
  // On medium screens and up, apply the desired spans.
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "sm":
        return "md:col-span-1 md:row-span-1"
      case "md":
        return "md:col-span-1 md:row-span-2"
      case "lg":
        return "md:col-span-2 md:row-span-2"
      default:
        return "md:col-span-1 md:row-span-1"
    }
  }

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See AI Palm in action across various applications
            </p>
          </motion.div>

          {/* Updated grid:
              - Uses 2 columns on mobile for a better layout.
              - On md and larger screens it shows 4 columns.
              - On mobile, each item is forced to span 1/1 while the md: prefixes apply the custom spans. */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[200px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {images.map((image) => (
              <motion.div
                key={image.id}
                className={`col-span-1 row-span-1 ${getSizeClasses(
                  image.size
                )} relative overflow-hidden rounded-xl cursor-pointer`}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.url}
                  alt={`Image ${image.id}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative bg-white rounded-xl overflow-hidden max-w-4xl max-h-[80vh] w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Display the actual image */}
            <img
              src={selectedImageData.url}
              alt={`Image ${selectedImageData.id}`}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white/80 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
