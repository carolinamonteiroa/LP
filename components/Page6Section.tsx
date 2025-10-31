"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Briefcase, Users, TrendingUp, DollarSign, Heart } from "lucide-react"
import { NextSectionArrow } from "./NextSectionArrow"

export function Page6Section() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [isInView, setIsInView] = useState(false)

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

  const radius = 180 // Distance from center

  useEffect(() => {
    if (isInView && visibleCount < skills.length) {
      const timer = setTimeout(() => {
        setVisibleCount(prev => prev + 1)
      }, 800) // Cada item aparece após 0.8 segundos

      return () => clearTimeout(timer)
    }
  }, [isInView, visibleCount, skills.length])

  return (
    <section
      id="page6"
      className="h-screen bg-gradient-to-b from-freelaw-bg via-[#2a1f3d] to-freelaw-bg flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-30" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-white"
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
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onViewportEnter={() => setIsInView(true)}
            className="absolute z-20"
          >
            <div className="relative w-28 h-28 md:w-32 md:h-32">
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
                      className="absolute w-32 h-0.5 bg-gradient-to-r from-freelaw-purpleLight/50 to-transparent"
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

                      <div className="relative bg-freelaw-bg/90 backdrop-blur-sm border-2 border-freelaw-purpleLight/40 rounded-xl p-4 w-40 hover:border-freelaw-purpleLight hover:shadow-glow transition-all duration-300">
                        {/* Icon */}
                        <div className="flex justify-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-freelaw-purple to-freelaw-purpleLight flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Text */}
                        <p className="text-white text-center text-xs leading-relaxed font-medium">
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

        <NextSectionArrow targetId="page2" />
      </div>
    </section>
  )
}
