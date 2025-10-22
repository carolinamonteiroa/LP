"use client"

import { motion } from "framer-motion"
import { Quote, MapPin, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CasesSectionProps {
  content: Array<{
    name: string
    area: string
    city: string
    result: string
    description: string
    metrics: {
      timeSaved?: string
      qualityIncrease?: string
      costReduction?: string
      officeUpgrade?: string
      newClients?: string
    }
    quote: string
  }>
}

export function CasesSection({ content }: CasesSectionProps) {
  return (
    <section
      id="cases"
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
            Casos de Sucesso
          </h2>
          <p className="text-xl text-neutral-dark/70">
            Histórias reais de advogados que transformaram suas práticas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {content.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-strong transition-shadow">
                <CardContent className="p-6 flex flex-col gap-4">
                  {/* Quote icon */}
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <Quote className="w-6 h-6 text-brand-primary" />
                  </div>

                  {/* Name and location */}
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-neutral-dark mb-2">
                      {caseItem.name}
                    </h3>
                    <div className="flex flex-col gap-1 text-sm text-neutral-dark/60">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{caseItem.area}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{caseItem.city}</span>
                      </div>
                    </div>
                  </div>

                  {/* Result highlight */}
                  <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                    <p className="text-sm font-semibold text-green-700">
                      {caseItem.result}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-dark/80 leading-relaxed">
                    {caseItem.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-light">
                    {Object.entries(caseItem.metrics).map(([key, value]) => {
                      if (!value) return null
                      const labels: Record<string, string> = {
                        timeSaved: "Tempo economizado",
                        qualityIncrease: "Qualidade",
                        costReduction: "Economia",
                        officeUpgrade: "Escritório",
                        newClients: "Novos clientes",
                      }
                      return (
                        <div key={key} className="text-center">
                          <p className="text-xs text-neutral-dark/60 mb-1">
                            {labels[key]}
                          </p>
                          <p className="text-sm font-semibold text-brand-primary">
                            {value}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-auto pt-4 border-t border-neutral-light">
                    <p className="text-sm italic text-neutral-dark/70">
                      &ldquo;{caseItem.quote}&rdquo;
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
