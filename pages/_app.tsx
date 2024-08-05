
import { AppProps } from 'next/app'
import { AppProvider } from '@/context/AppContext'
import { SearchProvider } from '@/context/SearchContext'
import { FavoritesProvider } from '@/context/FavoritesContext'
import Navbar from '@/layout/Navbar'
import '@fontsource/roboto-condensed';
import './globals.css'


const App = ({ Component, pageProps }: AppProps) => <>
    <AppProvider>
        <SearchProvider>
            <FavoritesProvider>
                <Navbar />
                <Component {...pageProps} />
            </FavoritesProvider>
        </SearchProvider>
    </AppProvider>
</>

export default App