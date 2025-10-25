'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
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
            <span className="text-xl font-bold text-gray-900">Naija Website Designer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#ff69b4] transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-[#ff69b4] transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-[#ff69b4] transition-colors">Portfolio</a>
            <a href="#about" className="text-gray-700 hover:text-[#ff69b4] transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-[#ff69b4] transition-colors">Contact</a>
          </nav>

          {/* CTA Button - Right Side */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/2347051523893" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block bg-[#ff69b4] hover:bg-[#ffa6c9] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
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
              <a href="#home" className="text-gray-700 hover:text-[#ff69b4] transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-[#ff69b4] transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-[#ff69b4] transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-[#ff69b4] transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-[#ff69b4] transition-colors">Contact</a>
              <a 
                href="https://wa.me/2347051523893" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ff69b4] hover:bg-[#ffa6c9] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 w-full text-center mt-4"
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