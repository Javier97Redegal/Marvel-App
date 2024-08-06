import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { useQuery } from 'react-query'
import CharacterList from '@/components/CharacterList'
import { CharacterListProps } from '@/components/CharacterList/types'
import { useApp } from '@/context/AppContext'
import { TYPES_OF_CHARACTER_LIST } from '@/constants'

jest.mock('react-query', () => ({
    useQuery: jest.fn()
}))

jest.mock('@/context/AppContext', () => ({
    useApp: jest.fn()
}))

jest.mock('@/utils/MarvelAPI', () => ({
    getCharacters: jest.fn()
}))

jest.mock('@/components/CharacterCard', () => jest.fn(({ id }: { id: number }) => <div>CharacterCard Mock {id}</div>))
jest.mock('@/components/LoadingPanel', () => jest.fn(({ type }) => <div>LoadingPanel Mock: {type}</div>))

describe('CharacterList test', () => {
    const mockProps: CharacterListProps = {
        mode: TYPES_OF_CHARACTER_LIST.TOTAL,
        query: ''
    }

    const charactersData = {
        data: {
            results: [
                { id: '1', name: 'Spider-Man', thumbnail: { path: 'path/to/spiderman', extension: 'jpg' } },
                { id: '2', name: 'Iron Man', thumbnail: { path: 'path/to/ironman', extension: 'jpg' } }
            ]
        }
    }

    const mockUseApp = {
        favorites: [{ id: '1', name: 'Spider-Man', thumbnail: { path: 'path/to/spiderman', extension: 'jpg' } }],
    }

    beforeEach(() => {
        (useApp as jest.Mock).mockReturnValue(mockUseApp)
    })

    it('renders loading panel when loading', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: null, status: 'loading' })

        const { asFragment } = render(<CharacterList {...mockProps} />)

        expect(screen.getByText('LoadingPanel Mock: loading')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders loading panel when error', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: null, status: 'error' })

        const { asFragment } = render(<CharacterList {...mockProps} />)

        expect(screen.getByText('LoadingPanel Mock: error')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders character cards when data is loaded', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: charactersData, status: 'success' })

        const { asFragment } = render(<CharacterList {...mockProps} />)

        expect(screen.getByText('2 Results')).toBeInTheDocument()
        expect(screen.getByText('CharacterCard Mock 1')).toBeInTheDocument()
        expect(screen.getByText('CharacterCard Mock 2')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders favorites when mode is FAVORITES', () => {
        const favoriteProps = { ...mockProps, mode: TYPES_OF_CHARACTER_LIST.FAVORITES }

        render(<CharacterList {...favoriteProps} />)

        expect(screen.getByText('1 Result')).toBeInTheDocument()
        expect(screen.getByText('Favorites')).toBeInTheDocument()
        expect(screen.getByText('CharacterCard Mock 1')).toBeInTheDocument()
    })

    it('filters favorites based on query', () => {
        const favoriteProps = { ...mockProps, mode: TYPES_OF_CHARACTER_LIST.FAVORITES, query: 'man' }

        render(<CharacterList {...favoriteProps} />)

        expect(screen.getByText('1 Result')).toBeInTheDocument()
        expect(screen.getByText('CharacterCard Mock 1')).toBeInTheDocument()
    })

    it('displays no results when favorites do not match query', () => {
        const favoriteProps = { ...mockProps, mode: TYPES_OF_CHARACTER_LIST.FAVORITES, query: 'batman' }

        render(<CharacterList {...favoriteProps} />)

        expect(screen.getByText('0 Results')).toBeInTheDocument()
        expect(screen.getByText('LoadingPanel Mock: success')).toBeInTheDocument()
    })
})