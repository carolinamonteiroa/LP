import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import demoContent from "@/content/demo.json"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: demoContent.meta.title,
  description: demoContent.meta.description,
  keywords: demoContent.meta.keywords,
  openGraph: {
    title: demoContent.meta.title,
    description: demoContent.meta.description,
    images: [demoContent.meta.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: demoContent.meta.title,
    description: demoContent.meta.description,
    images: [demoContent.meta.ogImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
