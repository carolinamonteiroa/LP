"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { HeaderPremium } from "@/components/HeaderPremium"
import { HeroPremium } from "@/components/HeroPremium"
import { Page2Section } from "@/components/Page2Section"
import { Page3Section } from "@/components/Page3Section"
import { Page4Section } from "@/components/Page4Section"
import { Page5Section } from "@/components/Page5Section"
import { Page6Section } from "@/components/Page6Section"
import { Page7Section } from "@/components/Page7Section"
import { Page8Section } from "@/components/Page8Section"
import { Page9Section } from "@/components/Page9Section"
import { Page10Section } from "@/components/Page10Section"
import { Page11Section } from "@/components/Page11Section"
import { Page12Section } from "@/components/Page12Section"
import { Page13Section } from "@/components/Page13Section"
import { Page14Section } from "@/components/Page14Section"
import { Page15Section } from "@/components/Page15Section"

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
      <Page6Section />
      <Page7Section />
      <Page8Section />
      <Page9Section />
      <Page10Section />
      <Page11Section />
      <Page13Section />
      <Page14Section />
      <Page12Section />
      <Page15Section />
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
