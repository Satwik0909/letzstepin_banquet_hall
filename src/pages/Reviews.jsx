import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import React from 'react'

const reviews = [
  {
    name: 'Sarah Johnson',
    event: 'Wedding',
    rating: 5,
    comment: 'LetzStepIn Events made our dream wedding a reality. Every detail was perfect!'
  },
  {
    name: 'Michael Chen',
    event: 'Corporate Gala',
    rating: 5,
    comment: 'Impressed by the professionalism and attention to detail. Our company event was a huge success.'
  },
  {
    name: 'Emily Rodriguez',
    event: 'Birthday Party',
    rating: 4,
    comment: 'The team went above and beyond to create a magical birthday celebration for my daughter.'
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-100">
      <div className="container px-4 mx-auto">
        <motion.h2 
          className="mb-12 text-4xl font-bold text-center text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say 
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-600">"{review.comment}"</p>
              <div className="font-semibold">{review.name}</div>
              <div className="text-sm text-gray-500">{review.event}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}