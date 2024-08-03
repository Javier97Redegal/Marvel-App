type FavoritesProps = number[]

type FavoritesContextProps = {
    favorites: FavoritesProps
    addFavorite: (id: number) => void
    removeFavorite: (id: number) => void
}