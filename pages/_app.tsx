
import { AppProps } from 'next/app'
import { FavoritesProvider } from '@/context/FavoritesContext'
import { SearchProvider } from '@/context/SearchContext'
import Header from '@/layout/Header'


const App = ({ Component, pageProps }: AppProps) => <>
    <SearchProvider>
        <FavoritesProvider>
            <Header />
            <Component {...pageProps} />
        </FavoritesProvider>
    </SearchProvider>
</>

export default App