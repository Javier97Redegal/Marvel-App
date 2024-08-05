import useCharacter from '@/hooks/useCharacter'
import { useFavorites } from '@/context/FavoritesContext'
import LoadingPanel from '@/components/LoadingPanel'
import styles from './index.module.css'
import { CharacterHeaderProps } from './types'

const CharacterHeader = ({
    id
}: CharacterHeaderProps) => {
    const { favoritesIds, addFavorite, removeFavorite } = useFavorites()
    const { character } = useCharacter(id)
    const isFavorite = favoritesIds.includes(Number(id))

    const handleFavoriteClick = () => {
        console.log(true);
    }

    if (!character) return <LoadingPanel />

    return <header className={styles.header}>
        <div className={styles.inner}>
            <div className={styles.image} style={{ backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})` }}></div>
            <div className={styles.body}>
                <h1>
                    {character.name}
                    <button onClick={handleFavoriteClick}>
                        {isFavorite ? <img src={'/heart-default.png'} alt='Remove from Favorites' title='Remove from Favorites' /> : <img src={'/heart-alt.png'} alt='Add to Favorites' title='Add to Favorites' />}
                    </button>
                </h1>
                <p>{character.description}</p>
            </div>
        </div>
    </header>
}

export default CharacterHeader