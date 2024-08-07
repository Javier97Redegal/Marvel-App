import CharacterHeader from '@/components/CharacterHeader'
import ComicList from '@/components/ComicList'

const CharacterPage = ({
    params,
}: {
    params: { id: string }
}) => {
    const idAsNumber = Number(params.id)

    return <>
        <CharacterHeader id={idAsNumber}></CharacterHeader>
        <ComicList id={idAsNumber}></ComicList>
    </>
}

export default CharacterPage