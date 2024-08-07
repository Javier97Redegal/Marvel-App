
import CharacterList from '@/components/CharacterList'
import SearchBar from '@/components/SearchBar'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'

const Home = ({
    searchParams,
}: {
    searchParams?: { [key: string]: string }
}) => {
    const searchMode = searchParams?.mode || TYPES_OF_CHARACTER_LIST.TOTAL
    const searchQuery = searchParams?.q || ''

    return <>
        <SearchBar mode={searchMode} query={searchQuery} />
        <CharacterList mode={searchMode} query={searchQuery} />
    </>
}

export default Home