'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 relative">
              <Image
                src="/assets/img/nwdlogo.jpeg"
                alt="Naija Website Designer Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">Naija Website Designer</span>
          </div>

          {/* Desktop Navigation - Show on medium screens and up */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-josseypink1 transition-colors text-sm lg:text-base">Home</a>
            <a href="#services" className="text-gray-700 hover:text-josseypink1 transition-colors text-sm lg:text-base">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-josseypink1 transition-colors text-sm lg:text-base">Portfolio</a>
            <a href="#about" className="text-gray-700 hover:text-josseypink1 transition-colors text-sm lg:text-base">About</a>
            <a href="#contact" className="text-gray-700 hover:text-josseypink1 transition-colors text-sm lg:text-base">Contact</a>
          </nav>

          {/* CTA Button - Right Side */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/2347051523893" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block bg-josseypink1 hover:bg-josseypink2 text-white font-medium py-2 px-4 lg:px-6 rounded-lg transition-colors duration-200 text-sm lg:text-base"
            >
              Get Started
            </a>

            {/* Mobile Menu Button - Show on small and medium screens */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#home" className="text-gray-700 hover:text-josseypink1 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="text-gray-700 hover:text-josseypink1 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-josseypink1 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-josseypink1 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="text-gray-700 hover:text-josseypink1 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a 
                href="https://wa.me/2347051523893" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-josseypink1 hover:bg-josseypink2 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 w-full text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}