"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface HeroPremiumProps {
  clientName?: string
}

export function HeroPremium({ clientName = "" }: HeroPremiumProps) {
  const [name, setName] = useState(clientName)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-freelaw-bg pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradientLight" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 -mt-8 lg:-mt-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Personalization Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-1 rounded-full bg-freelaw-purpleLight/20 ring-1 ring-freelaw-purpleLight/40 text-freelaw-purpleLight text-sm md:text-base pl-4 pr-2 py-2 backdrop-blur"
            >
              <span className="whitespace-nowrap">Apresentação exclusiva para</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="[digite o nome]"
                className="bg-transparent border-none outline-none focus:outline-none placeholder:text-freelaw-purpleLight/40 text-freelaw-purpleLight font-medium min-w-[10ch] pr-2"
                style={{ width: name ? `${name.length + 1}ch` : '15ch' }}
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="font-bold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-white">
                Como transformar
                <br className="hidden sm:block" />
                seu escritório em
                <br className="hidden sm:block" />
              </span>
              <span className="bg-gradient-to-r from-white via-freelaw-purpleLight to-brand-secondary bg-clip-text text-transparent">
                uma empresa
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-lg md:text-xl text-freelaw-textDim max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Escale sua advocacia sem precisar contratar mais advogados. Delegue, automatize e foque no que realmente importa: seus clientes.
            </motion.p>
          </motion.div>

          {/* Right Column - Image with Glow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-2xl ring-1 ring-white/10 shadow-glow overflow-hidden p-1">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-[4/3] bg-gray-900">
                <Image
                  src="/hero-advogado.jpg"
                  alt="Advogado trabalhando ao telefone"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
