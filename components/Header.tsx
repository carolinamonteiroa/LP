"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const navItems = [
    { label: "Página 1", href: "#hero" },
    { label: "Página 2", href: "#page2" },
    { label: "Página 3", href: "#page3" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1d3d]/95 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">freelaw</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            size="sm"
            className="bg-white text-[#1a1d3d] hover:bg-white/90 font-semibold"
          >
            Carolina Monteiro
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
