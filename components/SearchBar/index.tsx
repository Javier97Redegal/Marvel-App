import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSearch } from '@/context/SearchContext'
import { useFavorites } from '@/context/FavoritesContext'
import { INPUT_PLACEHOLDER } from './constants'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'
import styles from './index.module.css'
import { SearchBarProps } from './types'

const SearchBar = ({ type, results }: SearchBarProps) => {
    const { searchTotal } = useSearch()
    const { searchFavorites } = useFavorites()
    const router = useRouter()
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('q') || ''

    const sendInput = (type: TYPES_OF_CHARACTER_LIST) => {
        switch (type) {
            case TYPES_OF_CHARACTER_LIST.FAVORITES:
                searchFavorites(searchQuery)

                break

            default:
                searchTotal(searchQuery)

                break
        }
    }

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        router.push(`?${new URLSearchParams({
            q: event.currentTarget.value
        })}`)
    }

    useEffect(() => {
        sendInput(type)
    }, [])

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            sendInput(type)
        }, 500)

        return () => clearTimeout(delayInputTimeoutId)
    }, [searchQuery, 500])

    return <div className={styles.searchbar}>
        <div className={styles.input}>
            <img src={'/glass-icon.png'} />
            <input
                type='text'
                value={searchQuery}
                placeholder={INPUT_PLACEHOLDER}
                onChange={handleInputChange}
            />
        </div>
        <small>{results} Result{results === 0 ? '' : 's'}</small>
    </div>
}

export default SearchBar