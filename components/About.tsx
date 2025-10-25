export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Naija Website Designer
          </h2>
          <div className="w-20 h-1 bg-[#ff69b4] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="text-center">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Naija Website Designer are the best web designers in Nigeria. We are passionate about helping businesses in the retail, finance, health and corporate industries fully leverage the latest <strong>software technologies</strong>. As a top web design company in Lagos and Abuja, our tech team is dedicated to create websites that meet your exact needs because we pride ourselves on being the best web designers in Nigeria.
          </p>
          
          <p className="text-gray-700 mb-12 leading-relaxed">
            We build corporate business websites and ecommerce websites for all kinds of businesses across <strong>industries in Nigeria</strong> and beyond. Our services include responsive website design, ecommerce website development via Shopify or WooCommerce, WordPress web development, website maintenance, website redesign, SEO, mobile app dev, social media management and many more.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 border border-pink-200 rounded-lg">
            <div className="text-2xl font-bold text-[#ff69b4] mb-2">Consultation</div>
            <div className="text-gray-600 text-sm">Get our quotes and consultations for free</div>
          </div>
          <div className="text-center p-6 border border-pink-200 rounded-lg">
            <div className="text-2xl font-bold text-[#ff69b4] mb-2">Nationwide</div>
            <div className="text-gray-600 text-sm">You can reach us anywhere online</div>
          </div>
          <div className="text-center p-6 border border-pink-200 rounded-lg">
            <div className="text-2xl font-bold text-[#ff69b4] mb-2">500+ Clients</div>
            <div className="text-gray-600 text-sm">Satisfied customers nationwide</div>
          </div>
          <div className="text-center p-6 border border-pink-200 rounded-lg">
            <div className="text-2xl font-bold text-[#ff69b4] mb-2">24/7 Support</div>
            <div className="text-gray-600 text-sm">Always here to help you</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/2347051523893" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#ff69b4] text-[#ff69b4] hover:bg-[#ff69b4] hover:text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium"
          >
            Get Free Consultations
          </a>
        </div>
      </div>
    </section>
  )
}