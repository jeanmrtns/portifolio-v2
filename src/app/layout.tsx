import { ReactNode } from 'react'
import { Inter as FontSans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import '../app/globals.css'

import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Cmdk } from '@/components/cmdk'
import { ThemeProvider } from '@/providers/theme-provider'
import { Metadata } from 'next'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Jean Martins',
  description: 'Desenvolvedor de Softwares',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="min-h-screen w-full flex flex-col justify-between items-center">
              <Header />

              <div>
                {children}
                <Cmdk />
              </div>

              <Footer />
            </div>

            <div className="block md:hidden">
              <AppSidebar />
            </div>
          </SidebarProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
