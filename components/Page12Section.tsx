"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { X, Calculator, TrendingDown, TrendingUp, Clock, Shield, Users, Zap, CheckCircle2, AlertTriangle } from "lucide-react"
import { UF, STATES, SALARIOS } from "@/lib/salaryData"

const CUSTO_HORA_GERENTE = 25
const PECAS_MES_MEDIA = 10
const HORAS_POR_PECA_MEDIA = 0.5

// Custos invisíveis
const ENCARGOS_TRABALHISTAS = 0.36 // 36% (INSS, FGTS, férias, 13º)
const BENEFICIOS_MENSAIS = 600 // VT, VR, plano de saúde (média)
const CUSTO_INFRAESTRUTURA = 200 // Computador, software, espaço (depreciado)
const CUSTO_TURNOVER_ANO = 2000 // Custo médio anual de rotatividade
const CUSTO_TURNOVER_MES = CUSTO_TURNOVER_ANO / 12

// Planos Freelaw com dados de produtividade
const PLANOS_FREELAW = {
  iniciacao: { nome: 'Iniciação', valor: 1090, pecasMes: 5, custoMedioPeca: 218 },
  controle: { nome: 'Controle', valor: 1690, pecasMes: 10, custoMedioPeca: 169 },
  otimizacao: { nome: 'Otimização', valor: 2090, pecasMes: 20, custoMedioPeca: 105 },
  escala: { nome: 'Escala', valor: 2590, pecasMes: 40, custoMedioPeca: 65 },
  corporativo: { nome: 'Corporativo', valor: 4990, pecasMes: 100, custoMedioPeca: 49 }
} as const

type PlanoKey = keyof typeof PLANOS_FREELAW

