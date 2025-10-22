"use client"

import { useEffect, useState, useCallback } from "react"

export interface PresenterModeState {
  isMinimalMode: boolean
  showMinimap: boolean
  showNotes: boolean
  currentSection: number
  totalSections: number
}

export function usePresenterMode(sectionIds: string[]) {
  const [state, setState] = useState<PresenterModeState>({
    isMinimalMode: false,
    showMinimap: false,
    showNotes: false,
    currentSection: 0,
    totalSections: sectionIds.length,
  })

  const scrollToSection = useCallback(
    (index: number) => {
      if (index < 0 || index >= sectionIds.length) return

      const sectionId = sectionIds[index]
      const element = document.getElementById(sectionId)

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
        setState((prev) => ({ ...prev, currentSection: index }))
      }
    },
    [sectionIds]
  )

  const nextSection = useCallback(() => {
    scrollToSection(state.currentSection + 1)
  }, [state.currentSection, scrollToSection])

  const previousSection = useCallback(() => {
    scrollToSection(state.currentSection - 1)
  }, [state.currentSection, scrollToSection])

  const toggleMinimap = useCallback(() => {
    setState((prev) => ({ ...prev, showMinimap: !prev.showMinimap }))
  }, [])

  const toggleMinimalMode = useCallback(() => {
    setState((prev) => ({ ...prev, isMinimalMode: !prev.isMinimalMode }))
    if (!state.isMinimalMode) {
      document.body.classList.add("minimal-mode")
    } else {
      document.body.classList.remove("minimal-mode")
    }
  }, [state.isMinimalMode])

  const toggleNotes = useCallback(() => {
    setState((prev) => ({ ...prev, showNotes: !prev.showNotes }))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      switch (e.key.toLowerCase()) {
        case "arrowdown":
        case " ":
          e.preventDefault()
          nextSection()
          break
        case "arrowup":
          e.preventDefault()
          previousSection()
          break
        case "g":
          e.preventDefault()
          toggleMinimap()
          break
        case "m":
          e.preventDefault()
          toggleMinimalMode()
          break
        case "n":
          e.preventDefault()
          toggleNotes()
          break
        case "escape":
          e.preventDefault()
          setState((prev) => ({ ...prev, showMinimap: false, showNotes: false }))
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSection, previousSection, toggleMinimap, toggleMinimalMode, toggleNotes])

  // Track scroll position to update current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i])
        if (element && element.offsetTop <= scrollPosition) {
          setState((prev) => {
            if (prev.currentSection !== i) {
              return { ...prev, currentSection: i }
            }
            return prev
          })
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds])

  return {
    ...state,
    scrollToSection,
    nextSection,
    previousSection,
    toggleMinimap,
    toggleMinimalMode,
    toggleNotes,
  }
}
