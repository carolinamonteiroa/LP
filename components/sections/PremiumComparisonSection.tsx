"use client"

import { motion } from "framer-motion"
import { Check, X, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Feature {
  feature: string
  standard: string
  premium: string
  highlight: boolean
}

interface PremiumComparisonSectionProps {
  content: {
    title: string
    subtitle: string
    features: Feature[]
  }
}

export function PremiumComparisonSection({ content }: PremiumComparisonSectionProps) {
  return (
    <section
      id="comparison"
      className="scroll-section min-h-screen flex items-center py-section-mobile md:py-section"
      style={{ background: '#F8F8F8' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-4">
                <div className="font-semibold"></div>
                <div className="font-semibold text-center">Plano Padrão</div>
                <div className="font-semibold text-center flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" />
                  Premium
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-neutral-light">
                {content.features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`grid grid-cols-3 p-4 ${
                      item.highlight ? 'bg-brand-primary/5' : 'bg-white'
                    }`}
                  >
                    {/* Feature name */}
                    <div className="font-medium text-neutral-dark flex items-center">
                      {item.feature}
                      {item.highlight && (
                        <Star className="w-4 h-4 ml-2 text-brand-primary fill-brand-primary" />
                      )}
                    </div>

                    {/* Standard plan */}
                    <div className="text-center text-neutral-dark/70 flex items-center justify-center">
                      {item.standard === "Não incluso" ? (
                        <X className="w-5 h-5 text-red-500" />
                      ) : (
                        <span>{item.standard}</span>
                      )}
                    </div>

                    {/* Premium plan */}
                    <div className="text-center flex items-center justify-center">
                      {item.premium === "Acesso completo" ||
                       item.premium === "Ilimitadas" ||
                       item.premium === "24h" ||
                       item.premium === "Mensal (90min)" ? (
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="font-semibold text-brand-primary">
                            {item.premium}
                          </span>
                        </div>
                      ) : (
                        <span className="font-medium text-neutral-dark">
                          {item.premium}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
