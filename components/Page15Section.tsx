"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Rocket } from "lucide-react"

export function Page15Section() {
  const aiPlans = [
    {
      name: "IA Boost",
      price: 240,
      originalPrice: 300,
      pieces: 50,
      color: "from-freelaw-purple to-freelaw-purpleLight",
      glowColor: "shadow-[0_0_30px_rgba(167,134,250,0.4)]",
      icon: Sparkles
    },
    {
      name: "IA Premium",
      price: 400,
      originalPrice: 500,
      pieces: 100,
      color: "from-freelaw-purpleLight to-freelaw-purple",
      glowColor: "shadow-[0_0_40px_rgba(167,134,250,0.5)]",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-white">Turbine seu escritório</span>
            <br />
            <span className="bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple bg-clip-text text-transparent">
              com Inteligência Artificial
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex flex-col items-center gap-2 px-6 py-4 bg-freelaw-purple/30 rounded-2xl border border-freelaw-purpleLight/50 backdrop-blur-sm">
              <span className="text-freelaw-purpleLight font-bold text-sm md:text-base uppercase tracking-wider">
                GARANTA OS MELHORES VALORES NA PRÉ-VENDA
              </span>
              <span className="text-white font-semibold text-xs md:text-sm">
                (APENAS EM NOVEMBRO)
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-xs text-freelaw-textDim max-w-3xl mx-auto"
          >
            <span className="font-semibold text-freelaw-purpleLight">⚠️ Atenção:</span>
            <span>A solução de IA é comercializada apenas em conjunto com os planos da Freelaw.</span>
          </motion.div>
        </motion.div>

        {/* AI Plans Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                    <div className="px-3 py-1.5 bg-freelaw-purpleLight rounded-full shadow-xl">
                      <span className="text-xs font-bold text-white flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        MAIS POPULAR
                      </span>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className={`relative p-4 rounded-xl bg-gradient-to-br ${plan.color} ${plan.glowColor} overflow-hidden`}
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
                    <div className="flex justify-center mb-3">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-xl font-bold text-white text-center mb-2">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="text-center mb-3">
                      {plan.originalPrice && (
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-white/50 text-base line-through">De R$ {plan.originalPrice}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-white/80 text-sm">Por apenas +</span>
                        <span className="text-3xl font-bold text-white">R$ {plan.price}</span>
                        <span className="text-white/80 text-sm">/mês</span>
                      </div>
                      <p className="text-white/90 text-xs">adicional ao seu plano atual</p>
                    </div>

                    {/* Pieces */}
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl font-bold text-white mb-1">{plan.pieces}</div>
                      <div className="text-white text-sm">peças com IA por mês</div>
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
