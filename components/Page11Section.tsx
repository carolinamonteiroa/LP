"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function Page11Section() {
  const highValueActivities = [
    "Reuniões com clientes",
    "Audiências importantes",
    "Estratégia de casos",
    "Captação de clientes"
  ]

  const lowValueActivities = [
    "Elaboração de petições do 0",
    "Acompanhamento processual",
    "Protocolos"
  ]

  return (
    <section
      id="page11"
      className="min-h-screen bg-freelaw-bg flex items-center justify-center px-4 py-20 relative overflow-hidden"
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center italic"
        >
          <span className="text-white">"Não sei se com o meu </span>
          <span className="bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple bg-clip-text text-transparent">
            volume<br />
            compensa delegar..
          </span>
          <span className="text-white">"</span>
        </motion.h2>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          {/* LEFT BLOCK - High Value */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Image */}
            <div className="relative w-80 aspect-square rounded-2xl overflow-hidden mx-auto">
              <Image
                src="/baixo-valor.png"
                alt="Atividades estratégicas"
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent text-center">
              Alto valor
            </h3>

            {/* List */}
            <div className="space-y-4 bg-white/5 border border-green-400/30 rounded-xl p-6">
              {highValueActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{activity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CENTER - Divider Line */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-1 h-[600px] bg-gradient-to-b from-transparent via-freelaw-purpleLight to-transparent opacity-60" />
          </motion.div>

          {/* RIGHT BLOCK - Low Value */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Image */}
            <div className="relative w-80 aspect-square rounded-2xl overflow-hidden mx-auto">
              <Image
                src="/alto-valor.png"
                alt="Tarefas operacionais"
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent text-center">
              Baixo valor agregado
            </h3>

            {/* List */}
            <div className="space-y-4 bg-white/5 border border-red-400/30 rounded-xl p-6">
              {lowValueActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{activity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
