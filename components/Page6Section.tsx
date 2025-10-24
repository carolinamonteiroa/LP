"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Briefcase, Users, TrendingUp, DollarSign, Heart } from "lucide-react"

export function Page6Section() {
  const [visibleCount, setVisibleCount] = useState(0)

  const skills = [
    {
      icon: Briefcase,
      text: "É preciso ser bom empresário",
      angle: 0 // top
    },
    {
      icon: Users,
      text: "É preciso ser bom gestor e líder",
      angle: 72 // 360/5 = 72 degrees apart
    },
    {
      icon: TrendingUp,
      text: "É preciso ser bom de marketing",
      angle: 144
    },
    {
      icon: DollarSign,
      text: "É preciso ser bom em vendas",
      angle: 216
    },
    {
      icon: Heart,
      text: "É preciso ser bom em experiência do cliente",
      angle: 288
    }
  ]

  // Calculate position on a circle
  const getCirclePosition = (angle: number, radius: number) => {
    const radian = (angle - 90) * (Math.PI / 180) // -90 to start from top
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    }
  }

  const radius = 200 // Distance from center

  return (
    <section
      id="page6"
      className="min-h-screen bg-gradient-to-b from-freelaw-bg via-[#2a1f3d] to-freelaw-bg flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-30" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-white"
        >
          <span className="relative inline-block">
            Não basta
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-freelaw-purple to-freelaw-purpleLight"
            />
          </span> ser apenas &ldquo;bom advogado&rdquo;
        </motion.h2>

        {/* Central Interactive Circle */}
        <div className="relative flex items-center justify-center min-h-[700px]">
          {/* Central Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute z-20 cursor-pointer"
            onClick={() => {
              if (visibleCount < skills.length) {
                setVisibleCount(visibleCount + 1)
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-freelaw-purple to-freelaw-purpleLight opacity-50 blur-xl animate-pulse" />

              {/* Logo container */}
              <div className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-sm border-4 border-freelaw-purpleLight shadow-glow flex items-center justify-center overflow-hidden">
                <Image
                  src="/Logotipo/Ícone-colorido.png"
                  alt="Freelaw Logo"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

          </motion.div>

          {/* Surrounding Skill Circles */}
          <AnimatePresence>
            {skills.slice(0, visibleCount).map((skill, index) => {
              const position = getCirclePosition(skill.angle, radius)
              const Icon = skill.icon

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: position.x,
                    y: position.y
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    {/* Connecting line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute w-40 h-0.5 bg-gradient-to-r from-freelaw-purpleLight/50 to-transparent"
                      style={{
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'left center',
                        transform: `rotate(${skill.angle + 180}deg) translateY(-50%)`
                      }}
                    />

                    {/* Skill Circle */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-freelaw-purple/30 to-freelaw-purpleLight/30 blur-lg" />

                      <div className="relative bg-freelaw-bg/90 backdrop-blur-sm border-2 border-freelaw-purpleLight/40 rounded-2xl p-6 w-48 hover:border-freelaw-purpleLight hover:shadow-glow transition-all duration-300">
                        {/* Icon */}
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-freelaw-purple to-freelaw-purpleLight flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Text */}
                        <p className="text-white text-center text-sm leading-relaxed font-medium">
                          {skill.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
