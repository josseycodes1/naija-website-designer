'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: "How long does it take to develop a website?",
    answer: "The timeline depends on the complexity of your project. Simple websites take 2-3 weeks, while complex web applications can take 6-8 weeks or more."
  },
  {
    question: "What is the pricing for your web development services?",
    answer: "Our pricing starts from ₦150,000 for basic websites and goes up based on features and complexity. We provide detailed quotes after understanding your requirements."
  },
  {
    question: "What types of websites do you create?",
    answer: "We create corporate websites, e-commerce stores, portfolios, blogs, web applications, school management systems, and custom software solutions."
  },
  {
    question: "What are other services that you offer?",
    answer: "Besides web development, we offer mobile app development, SEO, website maintenance, social media management, WordPress development, and e-commerce solutions."
  },
  {
    question: "Do you provide post-launch maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages including updates, security monitoring, backups, and technical support to keep your website running smoothly."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FAQs
          </h2>
          <div className="w-24 h-1 bg-josseypink1 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="flex justify-between items-center w-full py-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus size={20} className="text-josseypink1 flex-shrink-0" />
                ) : (
                  <Plus size={20} className="text-josseypink1 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}