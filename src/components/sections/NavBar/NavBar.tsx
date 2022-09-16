import styles from './NavBar.module.scss'
import { ReactComponent as Logo } from '../../../assets/icons/engine.svg'
import cl from 'classnames'
import { useEffect, FC } from 'react'
import PrimaryButton from '../../Elements/PrimaryButton/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import SecondaryButton from '../../Elements/SecondaryButton/SecondaryButton'
import { Routes } from '../../../utils/Routes'
import user from '../../../store/UserStore'

interface NavBarProps {
	isVisible: boolean
	setIsVisible?: (isVisible: boolean) => void
}

const NavBar: FC<NavBarProps> = ({ isVisible, setIsVisible }) => {
	useEffect(() => {
		const toggleVisibility = () => {
			if (setIsVisible) {
				if (window.pageYOffset > 80) {
					setIsVisible(true)
				} else {
					setIsVisible(false)
				}
			}
		}

		document.addEventListener('scroll', toggleVisibility)

		return () => {
			document.removeEventListener('scroll', toggleVisibility)
		}
	}, [setIsVisible])

	const navigate = useNavigate()

	function handleNavigateSignUp() {
		navigate(Routes.REGISTRATION)
	}

	function handleNavigateMain() {
		navigate(Routes.MAIN)
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	function handleNavigateCart() {
		navigate(Routes.CART)
	}

	function handleLogout() {
		user.setUser(null)
		user.setIsAuth(false)
		localStorage.removeItem('token')
		navigate(Routes.LOGIN)
	}

	function handleScrollToControls() {
		navigate(Routes.MAIN)

		// Scroll to controls, setTimeout needed for scroll to work if we are pressing button from another page,
		// for example, from cart page, with 0ms delay it is putting macrotask at the end of the queue, so it will
		// be executed when all other tasks are done
		setTimeout(() => {
			document.getElementById('controls')?.scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			})
		}, 0)
	}

	return (
		<nav className={cl(styles.container, { [styles.visible]: isVisible })}>
			<div className={styles['brand-container']} onClick={handleNavigateMain}>
				<Logo className={styles.logo} />
				<h1 className={styles.brand}>XEngine</h1>
			</div>
			<ul className={styles.links}>
				<li onClick={handleNavigateMain}>Home</li>
				<li onClick={handleScrollToControls}>Types</li>
				<li onClick={handleScrollToControls}>Brands</li>
				<li onClick={handleNavigateCart}>Your cart</li>
			</ul>
			{isVisible ? (
				<SecondaryButton
					title={user.isAuth ? 'Log out' : 'Sign up'}
					onClick={user.isAuth ? handleLogout : handleNavigateSignUp}
				/>
			) : (
				<PrimaryButton
					title={user.isAuth ? 'Log out' : 'Sign up'}
					onClick={user.isAuth ? handleLogout : handleNavigateSignUp}
				/>
			)}
		</nav>
	)
}

export default NavBar
