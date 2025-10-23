"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redireciona automaticamente para a página Premium
    router.push("/premium")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-freelaw-bg">
      <div className="text-freelaw-white">Redirecionando...</div>
    </div>
  )
}
