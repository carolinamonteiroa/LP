"use client"

import { motion } from "framer-motion"
import { Calendar, FileText, Users, Radio, Mail } from "lucide-react"

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
      number: "150k+",
      title: "Documentos elaborados",
      description: "petições, contratos, pareceres com código único"
    },
    {
      icon: Users,
      number: "+ de 10k",
      title: "Advogados conectados",
      description: "a nossa rede mais de 3k ao ano"
    },
    {
      icon: Radio,
      number: "100k",
      title: "Ouvintes no podcast",
      description: "(maior podcast do Brasil sobre tecnologia e inovação)",
      link: "https://www.youtube.com/@Freelaw"
    },
    {
      icon: Mail,
      number: "",
      title: "Newsletter semanal",
      description: "(Gratuita)",
      link: "https://freelaw.beehiiv.com/?utm_source=linktree"
    }
  ]

  return (
    <section
      id="page2"
      className="h-screen bg-freelaw-bg flex items-center justify-center relative overflow-hidden"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Foi da dor da advocacia que surgiu uma nova forma de trabalhar:{" "}
            <span className="text-freelaw-purpleLight">a Freelaw</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-freelaw-textDim max-w-3xl mx-auto"
          >
            Nosso propósito é criar uma advocacia mais humana, justa e eficiente.
          </motion.p>
        </div>

        {/* Content Layout - Statistics Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
                {stat.number && (
                  <div className="text-4xl md:text-5xl font-bold text-freelaw-purpleLight mb-2">
                    {stat.number}
                  </div>
                )}
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.title}
                </div>
                {stat.description && (
                  <div className="text-sm text-freelaw-textDim mb-2">
                    {stat.description}
                  </div>
                )}
                {stat.link && (
                  <a
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-freelaw-purpleLight hover:text-white transition-colors underline"
                  >
                    clique aqui para conhecer
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
