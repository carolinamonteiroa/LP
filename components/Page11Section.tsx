"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, XCircle } from "lucide-react"
import { NextSectionArrow } from "./NextSectionArrow"

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
      className="h-screen bg-freelaw-bg flex items-center justify-center px-4 relative overflow-hidden"
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center italic text-white"
        >
          &ldquo;Não sei se com o meu volume<br />
          compensa delegar..&rdquo;
        </motion.h2>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-start">
          {/* LEFT BLOCK - High Value */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Image */}
            <div className="relative w-56 aspect-square rounded-2xl overflow-hidden mx-auto">
              <Image
                src="/baixo-valor.png"
                alt="Atividades estratégicas"
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white text-center">
              Alto valor
            </h3>

            {/* List */}
            <div className="space-y-3 bg-green-500/10 border border-green-400/40 rounded-xl p-4">
              {highValueActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">{activity}</span>
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
            <div className="w-1 h-[450px] bg-gradient-to-b from-transparent via-white to-transparent opacity-40" />
          </motion.div>

          {/* RIGHT BLOCK - Low Value */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Image */}
            <div className="relative w-56 aspect-square rounded-2xl overflow-hidden mx-auto">
              <Image
                src="/advogado-baixo-valor.jpg"
                alt="Tarefas operacionais"
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-red-500 text-center">
              Baixo valor agregado
            </h3>

            {/* List */}
            <div className="space-y-3 bg-red-500/10 border-2 border-red-500/50 rounded-xl p-4 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              {lowValueActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-base line-through decoration-red-500/50">{activity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <NextSectionArrow targetId="page13" />
      </div>
    </section>
  )
}
