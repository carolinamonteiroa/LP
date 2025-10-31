"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Zap, TrendingUp } from "lucide-react"

export function Page16Section() {
  const plans = [
    {
      name: "Otimização",
      price: 2090,
      description: "Equilíbrio entre volume, orientação inicial e suporte humanizado",
      features: [
        "5 peças simultâneas | ~20/mês",
        "R$ 105 em média por peça",
        "Adesão: R$ 650"
      ],
      icon: Sparkles,
      gradient: "from-pink-500 to-pink-600",
      glowColor: "rgba(236, 72, 153, 0.5)",
      paymentLink: "https://app.freelaw.work/assinatura-plano?planId=105"
    },
    {
      name: "Escala",
      price: 2590,
      description: "Perfeito para escritórios em crescimento que querem escalar produção",
      features: [
        "10 peças simultâneas | ~40/mês",
        "R$ 65 em média por peça",
        "Adesão: R$ 500"
      ],
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      glowColor: "rgba(249, 115, 22, 0.6)",
      badge: "MAIS POPULAR",
      paymentLink: "https://app.freelaw.work/assinatura-plano?planId=106"
    },
    {
      name: "Corporativo",
      price: 4990,
      description: "Indicado para parceiros estratégicos com alta demanda",
      features: [
        "25 peças simultâneas | ~100/mês",
        "R$ 49 em média por peça",
        "Adesão: Isento"
      ],
      icon: TrendingUp,
      gradient: "from-purple-500 to-purple-600",
      glowColor: "rgba(168, 85, 247, 0.5)",
      paymentLink: "https://app.freelaw.work/assinatura-plano?planId=107"
    }
  ]

  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    }).format(value)
  }

  const handlePlanClick = (plan: typeof plans[0]) => {
    if (plan.paymentLink) {
      window.open(plan.paymentLink, '_blank')
    } else {
      // Fallback: ir para página de cadastro
      window.open('https://app.freelaw.work/contratante/cadastro', '_blank')
    }
  }

  return (
    <section
      id="page16"
      className="min-h-screen bg-gradient-to-br from-[#0B0217] via-[#1B1230] to-[#0B0217] px-4 py-20 relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-semibold text-sm">
              Escolha seu plano ideal
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Dê o primeiro passo para
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              revolucionar seu escritório
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clique no plano escolhido e finalize sua adesão agora mesmo
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <motion.button
                  onClick={() => handlePlanClick(plan)}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-8 overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: `0 0 60px ${plan.glowColor}`
                  }}
                >
                  {/* Badge for popular plan */}
                  {plan.badge && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-6 right-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                    >
                      {plan.badge}
                    </motion.div>
                  )}

                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 mx-auto`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-5xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {formatBRL(plan.price)}
                      </span>
                      <span className="text-gray-400 text-lg">/mês</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + fIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${plan.gradient} text-white font-bold text-lg shadow-lg`}
                  >
                    Escolher {plan.name}
                  </motion.div>

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                  />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-white mb-2">
            O futuro do seu escritório começa agora
          </p>
          <p className="text-gray-400">
            Junte-se aos escritórios que já estão na vanguarda da advocacia moderna
          </p>
        </motion.div>
      </div>
    </section>
  )
}
