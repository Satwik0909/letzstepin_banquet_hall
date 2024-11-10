import { motion } from 'framer-motion'
import { Camera, Music, Sparkles, Utensils } from 'lucide-react'
import React from 'react'

const services = [
  {
    icon: Sparkles,
    title: 'Event Planning',
    description: 'Comprehensive event planning services tailored to your unique vision and requirements.'
  },
  {
    icon: Utensils,
    title: 'Catering',
    description: 'Exquisite culinary experiences with a wide range of menu options to suit all tastes.'
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Top-tier entertainment options to keep your guests engaged and entertained throughout the event.'
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Capture every moment with our professional photography and videography services.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.h2 
          className="mb-12 text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold text-purple-600">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}