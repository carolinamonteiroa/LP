"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Page9Section() {
  return (
    <section
      id="page9"
      className="min-h-screen bg-freelaw-bg flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-40" />

      {/* Image with transparency - Right side */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-[15%] -translate-y-1/2 w-1/2 h-full"
      >
        <div className="relative w-full h-full opacity-20">
          <Image
            src="/idoso-receio.png"
            alt="Advogado pensativo"
            fill
            className="object-cover object-left"
          />
        </div>
      </motion.div>

      {/* Gradient overlay from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-freelaw-bg via-freelaw-bg/80 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Question */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl text-freelaw-textDim italic"
              >
                &ldquo;Estou com receio...&rdquo;
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">Como saber se a </span>
                <span className="bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple bg-clip-text text-transparent">
                  Freelaw
                </span>
                <br />
                <span className="text-white">é para </span>
                <span className="bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple bg-clip-text text-transparent">
                  mim?
                </span>
              </motion.h2>
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 w-32 bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple rounded-full"
              style={{ transformOrigin: "left" }}
            />

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-freelaw-textDim leading-relaxed max-w-xl"
            >
              É natural ter dúvidas antes de delegar algo tão importante quanto o seu trabalho jurídico.
            </motion.p>
          </motion.div>

          {/* Right Column - Empty space for image (image is in background) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
