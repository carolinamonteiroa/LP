"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, FileText, Users, Star } from "lucide-react"

export function Page2Section() {
  const stats = [
    {
      icon: Calendar,
      number: "7+",
      title: "Anos de mercado",
      description: "pioneiros em legaltech jurídica no Brasil"
    },
    {
      icon: FileText,
      number: "100k+",
      title: "Documentos elaborados",
      description: "petições, contratos, pareceres com código único"
    },
    {
      icon: Users,
      number: "15k+",
      title: "Advogados conectados",
      description: "a nossa rede mais de 3k ao ano"
    },
    {
      icon: Star,
      number: "4.1",
      title: "Avaliação dos prestadores",
      description: "avaliação feita pelos contratantes"
    }
  ]

  return (
    <section
      id="page2"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-freelaw-bg py-20"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-50" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Criar uma advocacia mais<br />
            humana, justa e eficiente
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-freelaw-textDim max-w-3xl mx-auto"
          >
            Por trás dos números, tem propósito: que move a Freelaw todos os dias.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
          {/* Main Content - Statistics (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-2xl mx-auto lg:mx-0"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-freelaw-purple/20 flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-freelaw-purpleLight" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-freelaw-purpleLight mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {stat.title}
                  </div>
                  <div className="text-sm text-freelaw-textDim">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Side Detail - Testimonial Card (Smaller) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-64 flex-shrink-0"
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-freelaw-purple/15 to-brand-secondary/15 p-0.5">
              <div className="bg-freelaw-bg rounded-xl p-4">
                {/* Photo */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-3">
                  <Image
                    src="/testimonial-carolina.jpg"
                    alt="Carolina Monteiro"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name and Title */}
                <h3 className="text-sm font-bold text-white mb-2">
                  Carolina Monteiro
                </h3>
                <p className="text-freelaw-textDim text-xs leading-relaxed">
                  Carolina Monteiro, 28 anos, formada em Direito, ex corretora de imóveis e sócia da Freelaw
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
