import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './index.module.css'
import { SearchBarProps } from './types'
import { INPUT_PLACEHOLDER } from './constants'

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
    }, [inputValue, mode, router])

    return <div className={styles.searchbar}>
        <div className={styles.input}>
            <img src={'/glass-icon.png'} alt='Glass icon' />
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