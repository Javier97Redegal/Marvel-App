import Link from 'next/link'
import { useFavorites } from '@/context/FavoritesContext'

const Header = () => {
    const { favorites } = useFavorites()

    return <>
        <header>
            <Link href="/">Marvel</Link>
            <Link href="/favorites">Favorites ({favorites.length})</Link>
        </header>
    </>
}

export default Header