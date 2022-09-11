import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'

const queryClient = new QueryClient()

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
