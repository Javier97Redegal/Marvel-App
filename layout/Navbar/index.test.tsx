import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '.'
import { useApp } from '@/context/AppContext'

jest.mock('@/context/AppContext', () => ({
    useApp: jest.fn()
}))

jest.mock('next/link', () => jest.fn(({ children, title }) => <a title={title}>{children}</a>))

describe('Navbar test', () => {
    const mockUseApp = {
        favorites: [{ id: 1 }, { id: 2 }]
    }

    beforeEach(() => {
        (useApp as jest.Mock).mockReturnValue(mockUseApp)
    })

    it('renders the navbar with the correct elements', () => {
        const { asFragment } = render(<Navbar />)

        const logoLink = screen.getByTitle('Go to start')
        const favoritesLink = screen.getByTitle('Go to favorites')

        expect(logoLink).toBeInTheDocument()
        expect(favoritesLink).toBeInTheDocument()
        expect(favoritesLink).toHaveTextContent('2')
        expect(asFragment()).toMatchSnapshot()
    })
})

