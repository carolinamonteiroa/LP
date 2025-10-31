"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

interface Case {
  id: number
  name: string
  photo: string
  testimonial: string
  angle: number
}

export function Page13Section() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)

  const cases: Case[] = [
    {
      id: 1,
      name: "Dra. Veronice",
      photo: "/cases/veronice.jpg",
      testimonial: "Estagiário dá muito retrabalho, eu tinha que revisar tudo. Direito de família é muito artesanal, a gente quase desenha as peças. Eu tinha muito medo da qualidade. Hoje eu tenho mais tempo para estudar para o MBA e para me dedicar aos meus clientes. A Freelaw me ajudou exatamente naquilo que eu precisava, com o valor que cabe no meu bolso.",
      angle: 0
    },
    {
      id: 2,
      name: "Dra. Ítara",
      photo: "/cases/itara.jpg",
      testimonial: "A Freelaw foi um remédio para a minha advocacia. Eu consegui economizar mais de 10 horas na minha semana delegando as peças.",
      angle: 45
    },
    {
      id: 3,
      name: "Dr. Jefferson",
      photo: "/cases/jefferson.jpg",
      testimonial: "Antes eu tinha uma folha de pagamento super extensa. Hoje eu delego toda a operação para a Freelaw. Sou cliente há mais de três anos e consegui sair de uma sala menor para uma maior no centro de Santa Catarina. Minha advocacia mudou de patamar.",
      angle: 90
    },
    {
      id: 4,
      name: "Dra. Verônica Menezes",
      photo: "/cases/veronica-menezes.avif",
      testimonial: "A Freelaw me ajudou na transição do CLT para o empreendedorismo. Eu ganho experiência, aumento meu conhecimento na prática e ainda tenho liberdade geográfica, que é prioridade pra mim.",
      angle: 135
    },
    {
      id: 5,
      name: "Rafael Torres",
      photo: "/cases/rafael-torres.avif",
      testimonial: "A Freelaw me permitiu atender mais clientes sem precisar contratar novos advogados. Uma solução incrível!",
      angle: 180
    },
    {
      id: 6,
      name: "Caio Reis Martins",
      photo: "/cases/caio-reis.avif",
      testimonial: "Conheci a Freelaw ainda no começo. Sempre se mostrou proativa e buscando crescimento. A empresa trouxe inovação e flexibilidade para o mercado jurídico.",
      angle: 225
    },
    {
      id: 7,
      name: "Heitor de Souza",
      photo: "/cases/heitor-souza.avif",
      testimonial: "Meu escritório ganhou agilidade e eficiência. Delegar petições nunca foi tão simples e seguro.",
      angle: 270
    },
    {
      id: 8,
      name: "Ana Beatriz Lima",
      photo: "/cases/ana-beatriz.avif",
      testimonial: "Sempre tive receio de delegar petições, mas com a Freelaw encontrei advogados qualificados e confiáveis.",
      angle: 315
    }
  ]

  return (
    <section
      id="page13"
      className="h-screen bg-gradient-to-br from-black via-[#0a0010] to-black flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Strong radial glow from center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#A986D1_0%,_#6B3C9B_30%,_transparent_60%)] opacity-40" />

      {/* Secondary glow layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(169,134,209,0.3)_0%,_transparent_50%)]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, #A986D1 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container relative z-10 mx-auto max-w-7xl h-full flex flex-col items-center justify-center gap-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 flex-shrink-0"
        >
          <span className="bg-gradient-to-r from-white via-freelaw-purpleLight to-white bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(169,134,209,0.8)]">
            Alguns dos nossos 5 mil clientes dizem..
          </span>
        </motion.h2>

        {/* Orbital Animation Container */}
        <div className="relative w-full max-w-2xl h-[500px] flex items-center justify-center flex-shrink-0">
          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute z-20 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          >
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-freelaw-purple to-freelaw-purpleLight backdrop-blur-sm border-4 border-white/30 shadow-[0_0_80px_rgba(169,134,209,1),0_0_120px_rgba(107,60,155,0.6)] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
              <Image
                src="/Logotipo/Ícone-colorido.png"
                alt="Freelaw"
                fill
                className="object-contain p-5 relative z-10"
              />
            </div>
          </motion.div>

          {/* Orbiting Cases */}
          {cases.map((clientCase, index) => {
            const radius = 180 // Distance from center

            // Function to calculate positions for full orbit
            const getOrbitPath = (startAngle: number) => {
              const positions = []
              // Create 360 positions for smooth animation (one per degree)
              for (let i = 0; i <= 360; i++) {
                const angle = startAngle + i // Clockwise rotation
                const angleInRadians = (angle * Math.PI) / 180
                const x = Math.cos(angleInRadians) * radius
                const y = Math.sin(angleInRadians) * radius
                positions.push({ x, y })
              }
              return positions
            }

            const orbitPath = getOrbitPath(clientCase.angle)
            const xValues = orbitPath.map(p => p.x)
            const yValues = orbitPath.map(p => p.y)

            return (
              <motion.div
                key={clientCase.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  x: xValues,
                  y: yValues
                }}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.1 },
                  scale: { duration: 0.6, delay: index * 0.1 },
                  x: {
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  y: {
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="absolute z-10 cursor-pointer"
                onClick={() => setSelectedCase(clientCase)}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-freelaw-purpleLight shadow-[0_0_25px_rgba(169,134,209,0.8),0_0_40px_rgba(107,60,155,0.4)] hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,1),0_0_60px_rgba(169,134,209,0.8)] transition-all duration-300">
                  <Image
                    src={clientCase.photo}
                    alt={clientCase.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-white/70 text-sm md:text-base italic flex-shrink-0"
        >
          Clique na foto para ver o depoimento
        </motion.p>
      </div>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-2xl w-full bg-gradient-to-br from-freelaw-bg to-freelaw-purple/20 border-2 border-freelaw-purple/50 rounded-2xl p-8 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Client Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-freelaw-purple shadow-glow">
                  <Image
                    src={selectedCase.photo}
                    alt={selectedCase.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Client Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple bg-clip-text text-transparent">
                {selectedCase.name}
              </h3>

              {/* Testimonial */}
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-6xl text-freelaw-purple/30 font-serif">&ldquo;</div>
                <p className="text-white text-lg md:text-xl leading-relaxed italic px-6">
                  {selectedCase.testimonial}
                </p>
                <div className="absolute -bottom-8 -right-2 text-6xl text-freelaw-purple/30 font-serif">&rdquo;</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
