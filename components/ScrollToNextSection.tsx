"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

const SECTION_IDS = [
  "hero",
  "page3",
  "page4",
  "page5",
  "page6",
  "page2",
  "page7",
  "page8",
  "page9",
  "page10",
  "page11",
  "page12",
  "page13",
  "page14b",
  "page15",
  "page16"
]

export function ScrollToNextSection() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const element = document.getElementById(SECTION_IDS[i])
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = window.scrollY + rect.top

          if (scrollPosition >= elementTop) {
            setCurrentSectionIndex(i)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNext = () => {
    const nextIndex = currentSectionIndex + 1
    if (nextIndex < SECTION_IDS.length) {
      const nextElement = document.getElementById(SECTION_IDS[nextIndex])
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  // Não mostrar a setinha se estiver na última página
  if (currentSectionIndex >= SECTION_IDS.length - 1) {
    return null
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={scrollToNext}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/40 hover:bg-white/20 hover:text-white/60 transition-all duration-300"
        aria-label="Ir para próxima seção"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  )
}
