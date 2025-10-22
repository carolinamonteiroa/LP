"use client"

import { motion } from "framer-motion"
import { Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PremiumHeroSectionProps {
  content: {
    badge: string
    headline: string
    subheadline: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    highlight: string
  }
}

export function PremiumHeroSection({ content }: PremiumHeroSectionProps) {
  return (
    <section
      id="hero"
      className="scroll-section min-h-screen flex items-center justify-center relative overflow-hidden py-section-mobile md:py-section"
      style={{
        background: 'linear-gradient(135deg, #1a1d3d 0%, #2d1b4e 50%, #1a1d3d 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(90deg, rgba(169, 134, 209, 0.2) 0%, rgba(107, 60, 155, 0.2) 100%)',
              border: '1px solid rgba(169, 134, 209, 0.3)'
            }}
          >
            <Crown className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-semibold text-brand-secondary">{content.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #A986D1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {content.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.subheadline}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {content.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 text-white font-semibold px-8 py-6 text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {content.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 px-8 py-6 text-lg"
            >
              {content.ctaSecondary}
            </Button>
          </motion.div>

          {/* Highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2 text-sm text-yellow-400/90 font-medium"
          >
            <Sparkles className="w-4 h-4" />
            {content.highlight}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
