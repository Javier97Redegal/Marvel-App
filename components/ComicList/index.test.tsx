import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { useQuery } from 'react-query'
import ComicList from '.'
import { ComicListProps } from './types'

jest.mock('react-query', () => ({
    useQuery: jest.fn()
}))

jest.mock('@/utils/MarvelAPI', () => ({
    getComicsFromCharacter: jest.fn()
}))

jest.mock('@/components/ComicCard', () => jest.fn(({ title }: { title: string }) => <div>{title}</div>))
jest.mock('@/components/LoadingPanel', () => jest.fn(({ type }: { type: string }) => <div>LoadingPanel Mock: {type}</div>))

describe('ComicList tests', () => {
    const mockProps: ComicListProps = { id: 12345 }
    const comicsData = {
        data: {
            results: [
                { id: '1', title: 'Comic 1' },
                { id: '2', title: 'Comic 2' }
            ]
        }
    }

    it('renders loading panel when loading', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: null, status: 'loading' })

        const { asFragment } = render(<ComicList {...mockProps} />)

        expect(screen.getByText('LoadingPanel Mock: loading')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders loading panel when error', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: null, status: 'error' })

        const { asFragment } = render(<ComicList {...mockProps} />)

        expect(screen.getByText('LoadingPanel Mock: error')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders list of comics when data is loaded', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: comicsData, status: 'success' })

        const { asFragment } = render(<ComicList {...mockProps} />)

        expect(screen.getByText('Comic 1')).toBeInTheDocument()
        expect(screen.getByText('Comic 2')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders loading panel when there are no comics', () => {
        (useQuery as jest.Mock).mockReturnValue({ data: { data: { results: [] } }, status: 'success' })

        const { asFragment } = render(<ComicList {...mockProps} />)

        expect(screen.getByText('LoadingPanel Mock: success')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })
})
