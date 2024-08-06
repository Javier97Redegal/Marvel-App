import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'
import styles from './index.module.css'

const Navbar = () => {
    const { favorites } = useApp()

    return <>
        <nav className={styles.header}>
            <Link href={{ pathname: '/', query: { mode: TYPES_OF_CHARACTER_LIST.TOTAL, q: '' } }} className={styles.logo} title='Go to start'>
                <img src={'/marvel-logo.png'} alt='Marvel Logo' />
            </Link>
            <Link href={{ pathname: '/', query: { mode: TYPES_OF_CHARACTER_LIST.FAVORITES, q: '' } }} className={styles.favorites} title='Go to favorites'>
                <img src={'/heart-default.png'} alt='Favorites' /> {favorites.length}
            </Link>
        </nav>
    </>
}

export default Navbar