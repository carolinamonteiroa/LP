"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

interface BeforeAfterSectionProps {
  content: {
    title: string
    subtitle: string
    comparisons: Array<{
      metric: string
      before: string
      after: string
      improvement: string
    }>
  }
}

export function BeforeAfterSection({ content }: BeforeAfterSectionProps) {
  return (
    <section
      id="beforeAfter"
      className="scroll-section py-section-mobile md:py-section bg-gradient-to-br from-neutral-light to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-neutral-dark/70">{content.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {content.comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-strong transition-shadow">
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-xl font-semibold text-neutral-dark">
                    {comparison.metric}
                  </h3>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-3 bg-red-50 rounded-lg">
                      <p className="text-xs text-red-600 font-medium mb-1">Antes</p>
                      <p className="text-sm text-neutral-dark">{comparison.before}</p>
                    </div>

                    <ArrowRight className="w-5 h-5 text-brand-primary flex-shrink-0" />

                    <div className="flex-1 p-3 bg-green-50 rounded-lg">
                      <p className="text-xs text-green-600 font-medium mb-1">Depois</p>
                      <p className="text-sm text-neutral-dark font-semibold">{comparison.after}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 bg-brand-primary/10 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm font-semibold text-brand-primary">
                      {comparison.improvement}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
