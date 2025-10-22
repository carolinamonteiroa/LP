"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MinimapProps {
  isOpen: boolean
  onClose: () => void
  sections: Array<{ id: string; title: string; visible: boolean }>
  currentSection: number
  onSectionClick: (index: number) => void
}

export function Minimapa({
  isOpen,
  onClose,
  sections,
  currentSection,
  onSectionClick,
}: MinimapProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 no-print"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-strong z-50 overflow-y-auto no-print"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-semibold text-neutral-dark">
                  Navegação
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  aria-label="Fechar minimapa"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-2">
                {sections
                  .filter((s) => s.visible)
                  .map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        onSectionClick(index)
                        onClose()
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        currentSection === index
                          ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-medium"
                          : "bg-neutral-light hover:bg-neutral-light/60 text-neutral-dark"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-semibold ${
                            currentSection === index
                              ? "text-white/80"
                              : "text-brand-primary"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium">{section.title}</span>
                      </div>
                    </button>
                  ))}
              </div>

              <div className="mt-8 p-4 bg-neutral-light rounded-xl">
                <h3 className="text-sm font-semibold text-neutral-dark mb-2">
                  Atalhos de teclado
                </h3>
                <ul className="text-xs text-neutral-dark/70 space-y-1">
                  <li><kbd className="px-1.5 py-0.5 bg-white rounded">↓</kbd> ou <kbd className="px-1.5 py-0.5 bg-white rounded">Space</kbd> - Próxima seção</li>
                  <li><kbd className="px-1.5 py-0.5 bg-white rounded">↑</kbd> - Seção anterior</li>
                  <li><kbd className="px-1.5 py-0.5 bg-white rounded">G</kbd> - Abrir/fechar navegação</li>
                  <li><kbd className="px-1.5 py-0.5 bg-white rounded">M</kbd> - Modo minimal</li>
                  <li><kbd className="px-1.5 py-0.5 bg-white rounded">N</kbd> - Notas do apresentador</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
