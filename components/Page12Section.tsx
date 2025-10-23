"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { X, Calculator, TrendingDown, TrendingUp } from "lucide-react"
import { UF, STATES, SALARIOS } from "@/lib/salaryData"

const CUSTO_HORA_GERENTE = 25
const PECAS_MES_MEDIA = 10
const HORAS_POR_PECA_MEDIA = 0.5

// Planos Freelaw
const PLANOS_FREELAW = {
  iniciacao: { nome: 'Iniciação', valor: 1090 },
  controle: { nome: 'Controle', valor: 1690 },
  otimizacao: { nome: 'Otimização', valor: 2090 },
  escala: { nome: 'Escala', valor: 2590 },
  corporativo: { nome: 'Corporativo', valor: 4990 }
} as const

type PlanoKey = keyof typeof PLANOS_FREELAW

export function Page12Section() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUF, setSelectedUF] = useState<UF | "">("")
  const [planoSelecionado, setPlanoSelecionado] = useState<PlanoKey>('controle')

  // Função para obter salário por UF ou fallback
  const getSalario = (uf: UF | "", tipo: 'advogado' | 'estagiario'): number => {
    if (!uf) return SALARIOS.fallback[tipo]
    return SALARIOS[tipo][uf] ?? SALARIOS.fallback[tipo]
  }

  // Formatador de moeda BRL
  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  // Cálculos Estagiário (usando médias fixas)
  const calcEstagiario = () => {
    const salario = getSalario(selectedUF, 'estagiario')
    const treinamento = 20 * CUSTO_HORA_GERENTE
    const revisao = PECAS_MES_MEDIA * HORAS_POR_PECA_MEDIA * CUSTO_HORA_GERENTE
    const selecao = 5 * CUSTO_HORA_GERENTE

    return {
      salario,
      treinamento,
      revisao,
      selecao,
      mes1: salario + treinamento + revisao + selecao,
      recorrente: salario + treinamento + revisao
    }
  }

  // Cálculos Advogado (usando médias fixas)
  const calcAdvogado = () => {
    const salario = getSalario(selectedUF, 'advogado')
    const revisao = PECAS_MES_MEDIA * HORAS_POR_PECA_MEDIA * 0.5 * CUSTO_HORA_GERENTE
    const selecao = 5 * CUSTO_HORA_GERENTE

    return {
      salario,
      revisao,
      selecao,
      mes1: salario + revisao + selecao,
      recorrente: salario + revisao
    }
  }

  const estagiario = calcEstagiario()
  const advogado = calcAdvogado()
  const valorPlano = PLANOS_FREELAW[planoSelecionado].valor

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <section
      id="page12"
      className="min-h-screen bg-freelaw-bg flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-30" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Não sabe se vale <span className="whitespace-nowrap">a pena o <span className="text-freelaw-purpleLight">investimento?</span></span>
            </h2>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-freelaw-purple to-freelaw-purpleLight text-white font-bold text-lg rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <Calculator className="w-6 h-6" />
              Selecionar estado e calcular
            </button>
          </motion.div>

          {/* Right - Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-freelaw-purpleLight/30 rounded-2xl p-6 ml-auto max-w-md"
          >
            <p className="text-lg md:text-xl text-freelaw-textDim leading-relaxed">
              Em 80% dos estados esse valor é{" "}
              <span className="text-freelaw-purpleLight font-bold">em dobro!</span>
              <br />
              <br />
              Lembre sempre dos{" "}
              <span className="text-white font-semibold">custos invisíveis</span>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-freelaw-bg border border-freelaw-purpleLight/40 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-freelaw-bg border-b border-freelaw-purpleLight/30 p-6 flex items-center justify-between z-10">
              <h3 id="modal-title" className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <Calculator className="w-8 h-8 text-freelaw-purpleLight" />
                Calculadora de Custo por Estado
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-freelaw-purpleLight transition-colors p-2"
                aria-label="Fechar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* UF Selection */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="text-white font-semibold text-lg">Selecione o Estado (UF)</label>
                  <select
                    value={selectedUF}
                    onChange={(e) => setSelectedUF(e.target.value as UF)}
                    className="w-full p-4 bg-white/10 border border-freelaw-purpleLight/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-freelaw-purpleLight"
                  >
                    <option value="">-- Selecione --</option>
                    {(Object.keys(STATES) as UF[]).map((uf) => (
                      <option key={uf} value={uf} className="bg-freelaw-bg">
                        {uf} - {STATES[uf]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Freelaw Plan Selection */}
                <div className="space-y-4">
                  <label className="text-white font-semibold text-lg">Selecione o Plano Freelaw</label>
                  <select
                    value={planoSelecionado}
                    onChange={(e) => setPlanoSelecionado(e.target.value as PlanoKey)}
                    className="w-full p-4 bg-white/10 border border-freelaw-purpleLight/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-freelaw-purpleLight"
                  >
                    {(Object.keys(PLANOS_FREELAW) as PlanoKey[]).map((key) => (
                      <option key={key} value={key} className="bg-freelaw-bg">
                        {PLANOS_FREELAW[key].nome} - {formatBRL(PLANOS_FREELAW[key].valor)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Calculation Results */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Advogado Card - LEFT */}
                <div className="bg-white/5 border border-orange-400/30 rounded-2xl p-6 space-y-4">
                  <h4 className="text-2xl font-bold text-orange-400">Contratação Interna – Advogado/Associado</h4>

                  <div className="space-y-3">
                    <div className="text-freelaw-textDim text-sm space-y-1">
                      <p className="font-semibold text-white">Faixa salarial júnior: R$ 2.200 a R$ 4.500</p>
                      <p>• Salário base (média júnior): {formatBRL(advogado.salario)}</p>
                      <p>• Revisão 50% das peças (média: {PECAS_MES_MEDIA} × {HORAS_POR_PECA_MEDIA}h × 0.5 × R$ 25/h): {formatBRL(advogado.revisao)}</p>
                      <p>• Processo seletivo (5h × R$ 25/h): {formatBRL(advogado.selecao)} <span className="text-yellow-400">(apenas Mês 1)</span></p>
                      <p className="text-yellow-300">⚠️ Possível demanda trabalhista</p>
                    </div>

                    <div className="border-t border-white/20 pt-3 space-y-2">
                      <div>
                        <p className="text-xs text-freelaw-textDim uppercase mb-1">NO MÍNIMO - Mês 1 (com seleção)</p>
                        <p className="text-2xl font-bold text-white">{formatBRL(advogado.mes1)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-freelaw-textDim uppercase mb-1">NO MÍNIMO - Recorrente</p>
                        <p className="text-2xl font-bold text-white">{formatBRL(advogado.recorrente)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estagiário Card - RIGHT */}
                <div className="bg-white/5 border border-red-400/30 rounded-2xl p-6 space-y-4">
                  <h4 className="text-2xl font-bold text-red-400">Contratação Interna – Estagiário</h4>

                  <div className="space-y-3">
                    <div className="text-freelaw-textDim text-sm space-y-1">
                      <p className="font-semibold text-white">Faixa salarial média: R$ 750 a R$ 1.200</p>
                      <p>• Salário base (média): {formatBRL(estagiario.salario)}</p>
                      <p>• Treinamento (20h × R$ 25/h): {formatBRL(estagiario.treinamento)}</p>
                      <p>• Revisão 100% das peças (média: {PECAS_MES_MEDIA} × {HORAS_POR_PECA_MEDIA}h × R$ 25/h): {formatBRL(estagiario.revisao)}</p>
                      <p>• Processo seletivo (5h × R$ 25/h): {formatBRL(estagiario.selecao)} <span className="text-yellow-400">(apenas Mês 1)</span></p>
                      <p className="text-yellow-300">⚠️ Possível demanda trabalhista</p>
                    </div>

                    <div className="border-t border-white/20 pt-3 space-y-2">
                      <div>
                        <p className="text-xs text-freelaw-textDim uppercase mb-1">NO MÍNIMO - Mês 1 (com seleção)</p>
                        <p className="text-2xl font-bold text-white">{formatBRL(estagiario.mes1)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-freelaw-textDim uppercase mb-1">NO MÍNIMO - Recorrente</p>
                        <p className="text-2xl font-bold text-white">{formatBRL(estagiario.recorrente)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Freelaw Comparison Card */}
              <div className="bg-gradient-to-br from-freelaw-purple/20 to-freelaw-purpleLight/20 border-2 border-freelaw-purpleLight rounded-2xl p-6 space-y-4">
                <h4 className="text-2xl font-bold text-freelaw-purpleLight flex items-center gap-2">
                  Freelaw - Plano {PLANOS_FREELAW[planoSelecionado].nome}
                  {valorPlano < estagiario.recorrente && (
                    <span className="text-sm px-3 py-1 bg-green-500 text-white rounded-full">
                      Economia imediata
                    </span>
                  )}
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white font-semibold mb-2">Valor do plano mensal</p>
                    <p className="text-3xl font-bold text-freelaw-purpleLight">{formatBRL(valorPlano)}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-freelaw-textDim mb-1">vs. Estagiário (Recorrente)</p>
                      <div className="flex items-center gap-2">
                        {valorPlano < estagiario.recorrente ? (
                          <>
                            <TrendingDown className="w-5 h-5 text-green-400" />
                            <span className="text-green-400 font-bold">
                              Economia de {formatBRL(estagiario.recorrente - valorPlano)}
                            </span>
                          </>
                        ) : (
                          <>
                            <TrendingUp className="w-5 h-5 text-red-400" />
                            <span className="text-red-400 font-bold">
                              +{formatBRL(valorPlano - estagiario.recorrente)}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-freelaw-textDim mb-1">vs. Advogado (Recorrente)</p>
                      <div className="flex items-center gap-2">
                        {valorPlano < advogado.recorrente ? (
                          <>
                            <TrendingDown className="w-5 h-5 text-green-400" />
                            <span className="text-green-400 font-bold">
                              Economia de {formatBRL(advogado.recorrente - valorPlano)}
                            </span>
                          </>
                        ) : (
                          <>
                            <TrendingUp className="w-5 h-5 text-red-400" />
                            <span className="text-red-400 font-bold">
                              +{formatBRL(valorPlano - advogado.recorrente)}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Summary */}
              <div className="bg-white/5 border border-freelaw-purpleLight/30 rounded-xl p-6">
                <h5 className="text-lg font-bold text-white mb-4">Comparativo Total</h5>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-freelaw-textDim text-sm mb-2">Advogado - Mês 1</p>
                    <p className="text-xl font-bold text-white">{formatBRL(advogado.mes1)}</p>
                    <p className="text-freelaw-textDim text-sm mt-1">Recorrente: {formatBRL(advogado.recorrente)}</p>
                  </div>
                  <div>
                    <p className="text-freelaw-textDim text-sm mb-2">Estagiário - Mês 1</p>
                    <p className="text-xl font-bold text-white">{formatBRL(estagiario.mes1)}</p>
                    <p className="text-freelaw-textDim text-sm mt-1">Recorrente: {formatBRL(estagiario.recorrente)}</p>
                  </div>
                  <div>
                    <p className="text-freelaw-textDim text-sm mb-2">Freelaw - {PLANOS_FREELAW[planoSelecionado].nome}</p>
                    <p className="text-xl font-bold text-freelaw-purpleLight">{formatBRL(valorPlano)}/mês</p>
                    <p className="text-green-400 text-sm mt-1">Sem custo de seleção</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
