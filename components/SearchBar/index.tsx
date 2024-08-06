import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { INPUT_PLACEHOLDER } from './constants'
import styles from './index.module.css'
import { SearchBarProps } from './types'

const SearchBar = ({
    mode,
    query,
}: SearchBarProps) => {
    const router = useRouter()
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    useEffect(() => {
        setInputValue(query)
    }, [query])

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            router.push(`?${new URLSearchParams({
                mode,
                q: inputValue
            })}`)
        }, 500)

        return () => clearTimeout(delayInputTimeoutId)
    }, [inputValue, 500])

    return <div className={styles.searchbar}>
        <div className={styles.input}>
            <img src={'/glass-icon.png'} />
            <input
                type='text'
                value={inputValue}
                placeholder={INPUT_PLACEHOLDER}
                onChange={handleInputChange}
            />
        </div>
    </div>
}

export default SearchBar