export function Page12Section() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUF, setSelectedUF] = useState<UF | "">("")
  const [planoSelecionado, setPlanoSelecionado] = useState<PlanoKey>('controle')

  // Função para obter faixa salarial por UF ou fallback
  const getFaixaSalario = (uf: UF | "", tipo: 'advogado' | 'estagiario'): { min: number; max: number } => {
    if (!uf) return SALARIOS.fallback[tipo]
    return SALARIOS[tipo][uf] ?? SALARIOS.fallback[tipo]
  }

  // Função para calcular média da faixa salarial
  const getMediaSalario = (uf: UF | "", tipo: 'advogado' | 'estagiario'): number => {
    const faixa = getFaixaSalario(uf, tipo)
    return (faixa.min + faixa.max) / 2
  }

  // Formatador de moeda BRL
  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  // Cálculos Estagiário (com TODOS os custos reais)
  const calcEstagiario = () => {
    const salarioBase = getMediaSalario(selectedUF, 'estagiario')
    const faixaSalarial = getFaixaSalario(selectedUF, 'estagiario')
    const encargos = salarioBase * ENCARGOS_TRABALHISTAS
    const beneficios = BENEFICIOS_MENSAIS
    const infraestrutura = CUSTO_INFRAESTRUTURA
    const turnover = CUSTO_TURNOVER_MES
    const treinamento = 20 * CUSTO_HORA_GERENTE
    const revisao = PECAS_MES_MEDIA * HORAS_POR_PECA_MEDIA * CUSTO_HORA_GERENTE
    const selecao = 5 * CUSTO_HORA_GERENTE

    const custoTotal = salarioBase + encargos + beneficios + infraestrutura + turnover

    return {
      salarioBase,
      faixaSalarial,
      encargos,
      beneficios,
      infraestrutura,
      turnover,
      treinamento,
      revisao,
      selecao,
      custoTotal,
      mes1: custoTotal + treinamento + revisao + selecao,
      recorrente: custoTotal + treinamento + revisao,
      horasGestao: 20 + 5 + (PECAS_MES_MEDIA * HORAS_POR_PECA_MEDIA) // Treinamento + Seleção + Revisão
    }
  }

  // Cálculos Advogado (com TODOS os custos reais)
  const calcAdvogado = () => {
    const salarioBase = getMediaSalario(selectedUF, 'advogado')
    const faixaSalarial = getFaixaSalario(selectedUF, 'advogado')
    const encargos = salarioBase * ENCARGOS_TRABALHISTAS
    const beneficios = BENEFICIOS_MENSAIS
    const infraestrutura = CUSTO_INFRAESTRUTURA
    const turnover = CUSTO_TURNOVER_MES
    const revisao = PECAS_MES_MEDIA * HORAS_POR_PECA_MEDIA * 0.5 * CUSTO_HORA_GERENTE
    const selecao = 5 * CUSTO_HORA_GERENTE

    const custoTotal = salarioBase + encargos + beneficios + infraestrutura + turnover

    return {
      salarioBase,
      faixaSalarial,
      encargos,
      beneficios,
      infraestrutura,
      turnover,
      revisao,
      selecao,
      custoTotal,
      mes1: custoTotal + revisao + selecao,
      recorrente: custoTotal + revisao,
      horasGestao: 5 + (PECAS_MES_MEDIA * HORAS_POR_PECA_MEDIA * 0.5) // Seleção + Revisão parcial
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
      className="h-screen bg-freelaw-bg flex items-center justify-center px-4 py-12 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heroGradient opacity-30" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Não sabe se vale <span className="whitespace-nowrap">a pena o <span className="text-freelaw-purpleLight">investimento?</span></span>
            </h2>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-freelaw-purple to-freelaw-purpleLight text-white font-bold text-base rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Selecionar estado e calcular
            </button>
          </motion.div>

          {/* Right - Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-freelaw-purpleLight/30 rounded-2xl p-5 ml-auto max-w-md"
          >
            <p className="text-base md:text-lg text-freelaw-textDim leading-relaxed">
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
                  <h4 className="text-2xl font-bold text-orange-400 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Contratação Interna – Advogado
                  </h4>

                  <div className="space-y-3">
                    <div className="text-freelaw-textDim text-sm space-y-1.5">
                      <p className="font-semibold text-white mb-2">💰 Custos Diretos:</p>
                      <p>• Salário base (júnior): <span className="text-white/60">De {formatBRL(advogado.faixaSalarial.min)} a {formatBRL(advogado.faixaSalarial.max)}</span></p>
                      <p className="text-xs text-green-300 ml-4">→ Média utilizada: {formatBRL(advogado.salarioBase)}</p>

                      <p className="font-semibold text-yellow-300 mt-3 mb-2">🔍 Custos Invisíveis:</p>
                      <p>• Encargos trabalhistas (36%): {formatBRL(advogado.encargos)}</p>
                      <p>• Benefícios (VT, VR, plano): {formatBRL(advogado.beneficios)}</p>
                      <p>• Infraestrutura (PC, software): {formatBRL(advogado.infraestrutura)}</p>
                      <p>• Custo de turnover (médio): {formatBRL(advogado.turnover)}</p>

                      <p className="font-semibold text-white mt-3 mb-2">⏱️ Gestão & Operação:</p>
                      <p>• Revisão 50% das peças: {formatBRL(advogado.revisao)}</p>
                      <p>• Processo seletivo (5h): {formatBRL(advogado.selecao)} <span className="text-yellow-400">(Mês 1)</span></p>
                      <p className="text-red-300 mt-2 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>Risco trabalhista + vínculo empregatício</span>
                      </p>
                    </div>

                    <div className="border-t border-white/20 pt-3 space-y-2">
                      <div>
                        <p className="text-xs text-freelaw-textDim uppercase mb-1">CUSTO REAL - Mês 1</p>
                        <p className="text-2xl font-bold text-white">{formatBRL(advogado.mes1)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-freelaw-textDim uppercase mb-1">CUSTO REAL - Recorrente</p>
                        <p className="text-2xl font-bold text-orange-400">{formatBRL(advogado.recorrente)}</p>
                      </div>
                      <div className="bg-orange-500/10 p-2 rounded mt-2">
                        <p className="text-xs text-orange-300">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {advogado.horasGestao.toFixed(1)}h/mês de gestão necessária
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estagiário Card - RIGHT */}
                <div className="bg-white/5 border border-red-400/30 rounded-2xl p-6 space-y-4">
                  <h4 className="text-2xl font-bold text-red-400 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Contratação Interna – Estagiário
                  </h4>

                  <div className="space-y-3">
                    <div className="text-freelaw-textDim text-sm space-y-1.5">
                      <p className="font-semibold text-white mb-2">💰 Custos Diretos:</p>
                      <p>• Salário base: <span className="text-white/60">De {formatBRL(estagiario.faixaSalarial.min)} a {formatBRL(estagiario.faixaSalarial.max)}</span></p>
                      <p className="text-xs text-green-300 ml-4">→ Média utilizada: {formatBRL(estagiario.salarioBase)}</p>

                      <p className="font-semibold text-yellow-300 mt-3 mb-2">🔍 Custos Invisíveis:</p>
                      <p>• Encargos trabalhistas (36%): {formatBRL(estagiario.encargos)}</p>
                      <p>• Benefícios (VT, VR, plano): {formatBRL(estagiario.beneficios)}</p>
                      <p>• Infraestrutura (PC, software): {formatBRL(estagiario.infraestrutura)}</p>
                      <p>• Custo de turnover (médio): {formatBRL(estagiario.turnover)}</p>

                      <p className="font-semibold text-white mt-3 mb-2">⏱️ Gestão & Operação:</p>
                      <p>• Treinamento mensal (20h): {formatBRL(estagiario.treinamento)}</p>
                      <p>• Revisão 100% das peças: {formatBRL(estagiario.revisao)}</p>
                      <p>• Processo seletivo (5h): {formatBRL(estagiario.selecao)} <span className="text-yellow-400">(Mês 1)</span></p>
                      <p className="text-red-300 mt-2 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>Risco trabalhista + necessidade de supervisão constante</span>
                      </p>
                    </div>

                    <div className="border-t border-white/20 pt-3 space-y-2">
                      <div>
                        <p className="text-xs text-freelaw-textDim uppercase mb-1">CUSTO REAL - Mês 1</p>
                        <p className="text-2xl font-bold text-white">{formatBRL(estagiario.mes1)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-freelaw-textDim uppercase mb-1">CUSTO REAL - Recorrente</p>
                        <p className="text-2xl font-bold text-red-400">{formatBRL(estagiario.recorrente)}</p>
                      </div>
                      <div className="bg-red-500/10 p-2 rounded mt-2">
                        <p className="text-xs text-red-300">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {estagiario.horasGestao.toFixed(1)}h/mês de gestão necessária
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Freelaw Comparison Card */}
              <div className="bg-gradient-to-br from-freelaw-purple/20 to-freelaw-purpleLight/20 border-2 border-freelaw-purpleLight rounded-2xl p-6 space-y-6">
                <h4 className="text-2xl font-bold text-freelaw-purpleLight flex items-center gap-2 flex-wrap">
                  <Zap className="w-6 h-6" />
                  Freelaw - Plano {PLANOS_FREELAW[planoSelecionado].nome}
                  {valorPlano < estagiario.recorrente && valorPlano < advogado.recorrente && (
                    <span className="text-sm px-3 py-1 bg-green-500 text-white rounded-full flex items-center gap-1">
                      <TrendingDown className="w-4 h-4" />
                      Economia garantida
                    </span>
                  )}
                </h4>

                {/* Custo Mensal + Custo por Peça */}
                <div className="grid md:grid-cols-3 gap-4 bg-white/5 p-4 rounded-xl">
                  <div>
                    <p className="text-freelaw-textDim text-sm mb-1">💰 Investimento Mensal</p>
                    <p className="text-2xl font-bold text-white">{formatBRL(valorPlano)}</p>
                  </div>
                  <div>
                    <p className="text-freelaw-textDim text-sm mb-1">📊 Peças por Mês</p>
                    <p className="text-2xl font-bold text-freelaw-purpleLight">{PLANOS_FREELAW[planoSelecionado].pecasMes}</p>
                  </div>
                  <div>
                    <p className="text-freelaw-textDim text-sm mb-1">📄 Custo Médio/Peça</p>
                    <p className="text-2xl font-bold text-green-400">{formatBRL(PLANOS_FREELAW[planoSelecionado].custoMedioPeca)}</p>
                  </div>
                </div>

                {/* Comparação de Custos */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-sm text-freelaw-textDim mb-2">vs. Estagiário (custo real)</p>
                    {valorPlano < estagiario.recorrente ? (
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-bold">
                          Economia de {formatBRL(estagiario.recorrente - valorPlano)}/mês
                        </span>
                      </div>
                    ) : (
                      <div className="text-sm text-freelaw-textDim">
                        <p className="text-yellow-300 mb-2">Investimento {formatBRL(valorPlano - estagiario.recorrente)} maior</p>
                        <p className="text-xs">Mas veja os benefícios exclusivos abaixo ↓</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-sm text-freelaw-textDim mb-2">vs. Advogado (custo real)</p>
                    {valorPlano < advogado.recorrente ? (
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-bold">
                          Economia de {formatBRL(advogado.recorrente - valorPlano)}/mês
                        </span>
                      </div>
                    ) : (
                      <div className="text-sm text-freelaw-textDim">
                        <p className="text-yellow-300 mb-2">Investimento {formatBRL(valorPlano - advogado.recorrente)} maior</p>
                        <p className="text-xs">Mas veja os benefícios exclusivos abaixo ↓</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* ROI de Tempo */}
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/30 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-white font-bold mb-2">⏱️ ROI de Tempo: Zero Horas de Gestão</h5>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-freelaw-textDim">Estagiário exige:</p>
                          <p className="text-red-300 font-bold">{estagiario.horasGestao.toFixed(0)}h/mês de gestão</p>
                        </div>
                        <div>
                          <p className="text-freelaw-textDim">Advogado exige:</p>
                          <p className="text-orange-300 font-bold">{advogado.horasGestao.toFixed(0)}h/mês de gestão</p>
                        </div>
                      </div>
                      <div className="mt-3 bg-green-500/20 p-2 rounded">
                        <p className="text-green-300 font-bold flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          Com Freelaw: 0h de gestão = {formatBRL((estagiario.horasGestao * CUSTO_HORA_GERENTE))} economizados/mês
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card de Valor Agregado - aparece quando Freelaw é mais cara */}
                {(valorPlano > estagiario.recorrente || valorPlano > advogado.recorrente) && (
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-400/50 p-5 rounded-xl">
                    <h5 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-400" />
                      💎 Valor Agregado Exclusivo da Freelaw
                    </h5>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white"><strong>Equipe especializada</strong> de múltiplos advogados</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white"><strong>Zero risco</strong> trabalhista ou demandas CLT</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white"><strong>Escalabilidade</strong> instantânea sem contratação</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white"><strong>Qualidade garantida</strong> sem necessidade de revisão</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white"><strong>Sem gestão</strong> de pessoas, treinamento ou turnover</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white"><strong>Tecnologia inclusa:</strong> plataforma + IA + automação</span>
                      </div>
                    </div>
                    <div className="mt-4 bg-purple-500/20 p-3 rounded">
                      <p className="text-purple-200 text-xs">
                        💡 <strong>Investimento estratégico:</strong> O custo adicional se paga em produtividade, qualidade e crescimento escalável sem dor de cabeça.
                      </p>
                    </div>
                  </div>
                )}
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
