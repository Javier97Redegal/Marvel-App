import { CharacterViewProps } from './types'
import ComicList from '@/components/ComicList'
import CharacterHeader from '@/components/CharacterHeader'

const CharacterView = ({
    id
}: CharacterViewProps) => <>
        <CharacterHeader id={id}></CharacterHeader>
        <ComicList id={id}></ComicList>
    </>

export default CharacterView