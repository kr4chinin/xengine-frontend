import { authRoutes, publicRoutes } from "../routes"
import { Routes, Route } from "react-router-dom"

const AppRouter = () => {

    const isAuth = true

    return (
        <Routes>
            {/* isAuth && authRoutes.map(... => ...) */}
            {publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
        </Routes>
    )
}

export default AppRouter