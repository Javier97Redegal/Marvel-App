import { useApp } from '@/context/AppContext'
import { useSearch } from '@/context/SearchContext'
import { useFavorites } from '@/context/FavoritesContext'
import CharacterList from '@/components/CharacterList'
import SearchBar from '@/components/SearchBar'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'
import styles from './index.module.css'

const Home = () => {
    const { appMode } = useApp()
    const { characters, isLoading } = useSearch()
    const { favorites } = useFavorites()

    switch (appMode) {
        case TYPES_OF_CHARACTER_LIST.FAVORITES:
            return <>
                <h2 className={styles.header}>Favorites</h2>
                <SearchBar type={appMode} results={favorites.length} />
                <CharacterList
                    isLoading={false}
                    list={favorites}
                />
            </>

        default:
            return <>
                <SearchBar type={appMode} results={characters.length} />
                <CharacterList
                    isLoading={isLoading}
                    list={characters}
                />
            </>
    }
}

export default Home