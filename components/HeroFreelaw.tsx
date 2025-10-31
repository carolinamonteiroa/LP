"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

// ============================================================================
// CONSTANTES DE CONTEÚDO
// ============================================================================

const CONTENT = {
  headline: {
    start: "Sua ",
    highlight: "operação jurídica",
    end: ", mais inteligente e escalável."
  },
  subheadline: [
    "A Freelaw conecta seu escritório a advogados da área e tecnologia jurídica para criar",
    "documentos artesanais e inteligentes, unindo precisão e agilidade em cada entrega."
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
    <section id="hero" className="relative h-screen bg-freelaw-bg text-white overflow-hidden pt-12 flex items-center">
      {/* Imagem de fundo do lado direito - Ocupa metade da largura e toda a altura */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <Image
          src="/reuniao-cliente.png"
          alt="Reunião com cliente"
          fill
          className="object-cover object-center"
        />

        {/* Gradient overlay para transparência */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            linear-gradient(to right, rgba(11, 2, 23, 0.95) 0%, rgba(11, 2, 23, 0.7) 40%, rgba(11, 2, 23, 0.5) 100%),
            linear-gradient(to bottom, rgba(11, 2, 23, 0.5) 0%, rgba(11, 2, 23, 0.3) 50%, rgba(11, 2, 23, 0.5) 100%)
          `
        }} />
      </div>

      {/* Container principal - Texto */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-2xl">
          <div className="space-y-8 animate-fade-in-up">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {CONTENT.headline.start}
              <span className="text-[#C1A4FF]">{CONTENT.headline.highlight}</span>
              {CONTENT.headline.end}
            </h1>

            {/* Subheadline */}
            <div className="mt-6 text-lg md:text-xl text-[#D8D8E3] leading-relaxed space-y-2">
              {CONTENT.subheadline.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {/* Frases de apoio */}
            <div className="mt-8 space-y-1 text-base md:text-lg text-[#D8D8E3]">
              {CONTENT.supportLines.map((line, index) => (
                <p key={index} className="leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
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
