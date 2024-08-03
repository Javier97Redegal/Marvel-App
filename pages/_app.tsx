
import { AppProps } from 'next/app'
import { FavoritesProvider } from '@/context/FavoritesContext'
import Header from '@/components/Header'


const MyApp = ({ Component, pageProps }: AppProps) => (
    <FavoritesProvider>
        <Header />
        <Component {...pageProps} />
    </FavoritesProvider>
)

export default MyApp