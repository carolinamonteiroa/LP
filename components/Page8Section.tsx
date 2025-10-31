"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Check, X, UserPlus } from "lucide-react"

export function Page8Section() {
  const [selectedStep, setSelectedStep] = useState(0)
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false)
  const [showRevisionInfo, setShowRevisionInfo] = useState(false)
  const [showTeamInfo, setShowTeamInfo] = useState(false)
  const [approvedMembers, setApprovedMembers] = useState<number[]>([]) // Aprovados
  const [rejectedMembers, setRejectedMembers] = useState<number[]>([]) // Excluídos

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

  const lawyers = [
    { id: 1, name: "Ana Silva", specialty: "Cível" },
    { id: 2, name: "João Santos", specialty: "Trabalhista" },
    { id: 3, name: "Maria Costa", specialty: "Previdenciário" },
    { id: 4, name: "Pedro Lima", specialty: "Tributário" }
  ]

  const approveMember = (id: number) => {
    setApprovedMembers(prev => [...prev, id])
    setRejectedMembers(prev => prev.filter(memberId => memberId !== id))
  }

  const rejectMember = (id: number) => {
    setRejectedMembers(prev => [...prev, id])
    setApprovedMembers(prev => prev.filter(memberId => memberId !== id))
  }

  const resetMember = (id: number) => {
    setApprovedMembers(prev => prev.filter(memberId => memberId !== id))
    setRejectedMembers(prev => prev.filter(memberId => memberId !== id))
  }

  // SVG Stick Figure Component
  const StickFigure = ({ color = "#A986D1" }: { color?: string }) => (
    <svg width="50" height="80" viewBox="0 0 50 80" fill="none">
      {/* Head */}
      <circle cx="25" cy="12" r="8" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Body */}
      <line x1="25" y1="20" x2="25" y2="45" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Arms */}
      <line x1="25" y1="28" x2="15" y2="38" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="25" y1="28" x2="35" y2="38" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Legs */}
      <line x1="25" y1="45" x2="18" y2="65" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="25" y1="45" x2="32" y2="65" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )

  return (
    <section
      id="page8"
      className="h-screen bg-freelaw-bg flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-50" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight"
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
          className="mb-8"
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
                    setShowTeamInfo(false)
                  }}
                  className="flex flex-col items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: `${100 / steps.length}%` }}
                >
                  {/* Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 relative z-10 ${
                      selectedStep === index
                        ? "bg-freelaw-purpleLight text-white shadow-glow scale-110"
                        : index < selectedStep
                        ? "bg-freelaw-purpleLight/60 text-white"
                        : "bg-white/10 text-freelaw-purpleLight group-hover:bg-freelaw-purple/30"
                    }`}
                  >
                    {index < selectedStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>

                  {/* Text */}
                  <div className="text-center max-w-[100px]">
                    <h3
                      className={`text-[11px] font-bold mb-1 transition-colors leading-tight ${
                        selectedStep === index
                          ? "text-freelaw-purpleLight"
                          : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[9px] text-freelaw-textDim leading-tight">
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

              {selectedStep === 6 && (
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    scale: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(169,134,209,0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  exit={{ opacity: 0, y: -10 }}
                  onClick={() => setShowTeamInfo(!showTeamInfo)}
                  className="px-6 py-3 bg-gradient-to-r from-freelaw-purple to-freelaw-purpleLight hover:from-freelaw-purpleLight hover:to-freelaw-purple text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-glow backdrop-blur-sm"
                >
                  {showTeamInfo ? 'Ocultar' : '✨ Ver como funciona ✨'}
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
                style={{ height: "450px" }}
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

          {/* Team Info Modal */}
          <AnimatePresence>
            {showTeamInfo && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowTeamInfo(false)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                />

                {/* Modal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  onClick={() => setShowTeamInfo(false)}
                >
                  <div
                    className="bg-freelaw-bg border-2 border-freelaw-purpleLight/40 rounded-2xl p-8 max-w-5xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setShowTeamInfo(false)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                    >
                      ✕
                    </button>

                    <h3 className="text-3xl font-bold text-white mb-4 text-center">👥 Monte sua Equipe Remota</h3>

                    <div className="bg-gradient-to-r from-freelaw-purple/10 to-freelaw-purpleLight/10 rounded-xl p-4 border border-freelaw-purpleLight/30 mb-6">
                      <p className="text-lg text-white leading-relaxed text-center">
                        Selecione os seus advogados favoritos e coloque na sua equipe
                      </p>
                    </div>

                    {/* Layout: 3 Colunas */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Advogados Disponíveis */}
                      <div className="bg-white/5 rounded-xl p-6 border border-freelaw-purpleLight/30">
                        <h4 className="text-xl font-semibold text-freelaw-purpleLight mb-4 text-center">Disponíveis</h4>
                        <div className="space-y-3 min-h-[300px]">
                          {lawyers.map((lawyer) => {
                            const isApproved = approvedMembers.includes(lawyer.id)
                            const isRejected = rejectedMembers.includes(lawyer.id)

                            if (isApproved || isRejected) return null

                            return (
                              <motion.div
                                key={lawyer.id}
                                layout
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="bg-freelaw-purple/20 rounded-lg p-3 border border-freelaw-purpleLight/40"
                              >
                                {/* Stick Figure */}
                                <motion.div
                                  animate={{
                                    rotate: [0, -5, 5, -5, 5, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                  }}
                                  className="flex justify-center mb-2"
                                >
                                  <StickFigure color="#A986D1" />
                                </motion.div>

                                {/* Info */}
                                <div className="text-center mb-3">
                                  <p className="text-sm font-semibold text-white">{lawyer.name}</p>
                                  <p className="text-xs text-freelaw-textDim">{lawyer.specialty}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 justify-center">
                                  <motion.button
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => approveMember(lawyer.id)}
                                    className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-colors shadow-lg"
                                  >
                                    <Check className="w-5 h-5" />
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.2, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => rejectMember(lawyer.id)}
                                    className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors shadow-lg"
                                  >
                                    <X className="w-5 h-5" />
                                  </motion.button>
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Aprovados - Verde */}
                      <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border-2 border-green-500/40">
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <Check className="w-6 h-6 text-green-400" />
                          <h4 className="text-xl font-semibold text-white">Aprovados ({approvedMembers.length})</h4>
                        </div>

                        <div className="space-y-3 min-h-[300px]">
                          {approvedMembers.length > 0 ? (
                            lawyers.filter(l => approvedMembers.includes(l.id)).map((lawyer) => (
                              <motion.div
                                key={lawyer.id}
                                layout
                                initial={{ x: -200, opacity: 0, scale: 0.8 }}
                                animate={{
                                  x: 0,
                                  opacity: 1,
                                  scale: 1,
                                }}
                                exit={{
                                  x: 200,
                                  opacity: 0,
                                  scale: 0.5,
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 100,
                                  damping: 15,
                                }}
                                className="bg-green-500/20 rounded-lg p-3 border-2 border-green-500 relative overflow-hidden"
                              >
                                {/* Success Badge */}
                                <motion.div
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center"
                                >
                                  <Check className="w-4 h-4 text-white" />
                                </motion.div>

                                {/* Stick Figure */}
                                <motion.div
                                  animate={{
                                    y: [0, -5, 0],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                  className="flex justify-center mb-2"
                                >
                                  <StickFigure color="#10b981" />
                                </motion.div>

                                {/* Info */}
                                <div className="text-center mb-3">
                                  <p className="text-sm font-semibold text-white">{lawyer.name}</p>
                                  <p className="text-xs text-green-300">{lawyer.specialty}</p>
                                </div>

                                {/* Reset Button */}
                                <div className="flex justify-center">
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => resetMember(lawyer.id)}
                                    className="text-xs text-white/70 hover:text-white underline"
                                  >
                                    Remover
                                  </motion.button>
                                </div>
                              </motion.div>
                            ))
                          ) : (
                            <div className="h-full flex items-center justify-center">
                              <p className="text-freelaw-textDim text-center text-sm">
                                Clique em <span className="text-green-400 font-bold">✓</span> para aprovar
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Excluídos - Vermelho */}
                      <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border-2 border-red-500/40">
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <X className="w-6 h-6 text-red-400" />
                          <h4 className="text-xl font-semibold text-white">Excluídos ({rejectedMembers.length})</h4>
                        </div>

                        <div className="space-y-3 min-h-[300px]">
                          {rejectedMembers.length > 0 ? (
                            lawyers.filter(l => rejectedMembers.includes(l.id)).map((lawyer) => (
                              <motion.div
                                key={lawyer.id}
                                layout
                                initial={{ x: 200, opacity: 0, scale: 0.8, rotate: 45 }}
                                animate={{
                                  x: 0,
                                  opacity: 1,
                                  scale: 1,
                                  rotate: 0
                                }}
                                exit={{
                                  x: -200,
                                  opacity: 0,
                                  scale: 0.5,
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 100,
                                  damping: 15,
                                }}
                                className="bg-red-500/20 rounded-lg p-3 border-2 border-red-500 relative overflow-hidden opacity-70"
                              >
                                {/* Reject Badge */}
                                <motion.div
                                  initial={{ scale: 0, rotate: 180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-red-500 flex items-center justify-center"
                                >
                                  <X className="w-4 h-4 text-white" />
                                </motion.div>

                                {/* Stick Figure */}
                                <motion.div
                                  animate={{
                                    rotate: [0, -10, 10, -10, 10, 0],
                                  }}
                                  transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatDelay: 5
                                  }}
                                  className="flex justify-center mb-2 grayscale"
                                >
                                  <StickFigure color="#ef4444" />
                                </motion.div>

                                {/* Info */}
                                <div className="text-center mb-3">
                                  <p className="text-sm font-semibold text-white line-through">{lawyer.name}</p>
                                  <p className="text-xs text-red-300">{lawyer.specialty}</p>
                                </div>

                                {/* Reset Button */}
                                <div className="flex justify-center">
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => resetMember(lawyer.id)}
                                    className="text-xs text-white/70 hover:text-white underline"
                                  >
                                    Restaurar
                                  </motion.button>
                                </div>
                              </motion.div>
                            ))
                          ) : (
                            <div className="h-full flex items-center justify-center">
                              <p className="text-freelaw-textDim text-center text-sm">
                                Clique em <span className="text-red-400 font-bold">✗</span> para excluir
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
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
