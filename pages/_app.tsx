import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppProvider } from '@/context/AppContext'
import Navbar from '@/layout/Navbar'
import '@fontsource/roboto-condensed';
import './globals.css'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => <>
    <QueryClientProvider client={queryClient}>
        <AppProvider>
            <Navbar />
            <Component {...pageProps} />
        </AppProvider>
    </QueryClientProvider>
</>

export default App