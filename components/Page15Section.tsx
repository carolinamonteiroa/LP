"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Rocket, Brain } from "lucide-react"

export function Page15Section() {
  const aiPlans = [
    {
      name: "IA Boost",
      price: 300,
      pieces: 50,
      color: "from-pink-500 to-purple-600",
      glowColor: "shadow-[0_0_40px_rgba(236,72,153,0.6)]",
      icon: Sparkles
    },
    {
      name: "IA Premium",
      price: 500,
      pieces: 100,
      color: "from-yellow-400 to-pink-600",
      glowColor: "shadow-[0_0_50px_rgba(251,191,36,0.8)]",
      icon: Rocket,
      recommended: true
    }
  ]

  return (
    <section
      id="page15"
      className="h-screen bg-freelaw-bg flex items-center justify-center px-4 py-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-heroGradient opacity-30" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-freelaw-purpleLight rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-freelaw-purple/20 to-freelaw-purpleLight/20 border border-freelaw-purpleLight/40 rounded-full mb-4"
            animate={{
              boxShadow: [
                "0 0 20px rgba(167,134,250,0.3)",
                "0 0 40px rgba(167,134,250,0.6)",
                "0 0 20px rgba(167,134,250,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain className="w-4 h-4 text-freelaw-purpleLight" />
            <span className="text-freelaw-purpleLight font-semibold text-sm">Powered by AI</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-freelaw-purpleLight bg-clip-text text-transparent">
              Turbine seu escritório
            </span>
            <br />
            <span className="text-white">com Inteligência Artificial</span>
          </h2>

          <p className="text-base md:text-lg text-freelaw-textDim max-w-3xl mx-auto mb-3">
            Em alguns casos, delegue a elaboração de peças para nossa IA! Feita por advogados para advogado.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-xs text-yellow-400 max-w-3xl mx-auto"
          >
            <span className="font-semibold">⚠️ Atenção:</span>
            <span>A solução de IA é comercializada apenas em conjunto com os planos da Freelaw.</span>
          </motion.div>
        </motion.div>

        {/* AI Plans Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {aiPlans.map((plan, index) => {
            const Icon = plan.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-xl">
                      <span className="text-xs font-bold text-black flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        MAIS POPULAR
                      </span>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${plan.color} ${plan.glowColor} overflow-hidden`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-white text-center mb-2">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-white/80 text-base">+</span>
                        <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
                        <span className="text-white/80 text-base">/mês</span>
                      </div>
                      <p className="text-white/90 text-xs">adicional ao seu plano atual</p>
                    </div>

                    {/* Pieces */}
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-5xl font-bold text-white mb-1">{plan.pieces}</div>
                      <div className="text-white text-base">peças com IA por mês</div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
