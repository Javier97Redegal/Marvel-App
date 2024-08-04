
import { AppProps } from 'next/app'
import { FavoritesProvider } from '@/context/FavoritesContext'
import Header from '@/layout/Header'


const App = ({ Component, pageProps }: AppProps) => <>
    <FavoritesProvider>
        <Header />
        <Component {...pageProps} />
    </FavoritesProvider>
</>

export default App