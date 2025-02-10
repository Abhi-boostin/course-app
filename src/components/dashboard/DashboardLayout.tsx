"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "All Courses", href: "/" },
  { name: "My Courses", href: "/dashboard" },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen relative">
      <BackgroundPaths />
      <div className="flex h-16 items-center gap-4 border-b px-4 md:px-6 bg-background/80 backdrop-blur-sm">
        <Menu className="h-6 w-6 md:hidden" />
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
      <div className="p-4 md:p-6 relative z-10">
        {children}
      </div>
    </div>
  )
} 