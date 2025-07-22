import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

export const metadata = {
  title: "Tanvir Sarao",
  description: "Personal portfolio website.",
}

import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
