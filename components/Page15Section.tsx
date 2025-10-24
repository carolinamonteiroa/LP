"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Smartphone, Zap, Link, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Page15Section() {
  const [copied, setCopied] = useState(false)

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText('https://app.freelaw.work/contratante/cadastro')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Falha ao copiar:', err)
    }
  }
  return (
    <section
      id="page15"
      className="min-h-screen bg-gradient-to-br from-freelaw-bg via-purple-900/20 to-freelaw-bg px-4 py-20 relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-freelaw-purpleLight/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Question */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-freelaw-purpleLight/20 border border-freelaw-purpleLight/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-freelaw-purpleLight" />
              <span className="text-freelaw-purpleLight font-semibold text-sm">
                Momento de decisão
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Pronto para </span>
              <span className="bg-gradient-to-r from-freelaw-purpleLight to-purple-400 bg-clip-text text-transparent">
                revolucionar
              </span>
              <br />
              <span className="text-white">seu escritório?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-freelaw-textDim leading-relaxed"
            >
              Chegou a hora de investir em{" "}
              <span className="text-freelaw-purpleLight font-semibold">tecnologia</span> e{" "}
              <span className="text-purple-400 font-semibold">inovação</span> para transformar
              a forma como você trabalha.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              {[
                { icon: Zap, text: "Automação inteligente" },
                { icon: Sparkles, text: "Mais tempo para o que importa" },
                { icon: ArrowRight, text: "Crescimento escalável" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-freelaw-purpleLight to-purple-500 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-lg">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Glowing effect around QR code */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-freelaw-purpleLight to-purple-500 rounded-3xl blur-2xl opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* QR Code container */}
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/qrcode-freelaw.png"
                    alt="QR Code Freelaw"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center space-y-3"
            >
              <div className="flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5 text-freelaw-purpleLight" />
                <span className="text-freelaw-purpleLight font-semibold">
                  Escaneie para começar
                </span>
              </div>

              <p className="text-freelaw-textDim">
                Use a câmera do seu celular para acessar<br />
                <span className="text-white font-semibold">nossa plataforma</span>
              </p>

              {/* Copy URL Button */}
              <motion.button
                onClick={handleCopyUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-freelaw-purpleLight to-purple-500 text-white font-semibold rounded-full flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-lg hover:shadow-freelaw-purpleLight/50"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Link copiado!</span>
                  </>
                ) : (
                  <>
                    <Link className="w-5 h-5" />
                    <span>Copiar link desta página</span>
                  </>
                )}
              </motion.button>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="pt-4"
              >
                <ArrowRight className="w-6 h-6 text-freelaw-purpleLight mx-auto rotate-90" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            O futuro do seu escritório começa agora.
          </p>
          <p className="text-freelaw-textDim text-lg">
            Junte-se aos escritórios que já estão na vanguarda da advocacia moderna.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
