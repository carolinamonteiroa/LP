"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PartyPopper } from "lucide-react"

export function HeroLP() {
  const handleBuyNow = () => {
    const lastSection = document.querySelector('#page12')
    if (lastSection) {
      lastSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSeeHow = () => {
    const nextSection = document.querySelector('#page3')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-freelaw-bg pt-16">
      {/* Purple November Party Badge - Left Side */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          type: "spring",
          stiffness: 200
        }}
        className="absolute left-8 top-32 z-20"
      >
        <motion.div
          animate={{
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-gradient-to-br from-freelaw-purpleLight to-purple-600 rounded-2xl p-4 shadow-2xl border-2 border-purple-400"
        >
          <div className="flex flex-col items-center gap-2">
            <PartyPopper className="w-8 h-8 text-white" />
            <div className="text-center">
              <p className="text-white font-bold text-xs whitespace-nowrap">
                PURPLE
              </p>
              <p className="text-white font-bold text-xs whitespace-nowrap">
                NOVEMBER
              </p>
            </div>
          </div>
        </motion.div>
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
      <div className="absolute inset-0 bg-heroGradientLight opacity-30" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center h-full">
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

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Primary Button */}
              <motion.button
                onClick={handleBuyNow}
                className="px-8 py-4 bg-freelaw-purpleLight text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero comprar agora
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                onClick={handleSeeHow}
                className="px-8 py-4 bg-transparent border-2 border-freelaw-purpleLight text-freelaw-purpleLight font-semibold rounded-xl hover:bg-freelaw-purpleLight/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver como funciona
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
