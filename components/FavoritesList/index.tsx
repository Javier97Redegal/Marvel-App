import { FC, useState, useEffect } from 'react'
import { getCharacterMarvelAPI } from '@/utils/MarvelAPI'
import { useFavorites } from '@/context/FavoritesContext'
import CharacterCard from '@/components/CharacterCard'

const FavoritesList: FC = () => {
    const { favorites } = useFavorites()
    const [characters, setCharacters] = useState(Array.apply(null, Array(favorites.length)).map(() => {
        return {
            id: 0,
            name: undefined,
            thumbnail: {
                path: '',
                extension: '',
            }
        }
    }))

    useEffect(() => {
        const fetchCharacters = async () => {
            const promises = await Promise.all(favorites.map(favorite => new Promise((resolve) => {
                resolve(getCharacterMarvelAPI({
                    id: favorite,
                    params: {
                        limit: 50,
                    },
                }))
            })))
            const response = await promises.map(character => character.data.results[0])

            setCharacters(response)
        }

        fetchCharacters()
    }, [])

    return <>
        <ul>
            {characters.map((character, key) => (
                <li key={key}>
                    <CharacterCard character={character} />
                </li>
            ))}
        </ul>
    </>
}

export default FavoritesList