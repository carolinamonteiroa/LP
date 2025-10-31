"use client"

import { ChevronDown } from "lucide-react"

interface NextSectionArrowProps {
  targetId: string
}

export function NextSectionArrow({ targetId }: NextSectionArrowProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={scrollToSection}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/40 hover:bg-white/20 hover:text-white/60 transition-all duration-300"
        aria-label="Ir para próxima seção"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  )
}
