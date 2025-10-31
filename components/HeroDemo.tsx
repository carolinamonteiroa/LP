"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroDemo() {
  return (
    <section id="hero" className="relative h-screen bg-freelaw-bg flex items-center overflow-hidden pt-16">
      {/* Purple November Gift Bow - Left Side */}
      <motion.div
        initial={{ x: -100, opacity: 0, rotate: -10 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-8 top-1/4 z-20"
      >
        <div className="relative w-32 h-32">
          {/* Gift Bow */}
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            {/* Left loop */}
            <ellipse cx="60" cy="80" rx="35" ry="45" fill="#A986D1" transform="rotate(-20 60 80)" />
            {/* Right loop */}
            <ellipse cx="140" cy="80" rx="35" ry="45" fill="#6B3C9B" transform="rotate(20 140 80)" />
            {/* Center knot */}
            <circle cx="100" cy="80" r="25" fill="#8B5CB8" />
            {/* Left ribbon tail */}
            <path d="M 85 100 L 50 160 L 60 165 L 95 110 Z" fill="#A986D1" />
            {/* Right ribbon tail */}
            <path d="M 115 100 L 150 160 L 140 165 L 105 110 Z" fill="#6B3C9B" />
          </svg>

          {/* Purple November Text */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <p className="text-freelaw-purpleLight font-bold text-xs text-center bg-freelaw-bg/90 px-3 py-1 rounded-full border-2 border-freelaw-purpleLight">
              PURPLE NOVEMBER
            </p>
          </div>
        </div>
      </motion.div>

      {/* Background Image - Blurred */}
      <div className="absolute inset-0">
        <Image
          src="/hero-advogado-capa-novo.jpg"
          alt="Advogado trabalhando com cliente"
          fill
          className="object-cover blur-sm opacity-20"
          priority
          quality={100}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-freelaw-bg/80" />
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-30" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center">
          {/* Text Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 max-w-4xl text-center"
          >
            {/* Main Headline */}
            <motion.h1
              className="font-bold tracking-tight leading-[1.3] text-4xl sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-white">
                Transforme seu escritório em uma{" "}
              </span>
              <span className="bg-gradient-to-r from-white via-freelaw-purpleLight to-brand-secondary bg-clip-text text-transparent">
                operação jurídica escalável
              </span>
              <span className="text-white">
                , sem contratar mais advogados.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-lg md:text-xl text-freelaw-textDim mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A Freelaw conecta seu escritório a advogados da área e tecnologia jurídica para elaborar documentos personalizados com equilíbrio entre precisão e agilidade.
              <br /><br />
              Peças artesanais quando o caso exige profundidade. Inteligência artificial quando o tempo é essencial.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
