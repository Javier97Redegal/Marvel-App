import { QueryClient, QueryClientProvider } from 'react-query'
import { UseQueryWrapperProps } from './types'

const queryClient = new QueryClient()

const UseQueryWrapper = ({ children }: UseQueryWrapperProps) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

export default UseQueryWrapper