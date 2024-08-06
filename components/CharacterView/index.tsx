import { CharacterViewProps } from './types'
import ComicList from '@/components/ComicList'
import CharacterHeader from '@/components/CharacterHeader'

const CharacterView = ({
    id
}: CharacterViewProps) => {
    const idAsNumber = Number(id)

    return <>
        <CharacterHeader id={idAsNumber}></CharacterHeader>
        <ComicList id={idAsNumber}></ComicList>
    </>
}

export default CharacterView