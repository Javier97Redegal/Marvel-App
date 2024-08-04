import { useFavorites } from '@/context/FavoritesContext'
import CharacterList from '@/components/CharacterList'

const FavoritesPage = () => {
    const { favorites } = useFavorites()

    return <>
        <CharacterList list={favorites} />
    </>
}

export default FavoritesPage