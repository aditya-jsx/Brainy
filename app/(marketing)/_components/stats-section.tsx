"use client"

import { motion } from "framer-motion"

const stats = [
  {
    number: "100K+",
    label: "Active Users",
    description: "Professionals trust Brainy",
  },
  {
    number: "50M+",
    label: "Notes Created",
    description: "Ideas captured and organized",
  },
  {
    number: "99.9%",
    label: "Uptime",
    description: "Reliable and always available",
  },
  {
    number: "150+",
    label: "Countries",
    description: "Global community of thinkers",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 px-4 relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted Worldwide</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Numbers that speak for themselves</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
