"use client"

import { motion } from "framer-motion"
import { Award, FileText, Users } from "lucide-react"

interface StatsSectionProps {
  content: {
    title: string
    years: string
    documents: string
    lawyers: string
  }
}

export function StatsSection({ content }: StatsSectionProps) {
  const stats = [
    {
      icon: Award,
      value: content.years,
      label: "Anos de experiência",
    },
    {
      icon: FileText,
      value: content.documents,
      label: "Documentos processados",
    },
    {
      icon: Users,
      value: content.lawyers,
      label: "Advogados atendidos",
    },
  ]

  return (
    <section
      id="stats"
      className="scroll-section py-section-mobile md:py-section bg-neutral-dark text-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {content.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex p-4 bg-brand-primary/20 rounded-xl mb-4">
                  <Icon className="w-8 h-8 text-brand-secondary" />
                </div>
                <div className="font-display text-5xl font-bold mb-2 bg-gradient-to-r from-brand-secondary to-white bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
