import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/eleganceevents' },
  { icon: Twitter, href: 'https://twitter.com/eleganceevents' },
  { icon: Instagram, href: 'https://instagram.com/eleganceevents' },
  { icon: Linkedin, href: 'https://linkedin.com/company/eleganceevents' },
]

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Venues', path: '/venues' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const services = [
  'Wedding Planning',
  'Corporate Events',
  'Birthday Parties',
  'Anniversary Celebrations',
  'Engagement Parties',
  'Gala Dinners',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src='logo13.png' alt="LetzStepIn Events Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold">LetzStepIn Events</span>
            </Link>
            <p className="text-gray-300">
              Making your events memorable, one celebration at a time. We specialize in creating unforgettable experiences for all types of events.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 transition duration-300 hover:text-white"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 transition duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">{service}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@LetzStepIn.com" className="transition duration-300 hover:text-white">
                  info@LetzStepIn.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Event Street, Mumbai, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+911234567890" className="transition duration-300 hover:text-white">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
            <form className="mt-4">
              <h4 className="mb-2 text-lg font-semibold">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 text-white bg-purple-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-white transition duration-300 bg-purple-600 rounded-r-md hover:bg-purple-700"
                  type="submit"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center text-gray-300 border-t border-purple-800">
          <p>&copy; {currentYear} LetzStepIn Events. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="transition duration-300 hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="transition duration-300 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}