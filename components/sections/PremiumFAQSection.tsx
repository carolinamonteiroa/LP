"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

interface FAQItem {
  question: string
  answer: string
}

interface PremiumFAQSectionProps {
  content: {
    title: string
    items: FAQItem[]
  }
}

export function PremiumFAQSection({ content }: PremiumFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="scroll-section min-h-screen flex items-center py-section-mobile md:py-section"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              {content.title}
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {content.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  className={`overflow-hidden transition-all duration-300 cursor-pointer ${
                    openIndex === index
                      ? 'border-brand-primary shadow-lg'
                      : 'border-neutral-light hover:border-brand-primary/50'
                  }`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {/* Question */}
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="font-semibold text-neutral-dark pr-4">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-primary flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-neutral-dark/70 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
