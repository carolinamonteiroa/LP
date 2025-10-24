"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Check } from "lucide-react"

export function Page8Section() {
  const [selectedStep, setSelectedStep] = useState(0)

  const steps = [
    {
      number: 1,
      title: "Preencha o perfil",
      description: "A peça na sua formatação e com o seu timbrado",
      image: "/plataforma/1.png"
    },
    {
      number: 2,
      title: "Acompanhe suas publicações",
      description: "Cadastre sua OAB",
      image: "/plataforma/2.png"
    },
    {
      number: 3,
      title: "Delegue sua peça",
      description: "Para um advogado ou para nossa IA",
      image: "/plataforma/3.png"
    },
    {
      number: 4,
      title: "Envie as orientações em 5 minutos",
      description: "Pode anexar até áudio",
      image: "/plataforma/4.png"
    },
    {
      number: 5,
      title: "Converse com o advogado parceiro",
      description: "Chat direto e integrado",
      image: "/plataforma/5.png"
    },
    {
      number: 6,
      title: "Solicite revisão ou substituições",
      description: "De forma gratuita",
      image: "/plataforma/6.png"
    },
    {
      number: 7,
      title: "MONTE SUA EQUIPE JURÍDICA REMOTA",
      description: "Escale seu escritório sem contratar",
      image: "/plataforma/7.png"
    }
  ]

  return (
    <section
      id="page8"
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 leading-tight"
        >
          <span className="text-white">Mais tempo para </span>
          <span className="bg-gradient-to-r from-white via-freelaw-purpleLight to-freelaw-purpleLight bg-clip-text text-transparent">
            focar<br />
            no que realmente importa
          </span>
        </motion.h2>

        {/* Timeline - Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-freelaw-purpleLight/30" />
            <div
              className="absolute top-6 left-0 h-0.5 bg-freelaw-purpleLight transition-all duration-500"
              style={{ width: `${(selectedStep / (steps.length - 1)) * 100}%` }}
            />

            {/* Steps */}
            <div className="relative flex justify-between items-start">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedStep(index)}
                  className="flex flex-col items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: `${100 / steps.length}%` }}
                >
                  {/* Circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 relative z-10 ${
                      selectedStep === index
                        ? "bg-freelaw-purpleLight text-white shadow-glow scale-110"
                        : index < selectedStep
                        ? "bg-freelaw-purpleLight/60 text-white"
                        : "bg-white/10 text-freelaw-purpleLight group-hover:bg-freelaw-purple/30"
                    }`}
                  >
                    {index < selectedStep ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>

                  {/* Text */}
                  <div className="text-center max-w-[120px]">
                    <h3
                      className={`text-xs font-bold mb-1 transition-colors ${
                        selectedStep === index
                          ? "text-freelaw-purpleLight"
                          : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[10px] text-freelaw-textDim leading-tight">
                      {step.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Preview - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <div className="relative rounded-2xl overflow-hidden bg-white/5 border-2 border-freelaw-purpleLight/30 shadow-glow">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStep}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative w-full"
                style={{ height: "600px" }}
              >
                <Image
                  src={steps[selectedStep].image}
                  alt={steps[selectedStep].title}
                  fill
                  className="object-contain p-6"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
