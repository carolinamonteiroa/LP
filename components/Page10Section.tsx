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
      className="h-screen bg-freelaw-bg flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-50" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Se você tem receio da qualidade, queremos te mostrar nossos números
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center relative">
          {/* Left Column - Funnel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* Title */}
            <h3 className="text-lg md:text-xl font-normal text-white/70 text-center mb-6">
              Processo de calibração dos advogados
            </h3>

            {/* Funnel visualization */}
            <div className="relative w-full max-w-xs mx-auto">
              {/* Top - 11.000 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mb-2"
              >
                <div className="text-4xl font-bold text-freelaw-purpleLight">
                  11.000
                </div>
                <div className="text-xs text-white/90 mt-1 font-medium">Advogados cadastrados</div>
              </motion.div>

              {/* Funnel stages */}
              <div className="flex flex-col items-center gap-1.5 mb-2">
                {funnelStages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 + index * 0.4 }}
                    className="relative"
                    style={{ width: stage.width }}
                  >
                    <div className={`h-10 bg-gradient-to-r ${stage.gradient} rounded-lg flex items-center justify-center border-2 border-white/20 ${stage.glow}`}>
                      <span className="text-white font-bold text-xs tracking-wide drop-shadow-lg">{stage.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom - 183 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="text-center mt-2"
              >
                <div className="text-xs text-white/90 mb-1 font-medium">E apenas</div>
                <div className="text-4xl font-bold text-freelaw-purpleLight">
                  183
                </div>
                <div className="text-xs text-white/90 mt-1 font-medium">advogados elaborando peças</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Vertical Divider Line - Between columns */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/40" />

          {/* Right Column - Stats Cards in Triangle Layout */}
          <div className="flex flex-col items-center justify-center gap-3 max-w-md mx-auto">
            {/* Top Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="relative w-48 aspect-square p-4 rounded-xl bg-gradient-to-br from-freelaw-purple/20 to-freelaw-purpleLight/20 border border-freelaw-purpleLight/40 flex flex-col items-center justify-center text-center"
            >
              {(() => {
                const card = bottomCards[0]
                const Icon = card.icon
                return (
                  <>
                    {/* Icon */}
                    <div className="mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-freelaw-purple to-freelaw-purpleLight flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="mb-1">
                      <span className="text-2xl font-bold text-freelaw-purpleLight">
                        {card.number}
                      </span>
                    </div>

                    {/* Label */}
                    <h3 className="text-xs font-bold text-white mb-1 leading-tight">
                      {card.label}
                    </h3>

                    {/* Description */}
                    <p className="text-[10px] text-white/70 leading-tight">
                      {card.description}
                    </p>
                  </>
                )
              })()}
            </motion.div>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-2 gap-3">
              {bottomCards.slice(1).map((card, index) => {
                const Icon = card.icon

                return (
                  <motion.div
                    key={index + 1}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index + 1) * 0.15 }}
                    className="relative w-48 aspect-square p-4 rounded-xl bg-gradient-to-br from-freelaw-purple/20 to-freelaw-purpleLight/20 border border-freelaw-purpleLight/40 flex flex-col items-center justify-center text-center"
                  >
                    {/* Icon */}
                    <div className="mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-freelaw-purple to-freelaw-purpleLight flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="mb-1">
                      <span className="text-2xl font-bold text-freelaw-purpleLight">
                        {card.number}
                      </span>
                    </div>

                    {/* Label */}
                    <h3 className="text-xs font-bold text-white mb-1 leading-tight">
                      {card.label}
                    </h3>

                    {/* Description */}
                    <p className="text-[10px] text-white/70 leading-tight">
                      {card.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
