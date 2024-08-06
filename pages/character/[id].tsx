import { useRouter } from 'next/router'
import CharacterHeader from '@/components/CharacterHeader'
import ComicList from '@/components/ComicList'

const CharacterPage = () => {
    const router = useRouter()
    const { id } = router.query
    const idAsNumber = Number(id)

    return <>
        <CharacterHeader id={idAsNumber}></CharacterHeader>
        <ComicList id={idAsNumber}></ComicList>
    </>
}

export default CharacterPage