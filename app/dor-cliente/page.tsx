"use client"

import { Suspense } from "react"
import { HeaderPremium } from "@/components/HeaderPremium"
import { DorClienteHero } from "@/components/DorClienteHero"

function DorClientePageContent() {
  return (
    <div className="min-h-screen bg-freelaw-bg">
      <HeaderPremium />
      <DorClienteHero />
    </div>
  )
}

export default function DorClientePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-freelaw-bg">
        <div className="text-freelaw-white">Carregando...</div>
      </div>
    }>
      <DorClientePageContent />
    </Suspense>
  )
}
