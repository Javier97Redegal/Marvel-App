import Link from 'next/link'
import { useFavorites } from '@/context/FavoritesContext'

const Header = () => {

    const { favoritesIds } = useFavorites()
    return <>
        <header>
            <Link href={{
                pathname: '/'
            }}>Marvel</Link>
            <Link href={{
                pathname: '/favorites'
            }}>Favorites ({favoritesIds.length})</Link>
        </header>
    </>
}

export default Header