import { FC, useEffect } from 'react'
import styles from './SideBar.module.scss'
import { ReactComponent as Home } from '../../assets/icons/home.svg'
import { ReactComponent as Cart } from '../../assets/icons/cart.svg'
import { ReactComponent as GitHub } from '../../assets/icons/github.svg'
import cl from 'classnames'

interface SideBarProps {
	isVisible: boolean
	setIsVisible: (isVisible: boolean) => void
}

const SideBar: FC<SideBarProps> = ({ isVisible, setIsVisible }) => {
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

	return (
		<nav className={styles.container}>
			<ul className={cl(styles.body, { [styles.hidden]: !isVisible })}>
				<li>
					<Cart />
				</li>
				<li>
					<Home />
				</li>
				<li>
					<GitHub />
				</li>
			</ul>
		</nav>
	)
}

export default SideBar
