import { motion } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Booking from './Booking'
import Reviews from './Reviews'
import Services from './Services'

const banquetHalls = [
  {
    id: 1,
    name: 'Royal Palace',
    location: 'Mumbai',
    capacity: 500,
    description: 'Luxurious banquet hall with modern amenities and stunning chandeliers. Perfect for grand weddings and corporate events.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&h=300&q=80',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Golden Tulip',
    location: 'Delhi',
    capacity: 400,
    description: 'Elegant venue with a touch of traditional charm. Features beautiful gardens for outdoor ceremonies.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&h=300&q=80',
    rating: 4.6
  },
  {
    id: 3,
    name: 'Sapphire Gardens',
    location: 'Bangalore',
    capacity: 300,
    description: 'A lush, open-air venue perfect for nature-loving couples. Offers a serene atmosphere for intimate gatherings.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=400&h=300&q=80',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Crystal Ballroom',
    location: 'Chennai',
    capacity: 600,
    description: 'Opulent ballroom with crystal chandeliers and state-of-the-art sound systems. Ideal for large-scale events.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&h=300&q=80',
    rating: 4.9
  },
]

export default function Home() {
  const [visibleHalls, setVisibleHalls] = useState(4)

  const loadMore = () => {
    setVisibleHalls(prevVisible => Math.min(prevVisible + 4, banquetHalls.length))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section id="home" className="container px-4 py-12 mx-auto">
        <motion.h1 
          className="mb-8 text-6xl font-bold text-center text-gradient"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Discover Elegant Banquet Halls
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mb-12 text-xl text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find the perfect venue for your special events across India. From intimate gatherings to grand celebrations, we have the ideal space for you.
        </motion.p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {banquetHalls.slice(0, visibleHalls).map((hall, index) => (
            <motion.div 
              key={hall.id} 
              className="overflow-hidden rounded-lg shadow-xl glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img src={hall.image} alt={hall.name} className="object-cover w-full h-48" />
              <div className="p-6">
                <h2 className="mb-2 text-2xl font-semibold">{hall.name}</h2>
                <p className="mb-2 text-gray-300">{hall.location}</p>
                <p className="mb-2 text-gray-300">Capacity: {hall.capacity}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(hall.rating) ? 'text-yellow-400' : 'text-gray-400'}`}
                      fill={i < Math.floor(hall.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <span className="ml-2">{hall.rating.toFixed(1)}</span>
                </div>
                <p className="mb-4 text-gray-300 line-clamp-3">{hall.description}</p>
                <Link 
                  to={`/booking?hall=${hall.id}`}
                  className="block w-full px-4 py-2 text-center text-white transition duration-300 bg-purple-600 rounded-md hover:bg-purple-700 glow-button"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleHalls < banquetHalls.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={loadMore}
              className="flex items-center px-8 py-3 mx-auto text-white transition duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700 glow-button"
            >
              Load More <ChevronDown className="ml-2" />
            </button>
          </div>
        )}
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="reviews">
        <Reviews />
      </section>
      
      <section id="booking">
        <Booking />
      </section>
    </motion.div>
  )
}