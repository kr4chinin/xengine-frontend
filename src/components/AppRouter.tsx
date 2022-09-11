import { authRoutes, publicRoutes } from '../routes'
import { Routes, Route, Navigate } from 'react-router-dom'

const AppRouter = () => {
	const isAuth = true

	return (
		<Routes>
			{isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))
            }
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
            <Route path="*" element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default AppRouter
