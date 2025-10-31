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
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <button
        onClick={scrollToSection}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7B5CFF] to-[#B38BFF] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-bounce"
        aria-label="Ir para próxima seção"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  )
}
