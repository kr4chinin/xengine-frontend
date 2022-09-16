import { FC, useEffect, useState } from 'react'
import styles from './SideBar.module.scss'
import { ReactComponent as Home } from '../../../assets/icons/home.svg'
import { ReactComponent as Cart } from '../../../assets/icons/cart.svg'
import { ReactComponent as GitHub } from '../../../assets/icons/github.svg'
import { ReactComponent as Cog } from '../../../assets/icons/cog.svg'
import user from '../../../store/UserStore'
import cl from 'classnames'
import { useNavigate } from 'react-router-dom'
import AddToCartWarning from '../../Popups/AddToCartWarning/AddToCartWarning'

interface SideBarProps {
	isVisible: boolean
	setIsVisible: (isVisible: boolean) => void
}

const SideBar: FC<SideBarProps> = ({ isVisible, setIsVisible }) => {
	const navigate = useNavigate()
	const [isCartWarningOpen, setIsCartWarningOpen] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
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

	function handleCloseCartWarning() {
		setIsCartWarningOpen(false)
	}

	function handleScrollHome() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	function handleNavigateToCart() {
		if (user.isAuth) {
			navigate('/cart')
		} else {
			setIsCartWarningOpen(true)
		}
	}

	function handleGitHub() {
		window.open('https://github.com/kr4chinin', '_blank')
	}

	function navigateToAdminPanel() {
		navigate('/admin')
	}

	return (
		<nav className={styles.container}>
			<ul className={cl(styles.body, { [styles.hidden]: !isVisible })}>
				<li onClick={handleNavigateToCart}>
					<Cart />
				</li>
				<li onClick={handleScrollHome}>
					<Home />
				</li>
				<li onClick={handleGitHub}>
					<GitHub />
				</li>
				<li
					onClick={navigateToAdminPanel}
					className={styles.admin}
					style={{ display: user.user?.role === 'ADMIN' ? '' : 'none' }}
				>
					<Cog />
				</li>
			</ul>
			<AddToCartWarning
				isOpened={isCartWarningOpen}
				onClose={handleCloseCartWarning}
			/>
		</nav>
	)
}

export default SideBar
