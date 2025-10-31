"use client"

import Image from "next/image"

// ============================================================================
// HELPER DE SCROLL SUAVE
// ============================================================================

const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

export function TopBannerPurpleNovember() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0B0217] py-3 md:py-4 border-b border-[#1B1230]"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
        {/* Logo Freelaw - Esquerda */}
        <div className="flex-shrink-0">
          <Image
            src="/logo-freelaw.svg"
            alt="Freelaw"
            width={120}
            height={32}
            className="h-6 md:h-8 w-auto brightness-0 invert"
          />
        </div>

        {/* Purple November - Centro */}
        <div
          onClick={() => scrollToId("page14")}
          className="flex-1 flex justify-center items-center gap-2 md:gap-3 cursor-pointer hover:brightness-125 transition-all duration-300"
          role="button"
          aria-label="Aproveite a Purple November - Clique para ver os planos"
        >
          {/* Black November (riscado) */}
          <span className="line-through text-gray-400 opacity-60 text-xs md:text-sm font-semibold uppercase tracking-wide">
            Black November
          </span>

          {/* Ícone coração roxo */}
          <span className="text-[#B38BFF] text-base md:text-lg">💜</span>

          {/* Purple November (destaque com gradiente) */}
          <span className="bg-gradient-to-r from-[#7B5CFF] to-[#B38BFF] text-transparent bg-clip-text text-lg md:text-xl font-bold uppercase tracking-wide drop-shadow-[0_0_10px_rgba(179,139,255,0.5)] animate-blink">
            Purple November
          </span>
        </div>

        {/* Botão Contratar - Direita */}
        <button
          onClick={() => scrollToId("page16")}
          className="flex-shrink-0 bg-gradient-to-r from-[#7B5CFF] to-[#B38BFF] text-white text-xs md:text-sm font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
          aria-label="Contratar agora"
        >
          Quero contratar agora
        </button>
      </div>
    </div>
  )
}
