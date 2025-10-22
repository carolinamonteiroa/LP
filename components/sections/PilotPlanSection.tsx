"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PilotPlanSectionProps {
  content: {
    title: string
    subtitle: string
    price: string
    pieces: number
    validity: string
    commitment: string
    features: string[]
    cta: string
    observation: string
  }
}

export function PilotPlanSection({ content }: PilotPlanSectionProps) {
  return (
    <section
      id="pilot"
      className="scroll-section py-section-mobile md:py-section bg-gradient-to-br from-brand-primary to-brand-secondary text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-white/90">{content.subtitle}</p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white text-neutral-dark p-8 md:p-12 shadow-strong">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <Badge variant="secondary" className="text-brand-primary">
                  {content.commitment}
                </Badge>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="font-display text-6xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  {content.price}
                </span>
              </div>
              <p className="text-neutral-dark/70">
                {content.pieces} peças jurídicas • Válido por {content.validity}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-neutral-dark">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="w-full group">
              {content.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="mt-6 p-4 bg-brand-primary/5 rounded-xl flex items-start gap-3">
              <Calendar className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-dark/70">
                {content.observation}
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
