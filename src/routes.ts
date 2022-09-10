import AuthPage from "./pages/AuthPage/AuthPage"
import CartPage from "./pages/CartPage/CartPage"
import MainPage from "./pages/MainPage/MainPage"
import { Routes } from "./utils/Routes"

export const authRoutes = []

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
        path: Routes.CART,
        Component: CartPage
    }
]