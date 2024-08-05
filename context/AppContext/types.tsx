import { TYPES_OF_CHARACTER_LIST } from '@/constants'

export interface AppContextProps {
    appMode: TYPES_OF_CHARACTER_LIST
    setAppMode: (mode: TYPES_OF_CHARACTER_LIST) => void
}