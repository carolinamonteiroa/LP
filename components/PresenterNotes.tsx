"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, StickyNote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PresenterNotesProps {
  isOpen: boolean
  onClose: () => void
  notes: Record<string, string>
  currentSectionId: string
}

export function PresenterNotes({
  isOpen,
  onClose,
  notes,
  currentSectionId,
}: PresenterNotesProps) {
  const currentNote = notes[currentSectionId] || "Sem notas para esta seção."

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-brand-primary shadow-strong z-50 no-print presenter-notes"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <div className="max-w-7xl mx-auto p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-primary/10 rounded-lg">
                  <StickyNote className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-dark">
                    Notas do Apresentador
                  </h3>
                  <p className="text-xs text-neutral-dark/60">
                    Apenas visível para você (não aparece no PDF)
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Fechar notas"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="mt-4 p-4 bg-neutral-light rounded-xl">
              <p className="text-sm text-neutral-dark leading-relaxed">
                {currentNote}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
