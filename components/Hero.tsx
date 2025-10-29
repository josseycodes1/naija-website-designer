export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
          Building Digital
          <span className="text-josseypink1 block mt-2">Experiences</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
          We create stunning websites and powerful software solutions that help 
          businesses thrive in the digital world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/2347051523893" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-josseypink1 hover:bg-josseypink2 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Start Your Project
          </a>
          <a 
            href="#portfolio"
            className="border border-gray-300 hover:border-josseypink1 text-gray-700 hover:text-josseypink1 font-medium py-3 px-6 rounded-lg transition-all duration-200 w-full sm:w-auto text-center"
          >
            View Our Works
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600 text-sm sm:text-base">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">3+</div>
            <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">45+</div>
            <div className="text-gray-600 text-sm sm:text-base">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">100%</div>
            <div className="text-gray-600 text-sm sm:text-base">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}