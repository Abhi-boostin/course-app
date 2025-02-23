"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type Theme = "light" | "dark" | "system"
type Attribute = "class" | "data-theme"

interface Props {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
  attribute?: Attribute
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  attribute = "class",
  ...props
}: Props) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
} 