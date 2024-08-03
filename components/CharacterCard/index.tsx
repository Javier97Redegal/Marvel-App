import { FC } from 'react'
import Link from 'next/link'
import { useFavorites } from '@/context/FavoritesContext'

const CharacterCard: FC<CharacterCardProps> = ({ character: {
    id,
    name,
    thumbnail: {
        path,
        extension,
    }
} }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites()
    const isFavorite = favorites.includes(id)

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(id)
        } else {
            addFavorite(id)
        }
    }

    if (name === undefined) return <>Loading...</>

    return <>
        <img src={`${path}.${extension}`} alt={name} />
        <h3><Link href={`/character/${id}`}>{name}</Link></h3>
        <button onClick={handleFavoriteClick}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    </>
}

export default CharacterCard