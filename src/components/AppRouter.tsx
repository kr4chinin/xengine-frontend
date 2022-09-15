import { authRoutes, publicRoutes } from '../routes'
import { Routes, Route, Navigate } from 'react-router-dom'
import user from '../store/UserStore'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	)
})

export default AppRouter
