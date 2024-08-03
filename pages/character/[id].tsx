import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useFavorites } from '@/context/FavoritesContext'
import { getCharacterMarvelAPI, getComicsMarvelAPI } from '@/utils/MarvelAPI'

const CharacterDetail = () => {
    const { addFavorite, removeFavorite, favorites } = useFavorites()
    const router = useRouter()
    const { id } = router.query
    const currentCharacter = id as unknown as number
    const [character, setCharacter] = useState(null)
    const [comics, setComics] = useState([])
    const isFavorite = favorites.includes(Number(id))

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await getCharacterMarvelAPI({
                id: currentCharacter,
            })

            setCharacter(response.data.results[0])
        }

        const fetchComics = async () => {
            const response = await getComicsMarvelAPI({
                id: currentCharacter,
                params: {
                    limit: 20
                }
            })

            setComics(response.data.results)
        }

        if (id) {
            fetchCharacter()
            fetchComics()
        }
    }, [id])

    if (!character) return <>Loading...</>

    return <>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <h1>{character.name}</h1>
        <p>{character.description}</p>
        <button onClick={() => (isFavorite ? removeFavorite(character.id) : addFavorite(character.id))}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        {comics.length && <>
            <h2>Comics</h2>
            <ul>
                {comics.map(comic => (
                    <li key={comic.id}>{comic.title}</li>
                ))}
            </ul>
        </>}
    </>
}

export default CharacterDetail