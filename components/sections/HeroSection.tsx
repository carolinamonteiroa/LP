"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { replacePlaceholders } from "@/lib/utils"

interface HeroSectionProps {
  content: {
    headline: string
    subheadline: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    badge: string
  }
  params: Record<string, string>
}

export function HeroSection({ content, params }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="scroll-section min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-white via-neutral-light to-brand-primary/5 py-section-mobile md:py-section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6">
              {content.badge}
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-neutral-dark mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.headline}
          </motion.h1>

          <motion.p
            className="font-display text-xl md:text-2xl text-brand-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {replacePlaceholders(content.subheadline, params)}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-neutral-dark/70 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {content.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="group">
              {content.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {content.ctaSecondary}
            </Button>
          </motion.div>

          {/* Mock dashboard preview */}
          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong border border-neutral-light/50 bg-white p-4">
              <div className="aspect-video bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                    <Play className="w-8 h-8 text-brand-primary" />
                  </div>
                  <p className="text-sm text-neutral-dark/60">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
