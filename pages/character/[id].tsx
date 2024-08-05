import { useRouter } from 'next/router'
import CharacterView from '@/components/CharacterView'

const CharacterPage = () => {
    const router = useRouter()
    const { id } = router.query

    return <CharacterView id={id as string}></CharacterView>
}

export default CharacterPage