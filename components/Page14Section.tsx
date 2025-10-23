"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown, Lock } from "lucide-react"
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight text-white"
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
        <div className="space-y-8 mb-32">
          <AnimatePresence>
            {mainPlans.map((plan, index) => (
              visiblePlans.includes(index) && (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative max-w-2xl mx-auto overflow-hidden"
                >
                  <div className={`relative bg-white/5 border-2 rounded-2xl p-8 ${
                    plan.highlight
                      ? 'border-yellow-500 shadow-glow'
                      : 'border-white/20'
                  }`}>
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full">
                        Mais Popular
                      </div>
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
