"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function Page4Section() {
  const [selectedCards, setSelectedCards] = useState<number[]>([])

  const challenges = [
    { text: "Sim", rest: ", realmente está difícil encontrar pessoas qualificadas no mercado de trabalho." },
    { text: "Sim", rest: ", realmente não é fácil gerenciar os profissionais da geração Z." },
    { text: "Sim", rest: ", hoje com a presença digital meu concorrente pode ser um escritório de outro Estado." },
    { text: "Sim", rest: ", os advogados que sabem usar tecnologia vão sair na frente." },
  ]

  const toggleCard = (index: number) => {
    setSelectedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section id="page3" className="h-screen bg-freelaw-bg flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-50" />
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
        >
          Escalar na advocacia tem suas dificuldades
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-freelaw-textDim text-center mb-16"
        >
          É difícil sair dos 100 processos e chegar nos 500, nós sabemos
        </motion.p>

        <div className="space-y-6 mb-12">
          {challenges.map((challenge, index) => {
            const isSelected = selectedCards.includes(index)
            const isLast = index === challenges.length - 1

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => toggleCard(index)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left bg-[#1E1E1E]/50 ${
                    isSelected
                      ? "border-freelaw-purpleLight"
                      : "border-freelaw-purple/30 hover:border-freelaw-purple"
                  }`}
                  style={isSelected ? {
                    boxShadow: "0 0 20px rgba(167,134,250,0.8), 0 0 40px rgba(167,134,250,0.4), inset 0 0 20px rgba(167,134,250,0.1)"
                  } : {}}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={isSelected ? {
                    boxShadow: [
                      "0 0 20px rgba(167,134,250,0.8), 0 0 40px rgba(167,134,250,0.4)",
                      "0 0 30px rgba(167,134,250,1), 0 0 60px rgba(167,134,250,0.6)",
                      "0 0 20px rgba(167,134,250,0.8), 0 0 40px rgba(167,134,250,0.4)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-white text-base md:text-lg">
                    <span className="font-bold text-freelaw-purpleLight">{challenge.text}</span>
                    {challenge.rest}
                  </p>
                </motion.button>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
