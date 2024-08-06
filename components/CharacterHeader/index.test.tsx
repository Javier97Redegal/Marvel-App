import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { useQuery } from 'react-query'
import CharacterHeader from '.'
import { CharacterHeaderProps } from '@/components/CharacterHeader/types'
import { useApp } from '@/context/AppContext'
import { handleFavoriteButton } from '@/helpers'

jest.mock('react-query', () => ({
    useQuery: jest.fn()
}))

jest.mock('@/utils/MarvelAPI', () => ({
    getCharacter: jest.fn()
}))

jest.mock('@/helpers/index.tsx', () => ({
    handleFavoriteButton: jest.fn()
}))

jest.mock('@/context/AppContext', () => ({
    useApp: jest.fn()
}))

jest.mock('@/components/LoadingPanel', () => jest.fn(({ type }) => <div>LoadingPanel Mock: {type}</div>))

describe('CharacterHeader tests', () => {
    const mockProps: CharacterHeaderProps = { id: 12345 }
    const characterData = {
        data: {
            results: [
                {
                    id: '12345',
                    name: 'Spider-Man',
                    description: 'Friendly neighborhood Spider-Man.',
                    thumbnail: {
                        path: 'path/to/spiderman',
                        extension: 'jpg'
                    }
                }
            ]
        }
    }

    const mockUseApp = {
        favorites: [{ id: '12345' }],
        addFavorite: jest.fn(),
        removeFavorite: jest.fn()
    }

    beforeEach(() => {
        (useApp as jest.Mock).mockReturnValue(mockUseApp)
    })

    it('renders loading panel when loading', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: null, status: 'loading' })

        const { asFragment } = render(<CharacterHeader {...mockProps} />)

        expect(screen.getByText('LoadingPanel Mock: loading')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders loading panel when error', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: null, status: 'error' })

        const { asFragment } = render(<CharacterHeader {...mockProps} />)

        expect(screen.getByText('LoadingPanel Mock: error')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders character details when data is loaded', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: characterData, status: 'success' })

        const { asFragment } = render(<CharacterHeader {...mockProps} />)

        expect(screen.getByText('Spider-Man')).toBeInTheDocument()
        expect(screen.getByText('Friendly neighborhood Spider-Man.')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('handles favorite button click', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: characterData, status: 'success' })

        render(<CharacterHeader {...mockProps} />)

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(handleFavoriteButton).toHaveBeenCalled()
    })
})