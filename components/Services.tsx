import { Code, Globe, Smartphone, Database } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites built with modern technologies like Next.js, React, and Tailwind CSS.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android using React Native.'
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions to solve your specific business challenges.'
  },
  {
    icon: Database,
    title: 'Web Applications',
    description: 'Dynamic web applications with robust backend systems and databases.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business grow online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-pink-300 hover:border-josseypink4 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-josseypink4 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}