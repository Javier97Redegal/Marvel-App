
import { AppProps } from 'next/app'
import { FavoritesProvider } from '@/context/FavoritesContext'
import { AppProvider } from '@/context/AppContext'
import Header from '@/layout/Header'


const App = ({ Component, pageProps }: AppProps) => <>
    <AppProvider>
        <FavoritesProvider>
            <Header />
            <Component {...pageProps} />
        </FavoritesProvider>
    </AppProvider>
</>

export default App