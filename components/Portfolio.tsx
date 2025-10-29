'use client';

import Image from "next/image";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "/assets/img/ecomm1.png",
      title: "Fullstack Fragrance E-commerce Website",
      description: "A single seller fragrance ecommerce website with cart, seller dashboard and buyer functionality.",
      link: "https://scent-shop.vercel.app/",
      category: "E-commerce"
    },
    {
      id: 2,
      image: "/assets/img/ecomm2.png",
      title: "REST API for E-commerce",
      description: "Backend REST API built with Django for fragrance ecommerce website.",
      link: "https://josseycart-backend.onrender.com/api/products/",
      category: "Backend"
    },
    {
      id: 3,
      image: "/assets/img/meportfolio2.png",
      title: "Portfolio Design",
      description: "Modern and responsive portfolio website showcasing developer projects and skills.",
      link: "https://portfoliosite-sage-psi.vercel.app/",
      category: "Portfolio"
    },
    {
      id: 4,
      image: "/assets/img/crownex.png",
      title: "Blogsite Application",
      description: "Blog platform featuring articles with content management capabilities.",
      link: "https://crownexempire.blogspot.com/",
      category: "Blog"
    },
    {
      id: 5,
      image: "/assets/img/meportfolio1.png",
      title: "Portfolio Design",
      description: "Another portfolio design showcasing different styling approaches.",
      link: "https://josseycodes.pythonanywhere.com/",
      category: "Portfolio"
    },
    {
      id: 6,
      image: "/assets/img/companyweb.png",
      title: "Company Website",
      description: "Professional company website with services and contact information.",
      link: "https://cool-axolotl-18dcfd.netlify.app/",
      category: "Business"
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SOME OF OUR WORKS
          </h2>
          <div className="w-20 h-1 bg-josseypink1 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            As the top web designer in Nigeria and a leading web design company in Lagos, 
            we've poured our hearts into hundreds of projects.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="mb-3">
                  <span className="inline-block bg-josseypink2 text-gray-900 text-xs font-medium px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-josseypink1 hover:bg-josseypink2 text-white text-sm font-medium px-4 py-2 rounded transition-colors duration-200"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Below are some of our works...
          </p>
          <a 
            href="https://github.com/josseycodes1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-2 border-josseypink1 text-josseypink1 hover:bg-josseypink1 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;