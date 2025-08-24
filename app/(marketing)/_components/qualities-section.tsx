// "use client"

// import { motion } from "framer-motion"
// import { Brain, Sparkles, Shield, Rocket } from "lucide-react"

// const qualities = [
//   {
//     icon: Brain,
//     title: "Intelligent Organization",
//     description: "AI-powered tagging and categorization keeps your notes perfectly organized without any effort.",
//     stats: "99% accuracy",
//   },
//   {
//     icon: Sparkles,
//     title: "Beautiful Design",
//     description: "Clean, minimal interface that gets out of your way and lets you focus on what matters most.",
//     stats: "Loved by 100k+ users",
//   },
//   {
//     icon: Shield,
//     title: "Enterprise Security",
//     description: "Bank-level encryption and security measures protect your most important thoughts and ideas.",
//     stats: "256-bit encryption",
//   },
//   {
//     icon: Rocket,
//     title: "Lightning Performance",
//     description: "Optimized for speed with instant search, real-time sync, and seamless offline access.",
//     stats: "<100ms response time",
//   },
// ]

// export function QualitiesSection() {
//   return (
//     <section className="py-24 px-4 relative">
//       {/* Background with subtle pattern */}
//       <div className="absolute inset-0 bg-black">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Brainy?</h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Built with cutting-edge technology and designed for the modern knowledge worker
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {qualities.map((quality, index) => (
//             <motion.div
//               key={quality.title}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="group"
//             >
//               <div className="flex items-start gap-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-white/30 group-hover:to-white/10 transition-all duration-300">
//                   <quality.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-4">
//                     <h3 className="text-2xl font-bold text-white">{quality.title}</h3>
//                     <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">{quality.stats}</span>
//                   </div>
//                   <p className="text-gray-400 text-lg leading-relaxed">{quality.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Brain, Sparkles, Shield, Rocket } from "lucide-react"

const qualities = [
  {
    icon: Brain,
    title: "Intelligent Organization",
    description: "AI-powered tagging and categorization keeps your notes perfectly organized without any effort.",
    stats: "99% accuracy",
  },
  {
    icon: Sparkles,
    title: "Beautiful Design",
    description: "Clean, minimal interface that gets out of your way and lets you focus on what matters most.",
    stats: "Loved by 100k+ users",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security measures protect your most important thoughts and ideas.",
    stats: "256-bit encryption",
  },
  {
    icon: Rocket,
    title: "Lightning Performance",
    description: "Optimized for speed with instant search, real-time sync, and seamless offline access.",
    stats: "<100ms response time",
  },
]

export function QualitiesSection() {
  return (
    <section className="py-24 px-4 relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Brainy?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with cutting-edge technology and designed for the modern knowledge worker
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              // Changed from a horizontal (x) to a vertical (y) animation
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-white/30 group-hover:to-white/10 transition-all duration-300">
                  <quality.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">{quality.title}</h3>
                    <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">{quality.stats}</span>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">{quality.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}