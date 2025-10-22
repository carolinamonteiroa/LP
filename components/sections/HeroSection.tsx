"use client"

import { motion } from "framer-motion"
import { replacePlaceholders } from "@/lib/utils"
import Image from "next/image"

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
      className="scroll-section min-h-screen flex items-center justify-center relative overflow-hidden py-section-mobile md:py-section"
      style={{ background: '#1a1d3d' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <motion.p
              className="text-sm md:text-base text-white/70 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {replacePlaceholders(content.subheadline, params)}
            </motion.p>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content.headline}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {content.description}
            </motion.p>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200 p-1" style={{
              background: 'linear-gradient(135deg, #A986D1 0%, #6B3C9B 50%, #A986D1 100%)',
              boxShadow: '0 0 40px rgba(169, 134, 209, 0.6), 0 0 80px rgba(107, 60, 155, 0.4)'
            }}>
              <div className="rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/lawyer-working.svg"
                  alt="Advogado trabalhando"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
