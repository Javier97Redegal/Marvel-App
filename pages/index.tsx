import { useSearch } from '@/context/SearchContext'
import CharacterList from '@/components/CharacterList'
import SearchBar from '@/components/SearchBar'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'

const Home = () => {
    const { characters, isLoading } = useSearch()

    return <>
        <SearchBar type={TYPES_OF_CHARACTER_LIST.TOTAL} />
        <CharacterList
            isLoading={isLoading}
            list={characters}
        />
    </>
}

export default Home