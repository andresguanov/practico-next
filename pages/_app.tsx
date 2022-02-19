import AppContext from '@context/AppContext'
import Header from '@components/Header'
import useInitialState from '@hooks/useInitialState'
import type { AppProps } from 'next/app'
import '@styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const initialState: AppContextInterface = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>

  )
}

export default MyApp
