import styles from './NavBar.module.scss'
import { ReactComponent as Logo } from '../../assets/images/engine.svg'

const NavBar = () => {
	return (
		<nav className={styles.container}>
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
