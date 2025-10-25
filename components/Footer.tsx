import { MessageCircle, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 relative">
                <Image
                  src="/assets/img/nwdlogo.jpeg"
                  alt="Naija Website Designer Logo"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">Naija Website Designer</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              We create digital experiences that help businesses grow and succeed in the modern world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/2347051523893" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-josseypink1 rounded-full flex items-center justify-center hover:bg-josseypink2 text-white transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://instagram.com/naija_website_designer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-josseypink1 rounded-full flex items-center justify-center hover:bg-josseypink2 text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/josseycodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-josseypink1 rounded-full flex items-center justify-center hover:bg-josseypink2 text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 hover:text-josseypink1 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-josseypink1 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-600 hover:text-josseypink1 transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-josseypink1 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-josseypink1 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-3 text-gray-600">
              <li>hello@naijawebsitedesigner.com</li>
              <li>+234 812 345 6789</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Naija Website Designer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}