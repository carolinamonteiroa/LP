"use client"

import { motion } from "framer-motion"
import { Search, Zap, CheckCircle } from "lucide-react"

interface SolutionSectionProps {
  content: {
    title: string
    subtitle: string
    steps: Array<{
      number: number
      title: string
      description: string
      icon: string
    }>
  }
}

const iconMap = {
  search: Search,
  zap: Zap,
  checkCircle: CheckCircle,
}

export function SolutionSection({ content }: SolutionSectionProps) {
  return (
    <section
      id="solution"
      className="scroll-section py-section-mobile md:py-section bg-white"
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

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {content.steps.map((step, index) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap] || Search
                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="p-8 rounded-2xl bg-white border-2 border-neutral-light hover:border-brand-primary transition-colors shadow-soft hover:shadow-medium h-full flex flex-col">
                      {/* Step number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-medium">
                        <span className="text-white font-bold text-xl">
                          {step.number}
                        </span>
                      </div>

                      <div className="flex flex-col items-center text-center gap-4 mt-4">
                        <div className="p-4 bg-brand-primary/10 rounded-xl">
                          <Icon className="w-10 h-10 text-brand-primary" />
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-neutral-dark">
                          {step.title}
                        </h3>
                        <p className="text-neutral-dark/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
