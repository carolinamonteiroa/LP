"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { usePresenterMode } from "@/hooks/usePresenterMode"
import demoContent from "@/content/demo.json"

// Components
import { Header } from "@/components/Header"
import { ProgressBar } from "@/components/ProgressBar"
import { ScrollIndicator } from "@/components/ScrollIndicator"
import { Minimapa } from "@/components/Minimapa"
import { PresenterNotes } from "@/components/PresenterNotes"
import { Footer } from "@/components/Footer"

// Sections
import { HeroSection } from "@/components/sections/HeroSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { SolutionSection } from "@/components/sections/SolutionSection"
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection"
import { PilotPlanSection } from "@/components/sections/PilotPlanSection"
import { CasesSection } from "@/components/sections/CasesSection"
import { HowToStartSection } from "@/components/sections/HowToStartSection"
import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

function DemoPageContent() {
  const searchParams = useSearchParams()
  const [urlParams, setUrlParams] = useState<Record<string, string>>({})

  // Extract query params for personalization
  useEffect(() => {
    const cliente = searchParams.get("cliente") || ""
    const cidade = searchParams.get("cidade") || ""
    setUrlParams({ cliente, cidade })
  }, [searchParams])

  // Get visible section IDs
  const visibleSections = demoContent.sections
    .filter((s) => s.visible)
    .map((s) => s.id)

  const presenterMode = usePresenterMode(visibleSections)

  const handleExportPDF = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  return (
    <div className="scroll-container">
      {/* Header */}
      <Header />

      {/* Progress Bar */}
      <ProgressBar />

      {/* Export PDF Button */}
      <div className="fixed top-6 right-6 z-40 no-print">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleExportPDF}
          className="shadow-medium"
        >
          <Printer className="w-4 h-4" />
          Exportar PDF
        </Button>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Minimapa */}
      <Minimapa
        isOpen={presenterMode.showMinimap}
        onClose={presenterMode.toggleMinimap}
        sections={demoContent.sections}
        currentSection={presenterMode.currentSection}
        onSectionClick={presenterMode.scrollToSection}
      />

      {/* Presenter Notes */}
      <PresenterNotes
        isOpen={presenterMode.showNotes}
        onClose={presenterMode.toggleNotes}
        notes={demoContent.presenterNotes}
        currentSectionId={visibleSections[presenterMode.currentSection] || "hero"}
      />

      {/* Main Content */}
      <main>
        <HeroSection content={demoContent.hero} params={urlParams} />
        <StatsSection content={demoContent.stats} />
        <ProblemSection content={demoContent.problem} />
        <SolutionSection content={demoContent.solution} />
        <BeforeAfterSection content={demoContent.beforeAfter} />
        <PilotPlanSection content={demoContent.pilotPlan} />
        <CasesSection content={demoContent.cases} />
        <HowToStartSection content={demoContent.howToStart} />
      </main>

      {/* Footer */}
      <Footer content={demoContent.footer} />

      {/* Keyboard shortcuts hint */}
      <div className="fixed bottom-6 left-6 z-40 no-print">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-medium p-3 text-xs text-neutral-dark/60">
          <span className="font-semibold">Atalhos:</span> G = Mapa • M = Minimal • N = Notas
        </div>
      </div>
    </div>
  )
}

export default function DemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <DemoPageContent />
    </Suspense>
  )
}
