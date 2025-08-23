"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    company: "Figma",
    content:
      "Brainy has completely transformed how I organize my design process. The ability to add images and collaborate with my team in real-time is game-changing.",
    rating: 5,
    avatar: "/professional-woman-designer.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Engineer",
    company: "Stripe",
    content:
      "The performance is incredible. I can search through thousands of notes instantly, and the offline sync means I never lose my work.",
    rating: 5,
    avatar: "/professional-engineer.png",
  },
  {
    name: "Emily Watson",
    role: "Content Creator",
    company: "YouTube",
    content:
      "I love how I can add cover images to my notes and share them with my team. It's like having a personal wiki that actually works.",
    rating: 5,
    avatar: "/professional-woman-content-creator.png",
  },
  {
    name: "David Kim",
    role: "Research Scientist",
    company: "OpenAI",
    content:
      "The AI-powered organization features are brilliant. My research notes are automatically categorized and I can find anything in seconds.",
    rating: 5,
    avatar: "/professional-scientist.png",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "Notion",
    content:
      "Brainy strikes the perfect balance between simplicity and power. My entire marketing team has switched over and productivity has soared.",
    rating: 5,
    avatar: "/professional-woman-marketing.png",
  },
  {
    name: "Alex Johnson",
    role: "Startup Founder",
    company: "TechCorp",
    content:
      "As a founder, I need to capture ideas quickly and share them with investors. Brainy's sharing features and beautiful design make this effortless.",
    rating: 5,
    avatar: "/professional-man-founder.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Loved by Professionals</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of creators, engineers, and thinkers who trust Brainy with their ideas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-white/20 relative">
                <Quote className="w-8 h-8 text-white/20 mb-6" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-8">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
