import { motion } from 'framer-motion'
import { Award, Calendar, MapPin, Users } from 'lucide-react'
import React from 'react'

const features = [
  { icon: Users, text: "Expert Team of Event Planners" },
  { icon: Calendar, text: "5+ Years of Experience" },
  { icon: Award, text: "Award-Winning Services" },
  { icon: MapPin, text: "Nationwide Venue Network" },
]

const milestones = [
  { year: 2020, event: "LetzStepIn Events founded" },
  { year: 2022, event: "Expanded to 5 major cities" },
  { year: 2023, event: "Launched digital planning tools" },
  { year: 2024, event: "Awarded 'Best Event Planner' nationally" },
  { year: 2025, event: "" },
]

const teamMembers = [
  { name: "Sarah Johnson", role: "Founder & CEO", image: "https://i.pravatar.cc/300?img=1" },
  { name: "Michael Chen", role: "Head of Operations", image: "https://i.pravatar.cc/300?img=2" },
  { name: "Emily Rodriguez", role: "Lead Event Designer", image: "https://i.pravatar.cc/300?img=3" },
  { name: "David Patel", role: "Client Relations Manager", image: "https://i.pravatar.cc/300?img=4" },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900">
      <motion.div 
        className="container px-4 py-16 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="mb-8 text-5xl font-bold text-center text-purple-800 dark:text-purple-200"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About LetzStepIn Events
        </motion.h1>
        
        <motion.p 
          className="max-w-3xl mx-auto mb-12 text-xl text-center text-gray-700 dark:text-gray-300"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          At LetzStepIn Events, we believe that every moment is an opportunity to create something extraordinary. With over a decade of experience, we've mastered the art of turning your visions into unforgettable realities.
        </motion.p>

        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="mb-6 text-3xl font-semibold text-purple-700 dark:text-purple-300">Our Story</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Founded in 2020, LetzStepIn Events began with a simple yet powerful idea: to create events that not only meet expectations but exceed them in every way. Our journey started with a small team of passionate event planners who shared a vision of bringing dreams to life.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Over the years, we've grown from a local boutique agency to a nationwide leader in event planning and management. Our success is built on a foundation of creativity, attention to detail, and an unwavering commitment to our clients' satisfaction.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, LetzStepIn Events is proud to be at the forefront of the industry, constantly innovating and setting new standards for what's possible in event planning.
            </p>
          </motion.div>
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&h=600&q=80" 
              alt="LetzStepIn Events Team" 
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="mb-2 text-2xl font-bold text-white">Our Team</h3>
              <p className="text-gray-200">Passionate professionals dedicated to your perfect event</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="mb-8 text-3xl font-semibold text-center text-purple-700 dark:text-purple-300">Why Choose LetzStepIn Events?</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                <p className="text-center text-gray-700 dark:text-gray-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="mb-8 text-3xl font-semibold text-center text-purple-700 dark:text-purple-300">Our Journey</h2>
          <div className="relative">
            <div className="absolute w-1 h-full transform -translate-x-1/2 bg-purple-200 left-1/2 dark:bg-purple-700"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <motion.div
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">{milestone.year}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{milestone.event}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="mb-8 text-3xl font-semibold text-center text-purple-700 dark:text-purple-300">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={member.image} alt={member.name} className="object-cover w-full h-48" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="mb-6 text-3xl font-semibold text-purple-700 dark:text-purple-300">Ready to Create Your Perfect Event?</h2>
          <p className="mb-8 text-xl text-gray-700 dark:text-gray-300">Let's bring your vision to life with LetzStepIn Events.</p>
          <button className="px-4 py-2 text-lg font-bold text-white bg-purple-600 rounded-full hover:bg-purple-700">
            Start Planning Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}