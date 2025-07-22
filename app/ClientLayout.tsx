"use client"

import type React from "react"

import Navbar from "./components/Navbar"
import { Providers } from "./providers"
import ParticleBackground from "./components/ParticleBackground"
import { usePathname } from "next/navigation"

function ConditionalNavbar() {
  const pathname = usePathname()

  if (pathname === "/telus")  {
    return null
  }

  return <Navbar />
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <ParticleBackground />
      {/* Only show navbar if not on telusit page */}
      <ConditionalNavbar />
      {children}
    </Providers>
  )
}
