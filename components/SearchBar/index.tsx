import { useEffect, useState } from 'react'
import { useSearch } from '@/context/SearchContext'
import { useFavorites } from '@/context/FavoritesContext'
import { INPUT_PLACEHOLDER } from './constants'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'
import { SearchBarProps } from './types'

const SearchBar = ({ type }: SearchBarProps) => {
    const { searchTotal } = useSearch()
    const { searchFavorites } = useFavorites()
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            switch (true) {
                case type === TYPES_OF_CHARACTER_LIST.FAVORITES:
                    searchFavorites(inputValue)

                    break

                default:
                    searchTotal(inputValue)

                    break
            }
        }, 500)
        return () => clearTimeout(delayInputTimeoutId)
    }, [inputValue, 500])

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    return <>
        <input
            type='text'
            placeholder={INPUT_PLACEHOLDER}
            value={inputValue}
            onChange={handleInputChange}
        />
    </>
}

export default SearchBar