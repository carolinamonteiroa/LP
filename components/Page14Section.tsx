"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown, Lock, Flame, TrendingUp } from "lucide-react"
import { useState } from "react"

export function Page14Section() {
  const [visiblePlans, setVisiblePlans] = useState<number[]>([])
  const [selectedBackupPlan, setSelectedBackupPlan] = useState<number | null>(null)
  const [showArchive, setShowArchive] = useState(false)

  const mainPlans = [
    {
      name: "Otimização",
      price: 2090,
      description: "Equilíbrio entre volume, orientação inicial e suporte humanizado",
      features: [
        "Equipe de ~3 advogados remotos",
        "2 usuários na plataforma",
        "5 peças simultâneas | ~20/mês",
        "Treinamento gravado",
        "1 reunião de onboarding com gerente",
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
        "Equipe de ~5 advogados remotos",
        "3 usuários na plataforma",
        "10 peças simultâneas | ~40/mês",
        "1 treinamento ao vivo (plataforma + boas práticas)",
        "Reunião mensal (30min) com gerente - métricas",
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
        "Equipe ilimitada de advogados",
        "Multiusuários ilimitados",
        "25 peças simultâneas | ~100/mês",
        "Treinamento ilimitado",
        "Reuniões quinzenais (30min) - planejamento e KPIs",
        "R$ 49 em média por peça",
        "Adesão: Isento"
      ],
      bgColor: "bg-purple-500",
      textColor: "text-purple-500"
    }
  ]

  const backupPlans = [
    {
      name: "Iniciação",
      price: 1090,
      description: "Para quem está começando",
      features: [
        "Até 2 peças simultâneas",
        "Média de 5 peças/mês",
        "1 revisão por peça",
        "Suporte padrão",
        "Inteligência Artificial incluída"
      ],
      bgColor: "bg-green-500",
      textColor: "text-green-500"
    },
    {
      name: "Controle",
      price: 1690,
      description: "Equilíbrio entre custo e benefício",
      features: [
        "Até 3 peças simultâneas",
        "Média de 10 peças/mês",
        "Revisão ilimitada",
        "Suporte prioritário",
        "Inteligência Artificial incluída",
        "Relatórios mensais"
      ],
      bgColor: "bg-teal-500",
      textColor: "text-teal-500"
    }
  ]

  const togglePlan = (index: number) => {
    if (visiblePlans.includes(index)) {
      setVisiblePlans(visiblePlans.filter(i => i !== index))
    } else {
      setVisiblePlans([...visiblePlans, index])
    }
  }

  const toggleBackupPlan = (index: number) => {
    if (selectedBackupPlan === index) {
      setSelectedBackupPlan(null)
    } else {
      setSelectedBackupPlan(index)
    }
  }

  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  return (
    <section
      id="page14"
      className="min-h-screen bg-freelaw-bg px-4 py-20 relative overflow-hidden"
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
          className="text-4xl md:text-6xl lg:text-6xl font-bold text-center mb-4 leading-tight text-white"
        >
          Conheça nossos planos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center text-freelaw-textDim mb-20"
        >
          Escolha o plano ideal para o seu escritório
        </motion.p>

        {/* Plan Buttons - Click to Reveal */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {mainPlans.map((plan, index) => (
            <button
              key={plan.name}
              onClick={() => togglePlan(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                visiblePlans.includes(index)
                  ? `${plan.bgColor} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {plan.name}
              <ChevronDown className={`inline-block ml-2 w-4 h-4 transition-transform ${
                visiblePlans.includes(index) ? 'rotate-180' : ''
              }`} />
            </button>
          ))}
        </div>

        {/* Main Plan Cards */}
        <div className="space-y-8 mb-42">
          <AnimatePresence>
            {mainPlans.map((plan, index) => (
              visiblePlans.includes(index) && (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative max-w-2xl mx-auto"
                >
                  <div className={`relative bg-white/5 border-2 rounded-2xl p-8 overflow-hidden ${
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

                          {/* Flickering flames around edges */}
                          {[...Array(30)].map((_, i) => {
                            const side = i % 4;
                            const position = (i / 4) * 10;
                            let positionStyle = {};

                            if (side === 0) positionStyle = { top: '-15px', left: `${position}%` };
                            else if (side === 1) positionStyle = { right: '-15px', top: `${position}%` };
                            else if (side === 2) positionStyle = { bottom: '-15px', left: `${position}%` };
                            else positionStyle = { left: '-15px', top: `${position}%` };

                            return (
                              <motion.div
                                key={i}
                                animate={{
                                  scale: [1, 1.8, 0.8, 1.5, 1],
                                  opacity: [0.4, 0.9, 0.3, 0.8, 0.4],
                                  y: side === 0 || side === 2 ? [-10, -25, -10] : 0,
                                  x: side === 1 || side === 3 ? [side === 1 ? 10 : -10, side === 1 ? 25 : -25, side === 1 ? 10 : -10] : 0,
                                }}
                                transition={{
                                  duration: 0.8 + Math.random() * 0.8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: Math.random() * 2
                                }}
                                className="absolute w-4 h-6 rounded-full blur-sm"
                                style={{
                                  ...positionStyle,
                                  background: `radial-gradient(circle, ${
                                    Math.random() > 0.5 ? '#ff4500' : '#ffa500'
                                  } 0%, rgba(255,69,0,0) 70%)`
                                }}
                              />
                            );
                          })}
                        </div>

                        {/* CSS Fire Effect at Footer */}
                        <div className="absolute bottom-0 left-0 right-0 h-[35%] z-[1] pointer-events-none overflow-hidden">
                          {/* Animated Fire Layers */}
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute inset-0"
                              animate={{
                                opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
                                scale: [1, 1.1, 1.05, 1.15, 1],
                                y: [0, -10, -5, -15, 0]
                              }}
                              transition={{
                                duration: 2 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                              }}
                              style={{
                                background: `radial-gradient(ellipse ${50 + i * 10}% ${40 + i * 5}% at ${45 + i * 2}% 100%,
                                  rgba(255,${140 + i * 20},0,${0.6 - i * 0.1}) 0%,
                                  rgba(255,${200 + i * 10},0,${0.4 - i * 0.08}) 30%,
                                  transparent 70%)`,
                                maskImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
                              }}
                            />
                          ))}

                          {/* Golden Glow Base */}
                          <div
                            className="absolute inset-0 mix-blend-screen opacity-50"
                            style={{
                              background: 'linear-gradient(to top, rgba(255,165,0,0.9) 0%, rgba(255,215,0,0.6) 25%, rgba(255,140,0,0.4) 50%, transparent 100%)'
                            }}
                          />

                          {/* Flickering Hot Spots */}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={`spot-${i}`}
                              className="absolute bottom-0 w-12 h-12 rounded-full blur-xl"
                              animate={{
                                opacity: [0.3, 0.8, 0.4, 0.9, 0.3],
                                scale: [0.8, 1.2, 0.9, 1.3, 0.8],
                                x: [0, Math.random() * 20 - 10, 0]
                              }}
                              transition={{
                                duration: 1.5 + Math.random(),
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                              }}
                              style={{
                                left: `${10 + i * 11}%`,
                                background: `radial-gradient(circle, ${
                                  i % 2 === 0 ? 'rgba(255,215,0,0.8)' : 'rgba(255,140,0,0.8)'
                                } 0%, transparent 70%)`
                              }}
                            />
                          ))}
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
                          className="absolute -top-4 left-1/2 -translate-x-1/2 z-30"
                        >
                          <div className="relative px-8 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white text-xl font-bold rounded-full shadow-[0_0_40px_rgba(255,69,0,0.8)] border-2 border-yellow-300">
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
                              🔥 MAIS VENDIDO 🔥
                            </motion.span>
                          </div>
                        </motion.div>
                      </>
                    )}

                    <div className={`inline-block px-4 py-1 rounded-full ${plan.bgColor} text-white text-sm font-semibold mb-4`}>
                      Plano {plan.name}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {formatBRL(plan.price)}
                      <span className="text-xl text-freelaw-textDim">/mês</span>
                    </h3>

                    <p className="text-lg text-freelaw-textDim mb-6">
                      {plan.description}
                    </p>

                    <div className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-6 h-6 rounded-full ${plan.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Compare os planos
          </h3>

          <div className="bg-white/5 border border-freelaw-purpleLight/30 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-white/10 border-b border-white/20">
              <div className="text-white font-semibold">Recursos</div>
              {mainPlans.map((plan) => (
                <div key={plan.name} className="text-center">
                  <div className={`inline-block px-3 py-1 rounded-full ${plan.bgColor} text-white text-sm font-bold mb-2`}>
                    {plan.name}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {formatBRL(plan.price)}
                  </div>
                  <div className="text-xs text-freelaw-textDim">/mês</div>
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-white/10">
              {[
                { label: "Peças simultâneas", values: ["5", "10", "25"] },
                { label: "Média mensal", values: ["~20 peças", "~40 peças", "~100 peças"] },
                { label: "Custo médio por peça", values: ["R$ 105", "R$ 65", "R$ 49"] },
                { label: "Equipe de advogados", values: ["~3", "~5", "Ilimitada"] },
                { label: "Usuários na plataforma", values: ["2", "3", "Ilimitados"] },
                { label: "Treinamento", values: ["Gravado", "1x ao vivo", "Ilimitado"] },
                { label: "Reuniões com gerente", values: ["1x onboarding", "Mensal (30min)", "Quinzenal (30min)"] },
                { label: "Adesão", values: ["R$ 650", "R$ 500", "Isento"] }
              ].map((row, index) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grid grid-cols-4 gap-4 p-6"
                >
                  <div className="text-white font-medium">{row.label}</div>
                  {row.values.map((value, vIndex) => (
                    <div key={vIndex} className="text-center text-freelaw-textDim">
                      {value === "✓" ? (
                        <Check className="w-6 h-6 text-green-400 mx-auto" />
                      ) : value === "—" ? (
                        <span className="text-white/30">—</span>
                      ) : (
                        <span className="text-white">{value}</span>
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Archive Toggle */}
        <div className="text-center mt-20 mb-16">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-2 mx-auto"
          >
            <Lock className="w-3 h-3" />
            {showArchive ? 'Ocultar arquivo' : 'Arquivo'}
          </button>
        </div>

        {/* Archive Plans */}
        <AnimatePresence>
          {showArchive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {/* Backup Plan Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {backupPlans.map((plan, index) => (
                  <button
                    key={plan.name}
                    onClick={() => toggleBackupPlan(index)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedBackupPlan === index
                        ? `${plan.bgColor} text-white shadow-lg scale-105`
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {index + 1}
                    <ChevronDown className={`inline-block ml-2 w-4 h-4 transition-transform ${
                      selectedBackupPlan === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                ))}
              </div>

              {/* Backup Plan Card */}
              <div className="max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                  {selectedBackupPlan !== null && (
                    <motion.div
                      key={selectedBackupPlan}
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="relative overflow-hidden"
                    >
                      <div className="relative bg-white/5 border border-white/20 rounded-2xl p-8">
                        <div className={`inline-block px-4 py-1 rounded-full ${backupPlans[selectedBackupPlan].bgColor} text-white text-sm font-semibold mb-4`}>
                          Plano {backupPlans[selectedBackupPlan].name}
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                          {formatBRL(backupPlans[selectedBackupPlan].price)}
                          <span className="text-xl text-freelaw-textDim">/mês</span>
                        </h3>

                        <p className="text-lg text-freelaw-textDim mb-6">
                          {backupPlans[selectedBackupPlan].description}
                        </p>

                        <div className="space-y-3">
                          {backupPlans[selectedBackupPlan].features.map((feature, fIndex) => (
                            <div
                              key={fIndex}
                              className="flex items-start gap-3"
                            >
                              <div className={`w-6 h-6 rounded-full ${backupPlans[selectedBackupPlan].bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-white">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
