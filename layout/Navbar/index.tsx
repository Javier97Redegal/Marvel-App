import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { useFavorites } from '@/context/FavoritesContext'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'
import styles from './index.module.css'

const Navbar = () => {
    const { setAppMode } = useApp()
    const { favoritesIds } = useFavorites()

    return <>
        <nav className={styles.header}>
            <Link onClick={() => setAppMode(TYPES_OF_CHARACTER_LIST.TOTAL)} href={{ pathname: '/' }} className={styles.logo} title='Go to start'>
                <img src={'/marvel-logo.png'} alt='Marvel Logo' />
            </Link>
            <Link onClick={() => setAppMode(TYPES_OF_CHARACTER_LIST.FAVORITES)} href={{ pathname: '/' }} className={styles.favorites} title='Go to favorites'>
                <img src={'/heart-default.png'} alt='Favorites' /> {favoritesIds.length}
            </Link>
        </nav>
    </>
}

export default Navbar