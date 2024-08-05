import { createContext, useState, ReactNode, useContext } from 'react'
import { AppContextProps } from './types'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [appMode, setAppMode] = useState<TYPES_OF_CHARACTER_LIST>(TYPES_OF_CHARACTER_LIST.TOTAL)

    return <>
        <AppContext.Provider value={{ appMode, setAppMode }}>
            {children}
        </AppContext.Provider>
    </>
}

export const useApp = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('useApp must be used within a FavoritesProvider')
    }

    return context
}