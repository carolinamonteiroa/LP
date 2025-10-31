"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Page3Section() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isInView, setIsInView] = useState(false)

  const phrases = [
    "Pra mim é normal trabalhar mais de 10 horas por dia",
    "Geralmente em alguns finais de semana eu preciso fazer algo do trabalho",
    "Além de me sobrecarregar eu carrego a culpa de sobrecarregar quem trabalha comigo",
    "Minha familia reclama que eu não chego em casa cedo e quando chego não consigo estar 100% presente"
  ]

  const overloadPercentages = [0, 25, 50, 75, 100]

  useEffect(() => {
    if (isInView && currentPhrase < phrases.length) {
      const timer = setTimeout(() => {
        setCurrentPhrase(prev => prev + 1)
      }, 1500) // Mostra uma frase a cada 1.5 segundos

      return () => clearTimeout(timer)
    }
  }, [isInView, currentPhrase, phrases.length])

  return (
    <section id="page3" className="h-screen bg-freelaw-bg flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-50" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
        >
          Mais de 1 milhão de advogados no Brasil.<br />
          <span className="text-freelaw-purpleLight">83% se sentem sobrecarregados.</span>
        </motion.h2>


        {/* Content Grid - Image Left, Phrases Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Indicator */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onViewportEnter={() => setIsInView(true)}
            className="flex flex-col items-center"
          >
            {/* Image with Purple Glow */}
            <motion.div
              className="relative mb-6 mt-10"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-glow p-1 bg-gradient-to-br from-freelaw-purple to-freelaw-purpleLight">
                <div className="relative rounded-xl overflow-hidden w-[400px] h-[300px]">
                  <Image
                    src="/advogado-sobrecarga-courtroom.jpg"
                    alt="Advogado sobrecarregado"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Overload Indicator */}
            <motion.div
              key={currentPhrase}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-freelaw-purple/20 ring-1 ring-freelaw-purple/40">
                <span className="text-freelaw-textDim text-base">Sobrecarga:</span>
                <span className={`text-3xl font-bold ${
                  overloadPercentages[currentPhrase] === 100
                    ? 'text-red-400'
                    : 'text-freelaw-purpleLight'
                }`}>
                  {overloadPercentages[currentPhrase]}%
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Phrases */}
          <div className="space-y-4 mt-10">
            {/* Header */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-freelaw-textDim text-lg mb-6"
            >
              Alguns relatos dos nossos clientes:
            </motion.p>

            <AnimatePresence>
              {phrases.slice(0, currentPhrase).map((phrase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, x: -50, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="p-4 rounded-lg bg-freelaw-purple/10 border-l-4 border-freelaw-purpleLight">
                    <p className="text-white text-base md:text-lg leading-relaxed">
                      &ldquo;{phrase}&rdquo;
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  )
}
