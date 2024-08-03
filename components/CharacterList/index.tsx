import { FC, useState, useEffect } from 'react'
import { getCharactersMarvelAPI } from '@/utils/MarvelAPI'
import CharacterCard from '@/components/CharacterCard'

const CharacterList: FC = () => {
    const [characters, setCharacters] = useState(Array.apply(null, Array(50)).map(() => {
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
            const response = await getCharactersMarvelAPI({
                params: {
                    limit: 50,
                },
            })

            setCharacters(response.data.results)
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

export default CharacterList