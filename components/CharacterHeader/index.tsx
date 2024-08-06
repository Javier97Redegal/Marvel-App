import { useQuery } from 'react-query'
import { getCharacter } from '@/utils/MarvelAPI'
import { handleFavoriteButton } from '@/helpers'
import { useApp } from '@/context/AppContext'
import LoadingPanel from '@/components/LoadingPanel'
import styles from './index.module.css'
import { CharacterHeaderProps } from './types'

const CharacterHeader = ({
    id
}: CharacterHeaderProps) => {
    const { favorites, addFavorite, removeFavorite } = useApp()
    const fetchCharacter = async () => await getCharacter({ id })
    const { data, status } = useQuery(`character-${id}`, fetchCharacter)
    const isFavorite = favorites.map(favorite => favorite.id).includes(id)

    if (status !== 'success') return <LoadingPanel type={status} />

    const character = data.data.results[0]

    return <header className={styles.header}>
        <div className={styles.inner}>
            <div className={styles.image} style={{ backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})` }}></div>
            <div className={styles.body}>
                <h1>
                    {character.name}
                    <button onClick={() => handleFavoriteButton({ character, isFavorite, addFavorite, removeFavorite })}>
                        {isFavorite ? <img src={'/heart-default.png'} alt='Remove from Favorites' title='Remove from Favorites' /> : <img src={'/heart-alt.png'} alt='Add to Favorites' title='Add to Favorites' />}
                    </button>
                </h1>
                <p>{character.description}</p>
            </div>
        </div>
    </header>
}

export default CharacterHeader