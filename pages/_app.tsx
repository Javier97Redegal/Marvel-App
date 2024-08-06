import { AppProps } from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@/context/AppContext'
import UseQueryWrapper from '@/layout/UseQueryWrapper'
import Navbar from '@/layout/Navbar'
import '@fontsource/roboto-condensed'
import './globals.css'

const App = ({ Component, pageProps }: AppProps) => <>
    <AppProvider>
        <UseQueryWrapper>
            <Head>
                <title>Marvel App</title>
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </UseQueryWrapper>
    </AppProvider>
</>

export default App