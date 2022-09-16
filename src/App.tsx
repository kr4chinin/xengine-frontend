import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { check } from './api/userAPI'
import AppRouter from './components/AppRouter'
import user from './store/UserStore'

const queryClient = new QueryClient()

const App = () => {
	useEffect(() => {
		check().then(data => {
			user.setUser(data)
			user.setIsAuth(true)
		})
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
