import styles from './NavBar.module.scss'
import { ReactComponent as Logo } from '../../assets/icons/engine.svg'
import cl from 'classnames'
import { useEffect, FC } from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import SecondaryButton from '../SecondaryButton/SecondaryButton'

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

	function handleSignUp() {
		navigate('/registration')
	}

	return (
		<nav className={cl(styles.container, { [styles.visible]: isVisible })}>
			<div className={styles['brand-container']}>
				<Logo className={styles.logo} />
				<h1 className={styles.brand}>XEngine</h1>
			</div>
			<ul className={styles.links}>
				<li>Home</li>
				<li>Types</li>
				<li>Brands</li>
				<li>Your cart</li>
			</ul>
			{isVisible ? (
				<SecondaryButton title="Sign up" onClick={handleSignUp} />
			) : (
				<PrimaryButton title="Sign up" onClick={handleSignUp} />
			)}
		</nav>
	)
}

export default NavBar
