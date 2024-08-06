import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LoadingPanel from '.'
import { loadingMessage } from './constants'
import { LoadingPanelProps } from './types'

describe('LoadingPanel tests', () => {
    const mockProps: LoadingPanelProps = {
        type: 'loading',
    }

    it('displays the correct loading message', () => {
        const { asFragment } = render(<LoadingPanel {...mockProps} />)

        expect(screen.getByText(loadingMessage[mockProps.type])).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })
})
