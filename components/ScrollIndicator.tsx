"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <motion.div
      className="scroll-indicator fixed bottom-8 left-1/2 -translate-x-1/2 z-40 no-print"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2 text-brand-primary"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-medium">Pressione ↓</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  )
}
