import { HandleFavoriteButton } from './types'

export const handleFavoriteButton = ({ character, isFavorite, removeFavorite, addFavorite }: HandleFavoriteButton) => {
    if (isFavorite) {
        removeFavorite(character)
    } else {
        addFavorite(character)
    }
}