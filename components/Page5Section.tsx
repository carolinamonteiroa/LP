"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export function Page5Section() {
  const [followers, setFollowers] = useState(1000)
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 3000 // 3 seconds
    const steps = 60
    const increment = (1000000 - 1000) / steps
    let current = 1000
    let step = 0

    const timer = setInterval(() => {
      step++
      current += increment

      if (step >= steps) {
        setFollowers(1000000)
        clearInterval(timer)
      } else {
        setFollowers(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView])

  const formatFollowers = (num: number) => {
    return num.toLocaleString('pt-BR')
  }

  return (
    <section id="page5" className="min-h-screen bg-freelaw-bg flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-50" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 relative"
        >
          Mas mesmo com <span className="relative inline-block">tudo</span> isso..
        </motion.h2>

        {/* Content Grid - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-white text-2xl md:text-3xl leading-relaxed">
              Advogados menos qualificados do que você conseguem ganhar mais dinheiro.
            </p>

            <p className="text-white text-2xl md:text-3xl leading-relaxed">
              Advogados menos qualificados que você tem uma presença digital mais forte enquanto você continua{" "}
              <span className="font-bold text-freelaw-purpleLight">
                preso no operacional
              </span>
              .
            </p>
          </motion.div>

          {/* Right Column - Phone Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-[450px] h-[450px]" ref={counterRef}>
              {/* Neon Arrow pointing to follower counter */}
              <motion.svg
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{ opacity: 1, pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute -top-32 -left-32 w-64 h-64 pointer-events-none z-10"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <motion.path
                  d="M 30 30 Q 80 50, 120 90 L 130 100"
                  stroke="#A78BFA"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <motion.path
                  d="M 130 100 L 120 95 M 130 100 L 125 110"
                  stroke="#A78BFA"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 2.3 }}
                />
              </motion.svg>

              <Image
                src="/celular.png"
                alt="Presença digital"
                fill
                className="object-cover object-center"
              />

              {/* Follower counter overlay */}
              <div className="absolute top-[160px] left-[55%] bg-white px-2 py-1 rounded-full z-20">
                <div className="text-center">
                  <div className="text-[10px] font-semibold text-freelaw-purple tracking-tight" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                    {formatFollowers(followers)}
                  </div>
                  <div className="text-[6px] text-black/70 font-medium tracking-tight" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>seguidores</div>
                </div>
              </div>

              {/* Gradient overlay on edges to blend with background */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: `
                  linear-gradient(to right, rgba(14, 10, 20, 0.8) 0%, transparent 15%, transparent 85%, rgba(14, 10, 20, 0.8) 100%),
                  linear-gradient(to bottom, rgba(14, 10, 20, 0.6) 0%, transparent 10%)
                `
              }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
