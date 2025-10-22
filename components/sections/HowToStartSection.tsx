"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, CheckCircle, Clock, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HowToStartSectionProps {
  content: {
    title: string
    subtitle: string
    pitch: string
    ctaPrimary: string
    ctaSecondary: string
    benefits: string[]
  }
}

const benefitIcons = [CheckCircle, Clock, UserCheck, CheckCircle]

export function HowToStartSection({ content }: HowToStartSectionProps) {
  return (
    <section
      id="howToStart"
      className="scroll-section py-section-mobile md:py-section bg-gradient-to-br from-neutral-light via-white to-brand-primary/5"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            {content.title}
          </h2>
          <p className="text-2xl text-neutral-dark/70 mb-6">
            {content.subtitle}
          </p>
          <p className="font-display text-xl text-brand-primary italic">
            &ldquo;{content.pitch}&rdquo;
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] || CheckCircle
              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-soft"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <p className="text-neutral-dark pt-1">{benefit}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="group flex-1 sm:flex-initial">
            {content.ctaPrimary}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group flex-1 sm:flex-initial">
            <FileText className="w-5 h-5" />
            {content.ctaSecondary}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
