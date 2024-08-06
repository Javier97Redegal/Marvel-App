import { useQuery } from 'react-query'
import { getComicsFromCharacter } from '@/utils/MarvelAPI'
import ComicCard from '@/components/ComicCard'
import LoadingPanel from '@/components/LoadingPanel'
import styles from './index.module.css'
import { ComicListProps } from './types'
import { DEFAULT_COMIC_LIMIT } from '@/constants'

const ComicList = ({
    id
}: ComicListProps) => {
    const fetchComics = async () => await getComicsFromCharacter({ id, params: { limit: DEFAULT_COMIC_LIMIT } })
    const { data, status } = useQuery(`comics-${id}`, fetchComics)

    if (status !== 'success') return <LoadingPanel type={status} />

    const comics = data.data.results

    return <>
        <div className={styles.comics}>
            <h2 className={styles.header}>Comics</h2>
            {!!comics.length ?
                <ul>
                    {comics.map(comic => (
                        <li key={comic.id}>
                            <ComicCard {...comic}></ComicCard>
                        </li>
                    ))}
                </ul> :
                <LoadingPanel type='success' />
            }
        </div>
    </>
}

export default ComicList