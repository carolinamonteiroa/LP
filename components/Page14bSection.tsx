"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function Page14bSection() {
  const mainPlans = [
    {
      name: "Otimização",
      price: 2090,
      bgColor: "bg-pink-500"
    },
    {
      name: "Escala",
      price: 2590,
      bgColor: "bg-yellow-500"
    },
    {
      name: "Corporativo",
      price: 4990,
      bgColor: "bg-purple-500"
    }
  ]

  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  return (
    <section
      id="page14b"
      className="h-screen bg-freelaw-bg px-4 py-12 relative overflow-hidden flex items-center justify-center"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-30" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
            Compare os planos
          </h3>

          <div className="bg-white/5 border border-freelaw-purpleLight/30 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-3 p-4 bg-white/10 border-b border-white/20">
              <div className="text-white font-semibold text-sm">Recursos</div>
              {mainPlans.map((plan) => (
                <div key={plan.name} className="text-center">
                  <div className={`inline-block px-2 py-0.5 rounded-full ${plan.bgColor} text-white text-xs font-bold mb-1`}>
                    {plan.name}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatBRL(plan.price)}
                  </div>
                  <div className="text-[10px] text-freelaw-textDim">/mês</div>
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-white/10">
              {[
                { label: "Peças simultâneas", values: ["5", "10", "25"] },
                { label: "Média mensal", values: ["~20 peças", "~40 peças", "~100 peças"] },
                { label: "Custo médio por peça", values: ["R$ 105", "R$ 65", "R$ 49"] },
                { label: "Equipe de advogados", values: ["~3", "~5", "Ilimitada"] },
                { label: "Usuários na plataforma", values: ["2", "3", "Ilimitados"] },
                { label: "Treinamento", values: ["Gravado", "1x ao vivo", "Ilimitado"] },
                { label: "Reuniões com gerente", values: ["1x onboarding", "Mensal (30min)", "Quinzenal (30min)"] },
                { label: "Adesão", values: ["R$ 650", "R$ 500", "Isento"] }
              ].map((row, index) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grid grid-cols-4 gap-3 p-4"
                >
                  <div className="text-white font-medium text-sm">{row.label}</div>
                  {row.values.map((value, vIndex) => (
                    <div key={vIndex} className="text-center text-freelaw-textDim">
                      {value === "✓" ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : value === "—" ? (
                        <span className="text-white/30">—</span>
                      ) : (
                        <span className="text-white text-sm">{value}</span>
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
