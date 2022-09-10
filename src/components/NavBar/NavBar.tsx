import styles from './NavBar.module.scss'
import { ReactComponent as Logo } from '../../assets/icons/engine.svg'
import cl from 'classnames'
import { useEffect, FC } from 'react'

interface NavBarProps {
    isVisible: boolean
    setIsVisible: (isVisible: boolean) => void
}

const NavBar: FC<NavBarProps> = ({isVisible, setIsVisible}) => {

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 80) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		document.addEventListener('scroll', toggleVisibility)

		return () => {
			document.removeEventListener('scroll', toggleVisibility)
		}
	}, [setIsVisible])

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
			<button className={styles['sign-up-btn']}>Sign up</button>
		</nav>
	)
}

export default NavBar
