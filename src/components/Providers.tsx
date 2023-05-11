'use client'

import { type ReactNode, type FC } from 'react'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
    <SessionProvider>{children}</SessionProvider>
  </ThemeProvider>
}

export default Providers
