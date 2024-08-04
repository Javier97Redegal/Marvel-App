import CharacterCard from '@/components/CharacterCard'
import { CharacterListProps } from './types'

const CharacterList = ({
    isLoading,
    list
}: CharacterListProps) => {
    if (isLoading) return <p>Loading...</p>

    return !list.length ?
        <p>No results</p> :
        <ul>
            {list.map((character, key) => (
                <li key={key}>
                    <CharacterCard {...character} />
                </li>
            ))}
        </ul>
}

export default CharacterList