import CharacterCard from '@/components/CharacterCard'
import { CharacterListProps } from './types'

const CharacterList = ({ list }: CharacterListProps) => <>
    <ul>
        {list.map((character, key) => (
            <li key={key}>
                <CharacterCard {...character} />
            </li>
        ))}
    </ul>
</>

export default CharacterList