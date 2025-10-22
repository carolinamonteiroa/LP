"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { HeaderPremium } from "@/components/HeaderPremium"
import { HeroPremium } from "@/components/HeroPremium"
import { Page2Section } from "@/components/Page2Section"
import { Page3Section } from "@/components/Page3Section"
import { Page4Section } from "@/components/Page4Section"
import { Page5Section } from "@/components/Page5Section"

function PremiumPageContent() {
  const searchParams = useSearchParams()
  const [clientName, setClientName] = useState<string>("{Nome}")

  useEffect(() => {
    const nome = searchParams.get("nome")
    if (nome) {
      setClientName(decodeURIComponent(nome))
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-freelaw-bg">
      <HeaderPremium />
      <HeroPremium clientName={clientName} />
      <Page2Section />
      <Page3Section />
      <Page4Section />
      <Page5Section />
    </div>
  )
}

export default function PremiumPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-freelaw-bg">
        <div className="text-freelaw-white">Carregando...</div>
      </div>
    }>
      <PremiumPageContent />
    </Suspense>
  )
}
