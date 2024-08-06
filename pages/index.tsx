import { useSearchParams } from 'next/navigation'
import CharacterList from '@/components/CharacterList'
import SearchBar from '@/components/SearchBar'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'

const Home = () => {
    const searchParams = useSearchParams()
    const searchMode = searchParams.get('mode') || TYPES_OF_CHARACTER_LIST.TOTAL
    const searchQuery = searchParams.get('q') || ''

    return <>
        <SearchBar mode={searchMode} query={searchQuery} />
        <CharacterList mode={searchMode} query={searchQuery} />
    </>
}

export default Home