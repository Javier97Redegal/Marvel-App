import CharacterCard from '@/components/CharacterCard'
import LoadingPanel from '@/components/LoadingPanel'
import styles from './index.module.css'
import { CharacterListProps } from './types'

const CharacterList = ({
    isLoading,
    list
}: CharacterListProps) => {
    if (isLoading) return <LoadingPanel />

    return !!list.length ?
        <ul className={styles.list}>
            {list.map((character, key) => {
                const delay = { '--delay': `${key * .05}s` } as React.CSSProperties;

                return <li key={key} style={delay}>
                    <CharacterCard {...character} />
                </li>
            })}
        </ul> :
        <div className='search-loader'>No results</div>
}

export default CharacterList