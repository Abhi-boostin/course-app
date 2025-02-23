"use client"

import * as React from "react"

interface Props {
  children: React.ReactNode
}

export function ThemeProvider({ children }: Props) {
  return <>{children}</>
} 