"use client"

import { motion } from "framer-motion"
import { Crown, Zap, Users, Shield, Brain, GraduationCap, LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

const iconMap: Record<string, LucideIcon> = {
  crown: Crown,
  zap: Zap,
  users: Users,
  shield: Shield,
  brain: Brain,
  graduation: GraduationCap
}

interface Benefit {
  icon: string
  title: string
  description: string
  value: string
}

interface ExclusiveBenefitsSectionProps {
  content: {
    title: string
    subtitle: string
    benefits: Benefit[]
  }
}

export function ExclusiveBenefitsSection({ content }: ExclusiveBenefitsSectionProps) {
  return (
    <section
      id="exclusive"
      className="scroll-section min-h-screen flex items-center py-section-mobile md:py-section"
      style={{ background: '#F8F8F8' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Crown
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-brand-primary/20 bg-white">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-neutral-dark mb-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-dark/70 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Value badge */}
                    <div className="inline-block">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary border border-brand-primary/20">
                        {benefit.value}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
