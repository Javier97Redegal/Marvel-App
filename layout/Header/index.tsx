import Link from 'next/link'
import { useFavorites } from '@/context/FavoritesContext'

const Header = () => {

    const { favoritesIds } = useFavorites()
    return <>
        <header>
            <Link href="/">Marvel</Link>
            <Link href="/favorites">Favorites ({favoritesIds.length})</Link>
        </header>
    </>
}

export default Header