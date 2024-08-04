import { useFavorites } from '@/context/FavoritesContext'
import CharacterList from '@/components/CharacterList'
import SearchBar from '@/components/SearchBar'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'

const FavoritesPage = () => {
    const { favorites } = useFavorites()

    return <>
        <SearchBar type={TYPES_OF_CHARACTER_LIST.FAVORITES} />
        <CharacterList
            isLoading={false}
            list={favorites}
        />
    </>
}

export default FavoritesPage