"use client"

import { motion } from "framer-motion"
import { Share2, ImageIcon, FileImage, Users, Lock, Zap } from "lucide-react"

const properties = [
  {
    icon: Share2,
    title: "Share with Friends",
    description: "Collaborate seamlessly by sharing your notes with friends and teammates in real-time.",
  },
  {
    icon: ImageIcon,
    title: "Rich Media Support",
    description: "Add images, videos, and files directly into your notes for a complete documentation experience.",
  },
  {
    icon: FileImage,
    title: "Custom Cover Images",
    description: "Personalize your notes with beautiful cover images that reflect your content and style.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team on shared workspaces and collaborative documents.",
  },
  {
    icon: Lock,
    title: "Privacy Controls",
    description: "Keep your notes secure with advanced privacy settings and access controls.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with instant sync across all your devices.",
  },
]

export function PropertiesSection() {
  return (
    <section className="py-24 w-full px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, organize, and share your thoughts with the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <property.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{property.title}</h3>
                <p className="text-gray-400 leading-relaxed">{property.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
