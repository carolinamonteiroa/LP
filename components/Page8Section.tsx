"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Check } from "lucide-react"

export function Page8Section() {
  const [selectedStep, setSelectedStep] = useState(0)
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false)
  const [showRevisionInfo, setShowRevisionInfo] = useState(false)

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
          className="text-4xl md:text-6xl lg:text-6xl font-bold text-center mb-16 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-freelaw-purpleLight to-freelaw-purpleLight bg-clip-text text-transparent">
            Delegue em 5 minutos
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
                  onClick={() => {
                    setSelectedStep(index)
                    setShowDeliveryInfo(false)
                    setShowRevisionInfo(false)
                  }}
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
            {/* Info Buttons - Floating on top of image */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
              {selectedStep === 3 && (
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
                  className="px-6 py-3 bg-freelaw-purpleLight hover:bg-freelaw-purple text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-glow backdrop-blur-sm"
                >
                  {showDeliveryInfo ? 'Ocultar Prazos de Entrega' : 'Ver Prazos de Entrega'}
                </motion.button>
              )}

              {selectedStep === 5 && (
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onClick={() => setShowRevisionInfo(!showRevisionInfo)}
                  className="px-6 py-3 bg-freelaw-purpleLight hover:bg-freelaw-purple text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-glow backdrop-blur-sm"
                >
                  {showRevisionInfo ? 'Ocultar Prazos' : 'Ver Prazos de Revisão e Substituição'}
                </motion.button>
              )}
            </div>

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

          {/* Delivery Info Modal */}
          <AnimatePresence>
            {showDeliveryInfo && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowDeliveryInfo(false)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                />

                {/* Modal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  onClick={() => setShowDeliveryInfo(false)}
                >
                  <div
                    className="bg-freelaw-bg border-2 border-freelaw-purpleLight/40 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setShowDeliveryInfo(false)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      ✕
                    </button>

                    <h3 className="text-3xl font-bold text-white mb-6">📅 Prazos de Entrega</h3>

                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-6 border border-freelaw-purpleLight/30">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-freelaw-purple to-freelaw-purpleLight flex items-center justify-center text-white font-bold text-xl">
                            ✓
                          </div>
                          <h4 className="text-xl font-semibold text-white">Prazo Padrão</h4>
                        </div>
                        <p className="text-freelaw-textDim text-lg ml-15">
                          <span className="text-2xl font-bold text-freelaw-purpleLight">5 dias corridos</span> para entrega da peça
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-xl p-6 border border-pink-500/30">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                            ⚡
                          </div>
                          <h4 className="text-xl font-semibold text-white">Entrega Acelerada</h4>
                        </div>
                        <div className="ml-15 space-y-3">
                          <p className="text-white text-lg">
                            <span className="font-bold text-pink-400 text-xl">3 dias corridos</span> - Valor adicional*
                          </p>
                          <p className="text-white text-lg">
                            <span className="font-bold text-yellow-400 text-xl">2 dias corridos</span> - Valor adicional*
                          </p>
                          <p className="text-sm text-freelaw-textDim italic mt-4 bg-white/5 p-3 rounded-lg">
                            * O valor da aceleração depende do plano contratado
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Revision Info Modal */}
          <AnimatePresence>
            {showRevisionInfo && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowRevisionInfo(false)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                />

                {/* Modal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  onClick={() => setShowRevisionInfo(false)}
                >
                  <div
                    className="bg-freelaw-bg border-2 border-freelaw-purpleLight/40 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setShowRevisionInfo(false)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      ✕
                    </button>

                    <h3 className="text-3xl font-bold text-white mb-6">🔄 Prazos de Revisão e Substituição</h3>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-freelaw-purple/10 rounded-xl p-6 border border-freelaw-purpleLight/30">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-freelaw-purple to-freelaw-purpleLight flex items-center justify-center text-white font-bold text-xl">
                            ✏️
                          </div>
                          <h4 className="text-xl font-semibold text-white">Revisão</h4>
                        </div>
                        <p className="text-freelaw-textDim text-lg mb-2">
                          Prazo: <span className="text-2xl font-bold text-freelaw-purpleLight">2 dias corridos</span>
                        </p>
                        <p className="text-sm text-freelaw-textDim">
                          Para ajustes e correções na peça
                        </p>
                      </div>

                      <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-500/30">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                            🔄
                          </div>
                          <h4 className="text-xl font-semibold text-white">Substituição</h4>
                        </div>
                        <p className="text-freelaw-textDim text-lg mb-2">
                          Prazo: <span className="text-2xl font-bold text-pink-400">3 dias corridos</span>
                        </p>
                        <p className="text-sm text-freelaw-textDim">
                          Para troca completa do advogado
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-freelaw-purple/10 to-freelaw-purpleLight/10 rounded-xl p-4 border border-freelaw-purpleLight/30">
                      <p className="text-lg text-white text-center">
                        ✓ Ambos os serviços são <span className="font-bold text-freelaw-purpleLight">totalmente gratuitos</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
