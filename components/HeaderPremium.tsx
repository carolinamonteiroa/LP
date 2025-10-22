"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function HeaderPremium() {
  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Cases", href: "#cases" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Planos", href: "#planos" },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 bg-transparent"
    >
      <div className="container mx-auto max-w-7xl px-6 py-2">
        <div className="grid grid-cols-3 items-center gap-4">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-freelaw.png"
              alt="Freelaw"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation Menu - Center */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-freelaw-white/80 hover:text-freelaw-white transition-colors text-sm font-medium whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Consultant Name - Right */}
          <div className="hidden md:flex items-center justify-end">
            <span className="text-freelaw-white text-sm font-semibold">
              Consultora Carolina Monteiro
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
