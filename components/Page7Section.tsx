"use client"

import { motion } from "framer-motion"

export function Page7Section() {
  const documentTypes = [
    "Petições iniciais e recursos",
    "Petições intercorrentes",
    "Contratos",
    "Manifestações",
    "Análises de caso e pareceres"
  ]

  const lawAreas = [
    { name: "Previdenciário", highlight: true },
    { name: "Cível", highlight: true },
    { name: "Trabalhista", highlight: true },
    { name: "Empresarial", highlight: false },
    { name: "Penal", highlight: false },
    { name: "Tributário", highlight: false },
    { name: "Administrativo", highlight: false },
    { name: "Constitucional", highlight: false },
    { name: "Ambiental e Urbanístico", highlight: false },
    { name: "Internacional", highlight: false },
    { name: "Digital e da Inovação", highlight: false },
    { name: "Consumidor", highlight: false },
    { name: "Família", highlight: false },
    { name: "Imobiliário", highlight: false }
  ]

  return (
    <section
      id="page7"
      className="h-screen bg-freelaw-bg flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-50" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="relative w-[800px] h-[800px]">
          <img
            src="/Logotipo/Ícone-colorido.png"
            alt="Freelaw"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16"
        >
          Aqui você pode delegar...
        </motion.h2>

        {/* Qualquer documento jurídico Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-freelaw-purpleLight text-center mb-6">
            Qualquer documento jurídico
          </h3>

          {/* Scrolling documents - Left to Right */}
          <div className="relative overflow-hidden py-4 border-y-2 border-freelaw-purpleLight/40 bg-white/5">
            <motion.div
              className="flex items-center gap-8 whitespace-nowrap"
              animate={{
                x: [0, -1500]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear"
                }
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...documentTypes, ...documentTypes, ...documentTypes].map((doc, index) => (
                <div key={index} className="inline-flex items-center gap-8">
                  <span className="text-xl text-white font-medium">{doc}</span>
                  <span className="text-freelaw-purpleLight text-2xl">|</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Diversas áreas do direito Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-freelaw-purpleLight text-center mb-6">
            Diversas áreas do direito
          </h3>

          {/* Scrolling areas - Right to Left */}
          <div className="relative overflow-hidden py-4 border-y-2 border-freelaw-purpleLight/40 bg-white/5">
            <motion.div
              className="flex items-center gap-8 whitespace-nowrap"
              animate={{
                x: [-1500, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 80,
                  ease: "linear"
                }
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...lawAreas, ...lawAreas, ...lawAreas].map((area, index) => (
                <div key={index} className="inline-flex items-center gap-8">
                  <span
                    className={`text-xl font-medium ${
                      area.highlight ? "text-freelaw-purpleLight" : "text-white"
                    }`}
                  >
                    {area.name}
                  </span>
                  <span className="text-freelaw-purpleLight text-2xl">|</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
