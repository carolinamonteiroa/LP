"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function DorClienteHero() {
  const [showQuotes, setShowQuotes] = useState(false)

  const quotes = [
    '"Trabalho 10h por dia, mas as peças estão atrasadas."',
    '"Nova ficha de anotação não classificada é jurídica estimada."',
    '"Para dobrar, vou ter fazer duração de mercado."',
    '"Consumir mesa sobretudo significante mais conhecimento."'
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-freelaw-bg py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Image with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative order-last lg:order-first"
          >
            <div className="relative rounded-2xl ring-2 ring-freelaw-purple/40 shadow-glow overflow-hidden p-1 bg-gradient-to-br from-freelaw-purple/30 to-transparent">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-900">
                <Image
                  src="/hero-advogado.jpg"
                  alt="Advogado estressado com sobrecarga de trabalho"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Button to reveal quotes */}
            {!showQuotes && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 flex justify-center"
              >
                <Button
                  onClick={() => setShowQuotes(true)}
                  className="bg-freelaw-purple hover:bg-freelaw-purple/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-glow transition-all duration-300"
                >
                  Sobrecarga 100%
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <motion.h1
              className="font-bold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-white">
                83% dos advogados
                <br className="hidden sm:block" />
                relatam{" "}
                <span className="bg-gradient-to-r from-freelaw-purple via-freelaw-purpleLight to-brand-secondary bg-clip-text text-transparent">
                  sobrecarga constante
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-freelaw-textDim max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Deixe você se identificar com algum desses pensamentos...
            </motion.p>

            {/* Animated Quotes */}
            {showQuotes && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 mt-8"
              >
                {quotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-freelaw-purple/20 to-transparent rounded-xl blur-sm" />
                    <div className="relative bg-freelaw-purple/10 backdrop-blur-sm border border-freelaw-purple/30 rounded-xl p-5 hover:border-freelaw-purple/50 transition-all duration-300">
                      <p className="text-freelaw-white/90 text-base md:text-lg leading-relaxed">
                        {quote}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
