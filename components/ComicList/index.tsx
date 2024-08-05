import useCharacter from '@/hooks/useCharacter'
import ComicCard from '@/components/ComicCard'
import LoadingPanel from '@/components/LoadingPanel'
import styles from './index.module.css'
import { ComicListProps } from './types'

const ComicList = ({
    id
}: ComicListProps) => {
    const { comics } = useCharacter(id)

    if (!comics) return <LoadingPanel />

    return <div className={styles.comics}>
        <h2 className={styles.header}>Comics</h2>
        {!!comics.length && <>
            <ul>
                {comics.map(comic => (
                    <li key={comic.id}>
                        <ComicCard {...comic}></ComicCard>
                    </li>
                ))}
            </ul>
        </>}
    </div>
}

export default ComicList