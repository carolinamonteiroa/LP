"use client"

import { ArrowRight } from "lucide-react"

// ============================================================================
// CONSTANTES DE CONTEÚDO
// ============================================================================

const CONTENT = {
  headline: {
    start: "Sua ",
    highlight: "operação jurídica",
    end: ", mais inteligente e escalável."
  },
  subheadline: "A Freelaw conecta seu escritório a advogados da área e tecnologia jurídica para criar documentos artesanais e inteligentes, unindo precisão e agilidade em cada entrega.",
  supportLines: [
    "Documentos feitos com cuidado humano quando o caso exige.",
    "Inteligência artificial quando o tempo é essencial."
  ],
  ctas: {
    primary: "Quero conhecer os planos",
    secondary: "Ver como funciona"
  },
  badge: {
    oldText: "Black November",
    newText: "Purple November",
    ariaLabel: "Aproveite a Purple November"
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
    <section className="relative min-h-[92vh] bg-gradient-to-b from-[#0B0217] to-[#1B1230] text-white overflow-hidden">
      {/* Selo Purple November - Canto superior esquerdo */}
      <button
        onClick={() => scrollToId('#page14')}
        role="button"
        aria-label={CONTENT.badge.ariaLabel}
        className="absolute left-6 top-6 z-20 flex items-center text-sm cursor-pointer transition-all duration-300 hover:scale-105"
      >
        {/* Black November (riscado) */}
        <span className="line-through opacity-50 mr-2 text-[#D8D8E3]">
          {CONTENT.badge.oldText}
        </span>

        {/* Purple November (destaque) */}
        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#7B5CFF] to-[#B38BFF] text-white font-semibold shadow-[0_0_20px_rgba(179,139,255,0.35)] hover:shadow-[0_0_30px_rgba(179,139,255,0.5)] transition-shadow">
          {CONTENT.badge.newText}
        </span>
      </button>

      {/* Container principal */}
      <div className="mx-auto max-w-7xl px-6 py-20 pt-32 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda - Texto */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {CONTENT.headline.start}
              <span className="text-[#C1A4FF]">{CONTENT.headline.highlight}</span>
              {CONTENT.headline.end}
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-[#D8D8E3] max-w-2xl leading-relaxed">
              {CONTENT.subheadline}
            </p>

            {/* Frases de apoio */}
            <div className="mt-6 space-y-1 text-base md:text-lg text-[#D8D8E3]">
              {CONTENT.supportLines.map((line, index) => (
                <p key={index} className="leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {/* Botão primário */}
              <button
                onClick={() => scrollToId('#page14')}
                aria-label="Conhecer os planos da Freelaw"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#7B5CFF] to-[#B38BFF] rounded-xl px-6 py-3 font-semibold shadow-lg hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                {CONTENT.ctas.primary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Botão secundário */}
              <button
                onClick={() => scrollToId('#page3')}
                aria-label="Ver como funciona a Freelaw"
                className="inline-flex items-center gap-2 border border-[#C1A4FF] text-[#C1A4FF] rounded-xl px-6 py-3 font-semibold hover:bg-white/5 transition-all duration-200"
              >
                {CONTENT.ctas.secondary}
              </button>
            </div>
          </div>

          {/* Coluna direita - Visual */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_40px_rgba(193,164,255,0.25)]">
              {/* YouTube Video */}
              <iframe
                src="https://www.youtube.com/embed/ZFcn85POjtA"
                title="Freelaw - Vídeo de apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
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
