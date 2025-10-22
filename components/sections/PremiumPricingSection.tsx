"use client"

import { motion } from "framer-motion"
import { Check, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PremiumPricingSectionProps {
  content: {
    title: string
    subtitle: string
    plan: {
      name: string
      price: string
      period: string
      pieces: string
      commitment: string
      description: string
    }
    included: string[]
    savings: {
      title: string
      comparison: Array<{
        item: string
        cost: string
        notes: string
      }>
      premiumCost: string
      monthlySavings: string
      annualSavings: string
    }
  }
}

export function PremiumPricingSection({ content }: PremiumPricingSectionProps) {
  return (
    <section
      id="pricing"
      className="scroll-section min-h-screen flex items-center py-section-mobile md:py-section"
      style={{ background: 'linear-gradient(135deg, #1a1d3d 0%, #2d1b4e 100%)' }}
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
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {content.title}
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 bg-white relative overflow-hidden">
                {/* Premium badge */}
                <div className="absolute top-0 right-0 bg-gradient-to-br from-brand-primary to-brand-secondary text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
                  PREMIUM
                </div>

                {/* Plan name */}
                <h3 className="font-display text-2xl font-bold text-neutral-dark mb-2 mt-4">
                  {content.plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-5xl font-bold text-brand-primary">
                    {content.plan.price}
                  </span>
                  <span className="text-neutral-dark/60 ml-2">
                    {content.plan.period}
                  </span>
                </div>

                {/* Plan details */}
                <div className="mb-6 space-y-2">
                  <p className="text-neutral-dark/80">
                    <span className="font-semibold">Peças:</span> {content.plan.pieces}
                  </p>
                  <p className="text-neutral-dark/80">
                    <span className="font-semibold">Compromisso:</span> {content.plan.commitment}
                  </p>
                </div>

                <p className="text-neutral-dark/70 mb-8 leading-relaxed">
                  {content.plan.description}
                </p>

                {/* What's included */}
                <div className="mb-8">
                  <h4 className="font-semibold text-neutral-dark mb-4">O que está incluído:</h4>
                  <div className="space-y-3">
                    {content.included.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-brand-primary" />
                        </div>
                        <span className="text-neutral-dark/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 text-white font-semibold"
                >
                  Começar agora
                </Button>
              </Card>
            </motion.div>

            {/* Savings Comparison */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingDown className="w-6 h-6 text-green-400" />
                  <h4 className="font-display text-xl font-bold text-white">
                    {content.savings.title}
                  </h4>
                </div>

                {/* Comparison table */}
                <div className="space-y-3 mb-6">
                  {content.savings.comparison.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        item.item === 'Total mensal'
                          ? 'bg-white/10 border border-white/20'
                          : 'bg-white/5'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className={`font-semibold ${
                          item.item === 'Total mensal' ? 'text-white' : 'text-white/90'
                        }`}>
                          {item.item}
                        </span>
                        <span className={`font-bold ${
                          item.item === 'Total mensal' ? 'text-red-400' : 'text-white/80'
                        }`}>
                          {item.cost}
                        </span>
                      </div>
                      <span className="text-xs text-white/60">{item.notes}</span>
                    </div>
                  ))}
                </div>

                {/* Premium cost highlight */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">Freelaw Premium</span>
                    <span className="text-2xl font-bold text-white">
                      {content.savings.premiumCost}
                    </span>
                  </div>
                  <p className="text-xs text-white/80">Investimento mensal all-inclusive</p>
                </div>

                {/* Savings summary */}
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-green-400">Economia mensal</span>
                    <span className="text-xl font-bold text-green-400">
                      {content.savings.monthlySavings}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-400/80">Economia anual</span>
                    <span className="text-lg font-bold text-green-400">
                      {content.savings.annualSavings}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
