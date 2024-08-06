import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '@/components/SearchBar'
import { SearchBarProps } from '@/components/SearchBar/types'
import { useRouter } from 'next/navigation'
import { INPUT_PLACEHOLDER } from '@/components/SearchBar/constants'

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))


beforeAll(() => {
    jest.useFakeTimers()
})

afterAll(() => {
    jest.useRealTimers()
})

describe('SearchBar', () => {
    const mockProps: SearchBarProps = {
        mode: 'search',
        query: ''
    }

    const mockPush = jest.fn()
    const mockRouter = { push: mockPush }

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue(mockRouter)
    })

    it('renders search bar with initial state', () => {
        const { asFragment } = render(<SearchBar {...mockProps} />)

        expect(screen.getByPlaceholderText(INPUT_PLACEHOLDER)).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('updates input value on change', () => {
        render(<SearchBar {...mockProps} />)

        const input = screen.getByPlaceholderText(INPUT_PLACEHOLDER)
        fireEvent.change(input, { target: { value: 'Spider-Man' } })

        expect(input).toHaveValue('Spider-Man')
    })

    it('sets input value based on query prop', () => {
        const queryProps = { ...mockProps, query: 'Iron Man' }
        render(<SearchBar {...queryProps} />)

        const input = screen.getByPlaceholderText(INPUT_PLACEHOLDER)
        expect(input).toHaveValue('Iron Man')
    })

    it('calls router.push with correct query string after input change', () => {
        render(<SearchBar {...mockProps} />)

        const input = screen.getByPlaceholderText(INPUT_PLACEHOLDER)
        fireEvent.change(input, { target: { value: 'Hulk' } })

        expect(mockPush).not.toHaveBeenCalled()

        jest.advanceTimersByTime(500)

        expect(mockPush).toHaveBeenCalledWith('?mode=search&q=Hulk')
    })
})
