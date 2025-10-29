"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Rocket, Brain, ChevronRight } from "lucide-react"

export function Page15Section() {
  const aiPlans = [
    {
      name: "IA Boost",
      price: 300,
      pieces: 50,
      color: "from-pink-500 to-purple-600",
      glowColor: "shadow-[0_0_40px_rgba(236,72,153,0.6)]",
      icon: Sparkles,
      features: [
        "50 peças elaboradas por IA",
        "Entrega em minutos",
        "Qualidade revisada",
        "Integração com seu plano atual"
      ]
    },
    {
      name: "IA Premium",
      price: 500,
      pieces: 100,
      color: "from-yellow-400 to-pink-600",
      glowColor: "shadow-[0_0_50px_rgba(251,191,36,0.8)]",
      icon: Rocket,
      recommended: true,
      features: [
        "100 peças elaboradas por IA",
        "Entrega instantânea",
        "Qualidade superior",
        "Prioridade no processamento",
        "Modelos especializados"
      ]
    }
  ]

  return (
    <section
      id="page15"
      className="min-h-screen bg-freelaw-bg flex items-center justify-center px-4 py-20 relative overflow-hidden"
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
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-freelaw-purple/20 to-freelaw-purpleLight/20 border border-freelaw-purpleLight/40 rounded-full mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(167,134,250,0.3)",
                "0 0 40px rgba(167,134,250,0.6)",
                "0 0 20px rgba(167,134,250,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain className="w-5 h-5 text-freelaw-purpleLight" />
            <span className="text-freelaw-purpleLight font-semibold">Powered by AI</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-freelaw-purpleLight bg-clip-text text-transparent">
              Turbine seu escritório
            </span>
            <br />
            <span className="text-white">com Inteligência Artificial</span>
          </h2>

          <p className="text-xl md:text-2xl text-freelaw-textDim max-w-3xl mx-auto">
            Combine o melhor dos dois mundos: advogados especialistas + IA ultrarrápida
          </p>
        </motion.div>

        {/* AI Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
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
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-xl">
                      <span className="text-sm font-bold text-black flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        MAIS POPULAR
                      </span>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${plan.color} ${plan.glowColor} overflow-hidden`}
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
                    <div className="flex justify-center mb-6">
                      <motion.div
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-3xl font-bold text-white text-center mb-2">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-white/80 text-lg">+</span>
                        <span className="text-5xl font-bold text-white">R$ {plan.price}</span>
                        <span className="text-white/80 text-lg">/mês</span>
                      </div>
                      <p className="text-white/90 text-sm">adicional ao seu plano atual</p>
                    </div>

                    {/* Pieces */}
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-6xl font-bold text-white mb-2">{plan.pieces}</div>
                      <div className="text-white text-lg">peças com IA por mês</div>
                    </motion.div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start gap-3 text-white"
                        >
                          <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Adicionar ao Plano
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-freelaw-purple/10 to-freelaw-purpleLight/10 border border-freelaw-purpleLight/30 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white text-center mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-freelaw-purpleLight" />
              Como funciona?
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-full bg-freelaw-purpleLight text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                  1
                </div>
                <p className="text-white text-sm">
                  Adicione o plano de IA ao seu plano atual
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-freelaw-purpleLight text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                  2
                </div>
                <p className="text-white text-sm">
                  Envie suas demandas para elaboração por IA
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-freelaw-purpleLight text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                  3
                </div>
                <p className="text-white text-sm">
                  Receba peças elaboradas em minutos com qualidade garantida
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
