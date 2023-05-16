import { useEffect } from 'react'
import { type AppProps } from 'next/app'
import logScreenView from '@/lib/AnalyticsUtils'

function MyApp ({ Component, pageProps, router }: AppProps): JSX.Element {
  useEffect(() => {
    // Analytics
    router.events.on('routeChangeComplete', logScreenView)
    logScreenView(window.location.pathname)
    return () => {
      router.events.off('routeChangeComplete', logScreenView)
    }
  }, [])

  return (
    <Component {...pageProps} key={router.route} />
  )
}

export default MyApp
