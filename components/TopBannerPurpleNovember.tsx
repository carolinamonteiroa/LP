"use client"

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
      onClick={() => scrollToId("page14")}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0B0217] text-center py-3 md:py-4 cursor-pointer flex justify-center items-center gap-2 md:gap-3 border-b border-[#1B1230] hover:brightness-125 transition-all duration-300"
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
      <span className="bg-gradient-to-r from-[#7B5CFF] to-[#B38BFF] text-transparent bg-clip-text text-sm md:text-base font-bold uppercase tracking-wide drop-shadow-[0_0_10px_rgba(179,139,255,0.5)] animate-pulse">
        Purple November
      </span>
    </div>
  )
}
