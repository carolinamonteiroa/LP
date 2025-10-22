"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Youtube, Mail, Phone } from "lucide-react"

interface FooterProps {
  content: {
    tagline: string
    links: {
      product: Array<{ label: string; href: string }>
      company: Array<{ label: string; href: string }>
      legal: Array<{ label: string; href: string }>
    }
    social: {
      linkedin: string
      instagram: string
      youtube: string
    }
    contact: {
      email: string
      phone: string
    }
    copyright: string
  }
}

export function Footer({ content }: FooterProps) {
  const socialIcons = [
    { Icon: Linkedin, href: content.social.linkedin, label: "LinkedIn" },
    { Icon: Instagram, href: content.social.instagram, label: "Instagram" },
    { Icon: Youtube, href: content.social.youtube, label: "YouTube" },
  ]

  return (
    <footer className="bg-neutral-dark text-white py-16 no-print">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-brand-secondary to-white bg-clip-text text-transparent mb-4">
                Freelaw
              </h3>
              <p className="text-white/70 mb-6 max-w-sm">
                {content.tagline}
              </p>
              <div className="flex gap-3">
                {socialIcons.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              {content.links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-brand-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {content.links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-brand-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 mb-6">
              {content.links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-brand-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-sm text-white/60">
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-2 hover:text-brand-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {content.contact.email}
              </a>
              <a
                href={`tel:${content.contact.phone}`}
                className="flex items-center gap-2 hover:text-brand-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {content.contact.phone}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-white/10 text-center text-white/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>{content.copyright}</p>
        </motion.div>
      </div>
    </footer>
  )
}
