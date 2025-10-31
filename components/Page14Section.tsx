"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function Page14Section() {
  const mainPlans = [
    {
      name: "Otimização",
      price: 2090,
      description: "Equilíbrio entre volume, orientação inicial e suporte humanizado",
      features: [
        "5 peças simultâneas | ~20/mês",
        "R$ 105 em média por peça",
        "Adesão: R$ 650"
      ],
      bgColor: "bg-pink-500",
      textColor: "text-pink-500"
    },
    {
      name: "Escala",
      price: 2590,
      description: "Perfeito para escritórios em crescimento que querem escalar produção com acompanhamento",
      features: [
        "10 peças simultâneas | ~40/mês",
        "R$ 65 em média por peça",
        "Adesão: R$ 500"
      ],
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-500",
      highlight: true
    },
    {
      name: "Corporativo",
      price: 4990,
      description: "Indicado para parceiros estratégicos com alta demanda e foco em performance contínua",
      features: [
        "25 peças simultâneas | ~100/mês",
        "R$ 49 em média por peça",
        "Adesão: Isento"
      ],
      bgColor: "bg-purple-500",
      textColor: "text-purple-500"
    }
  ]

  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  return (
    <section
      id="page14"
      className="h-screen bg-freelaw-bg px-4 py-12 relative overflow-hidden flex items-center justify-center"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-30" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 leading-tight text-white"
        >
          Conheça nossos planos
        </motion.h2>

        {/* Plan Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mainPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className={`relative bg-white/5 border-2 rounded-2xl p-6 overflow-hidden h-full flex flex-col ${
                plan.highlight
                  ? 'border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.6)]'
                  : 'border-white/20'
              }`}>
                {plan.highlight && (
                  <>
                    {/* Fire Effect Border */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                      {/* Animated Fire Gradient Border */}
                      <motion.div
                        animate={{
                          background: [
                            'linear-gradient(0deg, rgba(255,69,0,0) 0%, rgba(255,140,0,0.4) 50%, rgba(255,69,0,0) 100%)',
                            'linear-gradient(90deg, rgba(255,69,0,0) 0%, rgba(255,140,0,0.4) 50%, rgba(255,69,0,0) 100%)',
                            'linear-gradient(180deg, rgba(255,69,0,0) 0%, rgba(255,140,0,0.4) 50%, rgba(255,69,0,0) 100%)',
                            'linear-gradient(270deg, rgba(255,69,0,0) 0%, rgba(255,140,0,0.4) 50%, rgba(255,69,0,0) 100%)',
                            'linear-gradient(0deg, rgba(255,69,0,0) 0%, rgba(255,140,0,0.4) 50%, rgba(255,69,0,0) 100%)'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 blur-xl"
                      />
                    </div>

                    {/* Badge Mais Vendido - Centered Above */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        opacity: { duration: 0.5 },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 z-30"
                    >
                      <div className="relative px-4 py-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white text-sm font-bold rounded-full shadow-[0_0_40px_rgba(255,69,0,0.8)] border-2 border-yellow-300">
                        <motion.span
                          animate={{
                            textShadow: [
                              '0 0 20px rgba(255,255,255,0.8)',
                              '0 0 30px rgba(255,165,0,1)',
                              '0 0 20px rgba(255,255,255,0.8)'
                            ]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          🔥 MAIS VENDIDO
                        </motion.span>
                      </div>
                    </motion.div>
                  </>
                )}

                <div className="relative z-10">
                  <div className={`inline-block px-3 py-1 rounded-full ${plan.bgColor} text-white text-xs font-semibold mb-3`}>
                    Plano {plan.name}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {formatBRL(plan.price)}
                    <span className="text-base text-freelaw-textDim">/mês</span>
                  </h3>

                  <p className="text-sm text-freelaw-textDim mb-4 min-h-[60px]">
                    {plan.description}
                  </p>

                  <div className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-start gap-2"
                      >
                        <div className={`w-5 h-5 rounded-full ${plan.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
