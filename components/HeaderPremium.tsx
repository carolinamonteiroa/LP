"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function HeaderPremium() {
  const navItems = [
    { label: "Desafio", href: "#page2" },
    { label: "Multifunções", href: "#page3" },
    { label: "Documentos/Áreas", href: "#page4" },
    { label: "Plataforma", href: "#page5" },
    { label: "Qualidade", href: "#page6" },
    { label: "Volume", href: "#page7" },
    { label: "Cases", href: "#page8" },
    { label: "Planos", href: "#page14" },
    { label: "ROI", href: "#page12" },
    { label: "QRCODE", href: "#page15" },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-lg"
    >
      <div className="container mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo-freelaw.png"
              alt="Freelaw"
              width={80}
              height={25}
              className="h-6 w-auto"
              priority
            />
          </Link>

          {/* Navigation Menu - Center/Right */}
          <nav className="hidden lg:flex items-center gap-4 flex-wrap justify-end">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-freelaw-white/80 hover:text-freelaw-purpleLight hover:scale-105 transition-all text-xs font-medium whitespace-nowrap px-2 py-1 rounded hover:bg-white/5"
                scroll={true}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
