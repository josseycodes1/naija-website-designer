const technologies = [
  'HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'Bootstrap', 
  'MySQL', 'React JS', 'PostgreSQL', 'WordPress', 'TailwindCSS', 'Next.js'
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <div className="w-24 h-1 bg-josseypink1 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our tech stack includes modern tools and frameworks to deliver cutting-edge solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white px-6 py-3 rounded-full border border-gray-200 hover:border-josseypink1 hover:text-josseypink1 transition-all duration-300 shadow-sm"
            >
              <span className="font-medium text-gray-700 hover:text-josseypink1 transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}