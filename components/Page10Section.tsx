"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, TrendingUp } from "lucide-react"

export function Page10Section() {
  const funnelStages = [
    { label: "Teste", width: "100%", gradient: "from-[#6B3C9B] to-[#8554B0]", glow: "shadow-[0_0_30px_rgba(107,60,155,0.7)]" },
    { label: "Curadoria", width: "75%", gradient: "from-[#8554B0] to-[#9F6CC5]", glow: "shadow-[0_0_30px_rgba(133,84,176,0.7)]" },
    { label: "Treinamento", width: "55%", gradient: "from-[#9F6CC5] to-[#A986D1]", glow: "shadow-[0_0_30px_rgba(159,108,197,0.7)]" },
    { label: "Acompanhamento", width: "40%", gradient: "from-[#A986D1] to-[#B9A0DD]", glow: "shadow-[0_0_35px_rgba(169,134,209,0.8)]" }
  ]

  const bottomCards = [
    {
      icon: Users,
      number: "4.60",
      label: "Nota média dos prestadores",
      description: "Avaliados em todas as entregas"
    },
    {
      icon: CheckCircle,
      number: "87%",
      label: "Peças aprovadas de primeira",
      description: "Sem revisão ou substituição"
    },
    {
      icon: TrendingUp,
      number: "4%",
      label: "Das peças são avaliadas",
      description: "Com notas abaixo de 3"
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
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-3 italic text-white">
            &ldquo;Tenho receio da qualidade...&rdquo;
          </h2>
          <p className="text-xl text-freelaw-textDim">
            Os números falam por si
          </p>
        </motion.div>

        {/* Funnel Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-16"
        >
          {/* Funnel visualization */}
          <div className="relative w-full max-w-md">
            {/* Top - 11.000 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-4"
            >
              <div className="text-6xl font-bold text-freelaw-purpleLight">
                11.000
              </div>
              <div className="text-sm text-white/90 mt-1">Advogados cadastrados</div>
            </motion.div>

            {/* Funnel stages */}
            <div className="flex flex-col items-center gap-3 mb-4">
              {funnelStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="relative"
                  style={{ width: stage.width }}
                >
                  <div className={`h-16 bg-gradient-to-r ${stage.gradient} rounded-lg flex items-center justify-center border-2 border-white/20 ${stage.glow}`}>
                    <span className="text-white font-bold text-lg tracking-wide drop-shadow-lg">{stage.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom - 180 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-center mt-4"
            >
              <div className="text-6xl font-bold text-freelaw-purpleLight">
                180
              </div>
              <div className="text-sm text-white/90 mt-1">Elaborando peças</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats Cards - Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bottomCards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-freelaw-purple/20 to-freelaw-purpleLight/20 border border-freelaw-purpleLight/40"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-freelaw-purple to-freelaw-purpleLight flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="text-center mb-2">
                  <span className="text-4xl font-bold text-freelaw-purpleLight">
                    {card.number}
                  </span>
                </div>

                <h3 className="text-center text-sm font-bold text-white mb-2">
                  {card.label}
                </h3>

                <p className="text-center text-xs text-white/70 leading-tight">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
