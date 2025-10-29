"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function Page3Section() {
  const [clickCount, setClickCount] = useState(0)

  const phrases = [
    "Pra mim é normal trabalhar mais de 10 horas por dia",
    "Geralmente em alguns finais de semana eu preciso fazer algo do trabalho",
    "Tenho muito medo de perder um prazo",
    "Além de me sobrecarregar eu carrego a culpa de sobrecarregar quem trabalha comigo",
    "Minha familia reclama que eu não chego em casa cedo e quando chego não consigo estar 100% presente"
  ]

  const overloadPercentages = [0, 20, 40, 60, 80, 100]

  const handleImageClick = () => {
    if (clickCount < phrases.length) {
      setClickCount(clickCount + 1)
    }
  }

  return (
    <section id="page3" className="min-h-screen bg-freelaw-bg flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-50" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
        >
          83% dos advogados relatam<br />
          <span className="text-freelaw-purpleLight">sobrecarga</span> constante
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-freelaw-textDim text-center mb-12"
        >
          Clique se você se identifica com algum desses pensamentos...
        </motion.p>

        {/* Content Grid - Image Left, Phrases Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Indicator */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* Image with Purple Glow */}
            <motion.div
              onClick={handleImageClick}
              className="relative cursor-pointer group mb-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
              key={clickCount}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-freelaw-purple/20 ring-1 ring-freelaw-purple/40">
                <span className="text-freelaw-textDim text-base">Sobrecarga:</span>
                <span className={`text-3xl font-bold ${
                  overloadPercentages[clickCount] === 100
                    ? 'text-red-400'
                    : 'text-freelaw-purpleLight'
                }`}>
                  {overloadPercentages[clickCount]}%
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Phrases */}
          <div className="space-y-4">
            <AnimatePresence>
              {phrases.slice(0, clickCount).map((phrase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, x: -50, height: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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

            {/* Empty state message */}
            {clickCount === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center py-20"
              >
                <p className="text-freelaw-textDim text-lg">
                  Clique na imagem para revelar os pensamentos...
                </p>
              </motion.div>
            )}

            {/* Completion message */}
            {clickCount === phrases.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-6 rounded-xl bg-gradient-to-r from-freelaw-purple/20 to-brand-secondary/20 border border-freelaw-purpleLight/30"
              >
                <p className="text-white text-center text-lg font-medium">
                  Se identificou com algum destes pensamentos?<br />
                  <span className="text-freelaw-purpleLight">É hora de mudar essa realidade.</span>
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
