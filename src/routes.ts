import AdminPage from "./pages/AdminPage/AdminPage"
import AuthPage from "./pages/AuthPage/AuthPage"
import CartPage from "./pages/CartPage/CartPage"
import MainPage from "./pages/MainPage/MainPage"
import { Routes } from "./utils/Routes"
import VehiclePage from "./pages/VehiclePage/VehiclePage"

export const authRoutes = [
    {
        path: Routes.ADMIN,
        Component: AdminPage
    },
    {
        path: Routes.CART,
        Component: CartPage
    }
]

export const publicRoutes = [
    {
        path: Routes.MAIN,
        Component: MainPage
    },
    {
        path: Routes.LOGIN,
        Component: AuthPage
    },
    {
        path: Routes.REGISTRATION,
        Component: AuthPage
    },
    {
        path: Routes.DEVICE + '/:id',
        Component: VehiclePage
    }
]