"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function PartnersSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Define an array of partner objects with unique id and image url
  const partners = [
    { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Danmarks_Tekniske_Universitet_%28logo%29.svg/1200px-Danmarks_Tekniske_Universitet_%28logo%29.svg.png" },
    { id: 2, url: "https://www.skylab.dtu.dk/-/media/andre_universitetsenheder/skylab/2024_images/partner-logos/dtu-skylab-logo.png?rw=960&rh=0&hash=4B715D47A368D2E9EEADA64D91FA24F6" }
  ]

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, y: 20 },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted By Industry Leaders
          </h2>
        </motion.div>

        <div className="flex justify-center space-x-16 py-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex-shrink-0">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                <img
                  src={partner.url}
                  alt={`Partner ${partner.id}`}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



// "use client"

// import { useRef, useEffect } from "react"
// import { motion, useAnimation, useInView } from "framer-motion"

// export default function PartnersSection() {
//   const controls = useAnimation()
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true })

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible")
//     }
//   }, [controls, inView])

//   // Define an array of partner objects with unique id and image url
//   const partners = [
//     { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Danmarks_Tekniske_Universitet_%28logo%29.svg/1200px-Danmarks_Tekniske_Universitet_%28logo%29.svg.png" },
//     { id: 2, url: "https://www.skylab.dtu.dk/-/media/andre_universitetsenheder/skylab/2024_images/partner-logos/dtu-skylab-logo.png?rw=960&rh=0&hash=4B715D47A368D2E9EEADA64D91FA24F6" }
//     // { id: 3, url: "/images/partner3.png" },
//     // { id: 4, url: "/images/partner4.png" },
//     // { id: 5, url: "/images/partner5.png" },
//     // { id: 6, url: "/images/partner6.png" },
//     // { id: 7, url: "/images/partner7.png" },
//     // { id: 8, url: "/images/partner8.png" },
//   ]

//   return (
//     <section id="partners" className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={controls}
//           variants={{
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//             hidden: { opacity: 0, y: 20 },
//           }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Trusted By Industry Leaders
//           </h2>
//         </motion.div>

//         <div className="relative overflow-hidden">
//           <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>

//           <motion.div
//             className="flex space-x-16 py-8"
//             animate={{ x: [0, -1920] }}
//             transition={{
//               x: {
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "loop",
//                 duration: 40,
//                 ease: "linear",
//               },
//             }}
//           >
//             {/* First set of partner logos */}
//             {partners.map((partner) => (
//               <div key={partner.id} className="flex-shrink-0">
//                 <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
//                   <img
//                     src={partner.url}
//                     alt={`Partner ${partner.id}`}
//                     className="w-20 h-20 object-contain"
//                   />
//                 </div>
//               </div>
//             ))}

//             {/* Duplicate set for seamless looping */}
//             {partners.map((partner) => (
//               <div key={`dup-${partner.id}`} className="flex-shrink-0">
//                 <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
//                   <img
//                     src={partner.url}
//                     alt={`Partner ${partner.id}`}
//                     className="w-20 h-20 object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
