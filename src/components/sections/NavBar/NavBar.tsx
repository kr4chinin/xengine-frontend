import styles from './NavBar.module.scss'
import { ReactComponent as Logo } from '../../../assets/icons/engine.svg'
import cl from 'classnames'
import { useEffect, FC } from 'react'
import PrimaryButton from '../../elements/PrimaryButton/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import SecondaryButton from '../../elements/SecondaryButton/SecondaryButton'
import { Routes } from '../../../utils/Routes'

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
			} else {
				return
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
	}

	function handleNavigateCart() {
		navigate(Routes.CART)
	}

	return (
		<nav className={cl(styles.container, { [styles.visible]: isVisible })}>
			<div className={styles['brand-container']} onClick={handleNavigateMain}>
				<Logo className={styles.logo} />
				<h1 className={styles.brand}>XEngine</h1>
			</div>
			<ul className={styles.links}>
				<li onClick={handleNavigateMain}>Home</li>
				<li>Types</li>
				<li>Brands</li>
				<li onClick={handleNavigateCart}>Your cart</li>
			</ul>
			{isVisible ? (
				<SecondaryButton title="Sign up" onClick={handleNavigateSignUp} />
			) : (
				<PrimaryButton title="Sign up" onClick={handleNavigateSignUp} />
			)}
		</nav>
	)
}

export default NavBar
