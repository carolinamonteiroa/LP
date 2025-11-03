"use client"

import { motion } from "framer-motion"
import { Check, MessageCircle } from "lucide-react"

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
      bgColor: "bg-pink-500",
      textColor: "text-pink-500",
      paymentLink: "https://app.freelaw.work/assinatura-plano?planId=105"
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
      highlight: true,
      paymentLink: "https://app.freelaw.work/assinatura-plano?planId=106"
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
      textColor: "text-purple-500",
      paymentLink: "https://app.freelaw.work/assinatura-plano?planId=107"
    }
  ]

  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
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

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=553140404506&text=Ol%C3%A1%2C%20quero%20fechar%20com%20a%20Freelaw&type=phone_number&app_absent=0&utm_source=Wpp-Amanda&utm_medium=veio-do-site&utm_campaign=wpp-Amanda', '_blank')
  }

  return (
    <section
      id="page16"
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
          Dê o primeiro passo para
          <br />
          revolucionar seu escritório
        </motion.h2>

        {/* Plan Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <motion.button
                onClick={() => handlePlanClick(plan)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full relative bg-white/5 border-2 rounded-2xl p-6 overflow-hidden h-full flex flex-col cursor-pointer ${
                  plan.highlight
                    ? 'border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.6)]'
                    : 'border-white/20'
                }`}
              >
                {plan.highlight && (
                  <>
                    {/* Fire Effect Border */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
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
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto">
            Para fechamento com a condição especial da Purple November, clique no símbolo do WhatsApp que em menos de 5 min nosso consultor vai entrar em contato com você!
          </p>

          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com Consultor no WhatsApp
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
