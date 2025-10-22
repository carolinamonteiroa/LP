"use client"

import { motion } from "framer-motion"
import { Clock, Users, TrendingDown } from "lucide-react"

interface ProblemSectionProps {
  content: {
    title: string
    subtitle: string
    items: Array<{
      text: string
      icon: string
    }>
  }
}

const iconMap = {
  clock: Clock,
  users: Users,
  trendingDown: TrendingDown,
}

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section
      id="problem"
      className="scroll-section py-section-mobile md:py-section bg-neutral-light"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            {content.title}
          </h2>
          <p className="font-display text-2xl text-brand-primary italic">
            &ldquo;{content.subtitle}&rdquo;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {content.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Clock
            return (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-white border border-neutral-light shadow-soft hover:shadow-medium transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-red-50 rounded-xl">
                    <Icon className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-lg text-neutral-dark leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
