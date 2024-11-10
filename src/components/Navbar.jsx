import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Venues', path: '/' },
  { name: 'Vendors', path: '/vendors' },
  { name: 'Photos', path: '/photos' },
  { name: 'Weddings', path: '/weddings' },
  { name: 'Blog', path: '/blog' },
  { name: 'Shop', path: '/shop' },
  { name: 'E-Invites', path: '/e-invites' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="shadow-lg bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10" 
                src="logo13.png" 
                alt="LetzStepIn  Events" 
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-gray-300 transition duration-300 rounded-md hover:bg-purple-700 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block w-6 h-6" /> : <Menu className="block w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-purple-700 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}