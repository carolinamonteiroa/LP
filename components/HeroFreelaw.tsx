"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

// ============================================================================
// CONSTANTES DE CONTEÚDO
// ============================================================================

const CONTENT = {
  headline: {
    start: "Sua operação jurídica, mais ",
    highlight: "inteligente e escalável",
    end: "."
  },
  subheadline: [
    "A Freelaw conecta seu escritório a advogados da área e tecnologia jurídica para criar documentos artesanais",
    "e inteligentes, unindo precisão e agilidade em cada entrega."
  ],
  supportLines: [
    "Documentos feitos com cuidado humano quando o caso exige.",
    "Inteligência artificial quando o tempo é essencial."
  ],
  ctas: {
    primary: "Quero conhecer os planos",
    secondary: "Ver como funciona"
  }
}

// ============================================================================
// HELPER DE SCROLL SUAVE
// ============================================================================

export function scrollToId(id: string) {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

export default function HeroFreelaw() {
  return (
    <section id="hero" className="h-screen bg-freelaw-bg flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-50" />

      {/* Image with transparency - Right side */}
      <div className="absolute right-0 top-[50%] -translate-y-1/2 w-1/2 h-full">
        <div className="relative w-full h-full opacity-20">
          <Image
            src="/reuniao-cliente.png"
            alt="Reunião com cliente"
            fill
            className="object-cover object-left"
          />
        </div>
      </div>

      {/* Gradient overlay from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-freelaw-bg via-freelaw-bg/80 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Subheadline primeiro */}
            <div className="text-lg md:text-xl text-freelaw-textDim leading-relaxed max-w-xl space-y-2">
              {CONTENT.subheadline.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {/* Decorative element */}
            <div className="h-1 w-32 bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple rounded-full" />

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">{CONTENT.headline.start}</span>
                <span className="bg-gradient-to-r from-freelaw-purpleLight to-freelaw-purple bg-clip-text text-transparent">
                  {CONTENT.headline.highlight}
                </span>
                <span className="text-white">{CONTENT.headline.end}</span>
              </h1>
            </div>

            {/* Frases de apoio */}
            <div className="space-y-1 text-lg md:text-xl text-freelaw-textDim leading-relaxed max-w-xl">
              {CONTENT.supportLines.map((line, index) => (
                <p key={index}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Empty space for image (image is in background) */}
          <div className="hidden lg:block" />
        </div>
      </div>


      {/* CSS animations inline */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
