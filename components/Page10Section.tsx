"use client"

import { motion } from "framer-motion"
import { Users, Award, CheckCircle, Star, TrendingUp } from "lucide-react"

export function Page10Section() {
  const stats = [
    {
      icon: Users,
      number: "11.000",
      label: "Advogados cadastrados",
      description: "Apenas 350 elaborando peças"
    },
    {
      icon: Award,
      number: "100%",
      label: "Curadoria completa",
      description: "Todos passam por treinamento"
    },
    {
      icon: Star,
      number: "4.48",
      label: "Nota média dos prestadores",
      description: "Avaliados em todas as entregas",
      highlight: true
    }
  ]

  const qualityMetrics = [
    {
      percentage: 87,
      label: "Aprovados de primeira",
      description: "Sem revisão ou substituição",
      color: "from-green-400 to-green-600"
    },
    {
      percentage: 95,
      label: "Notas 3, 4 e 5",
      description: "Apenas 5% com notas 1 e 2",
      color: "from-freelaw-purpleLight to-freelaw-purple"
    }
  ]

  const allCards = [
    ...stats,
    ...qualityMetrics.map(m => ({
      number: `${m.percentage}%`,
      label: m.label,
      description: m.description,
      icon: TrendingUp,
      isPercentage: true,
      percentage: m.percentage
    })),
    {
      number: "5",
      label: "Notas baixas a cada 100",
      description: "Apenas 5% têm notas 1 e 2",
      icon: CheckCircle
    }
  ]

  return (
    <section
      id="page10"
      className="min-h-screen bg-freelaw-bg flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-30" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 italic">
            <span className="text-white">"Tenho receio da </span>
            <span className="bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple bg-clip-text text-transparent">
              qualidade...
            </span>
            <span className="text-white">"</span>
          </h2>
          <p className="text-xl text-freelaw-textDim">
            Os números falam por si
          </p>
        </motion.div>

        {/* Vertical Layout */}
        <div className="relative max-w-md mx-auto">
          {/* Cards stacked vertically */}
          <div className="relative space-y-6">
            {allCards.map((card, index) => {
              const Icon = card.icon
              const hasNext = index < allCards.length - 1

              return (
                <div key={index} className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative p-4 rounded-lg bg-gradient-to-br from-freelaw-purple/20 to-freelaw-purpleLight/20 border border-freelaw-purpleLight/40 w-[240px]"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-freelaw-purpleLight/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-freelaw-purpleLight" />
                      </div>
                    </div>

                    <div className="text-center mb-1">
                      <span className="text-2xl font-bold text-freelaw-purpleLight">
                        {card.number}
                      </span>
                    </div>

                    {card.isPercentage && (
                      <div className="mb-2 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${card.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
                          className="h-full bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple rounded-full"
                        />
                      </div>
                    )}

                    <h3 className="text-center text-xs font-semibold text-white mb-1">
                      {card.label}
                    </h3>

                    <p className="text-center text-[10px] text-freelaw-textDim leading-tight">
                      {card.description}
                    </p>
                  </motion.div>

                  {/* Connector Arrow to next card */}
                  {hasNext && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      className="my-2 flex flex-col items-center"
                    >
                      <div className="w-0.5 h-6 bg-gradient-to-b from-freelaw-purpleLight to-freelaw-purple" />
                      <svg className="w-4 h-4 text-freelaw-purpleLight -mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
