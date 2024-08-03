import { createContext, useState, ReactNode, useContext } from 'react'

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined)

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<FavoritesProps>([])

    const addFavorite = (id: number) => {
        setFavorites([...favorites, id])
    }

    const removeFavorite = (id: number) => {
        setFavorites(favorites.filter(favId => favId !== id))
    }

    return <>
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    </>
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext)

    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider')
    }

    return context
}