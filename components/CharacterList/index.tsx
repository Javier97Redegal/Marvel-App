import CharacterCard from '@/components/CharacterCard'
import { CharacterListProps } from './types'

const CharacterList = ({
    isLoading,
    list
}: CharacterListProps) => {
    if (isLoading) return <p>Loading...</p>

    return !!list.length ?
        <ul>
            {list.map((character, key) => (
                <li key={key}>
                    <CharacterCard {...character} />
                </li>
            ))}
        </ul> :
        <p>No results</p>
}

export default CharacterList