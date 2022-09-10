import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import MainPage from './pages/MainPage/MainPage'

const App = () => {
	return (
		<BrowserRouter>
            <AppRouter />
		</BrowserRouter>
	)
}

export default App
