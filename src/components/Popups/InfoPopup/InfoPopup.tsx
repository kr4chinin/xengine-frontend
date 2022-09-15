import { Children, FC } from 'react'
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup'
import styles from './InfoPopup.module.scss'

interface InfoPopupProps {
	onClose: () => void
	isOpened: boolean
	Icon: React.ReactNode
	title: string
	children: React.ReactNode
	width: string
	height: string
}

const InfoPopup: FC<InfoPopupProps> = ({
	isOpened,
	onClose,
	Icon,
	title,
	children,
	width,
	height
}) => {
	return (
		<OverlayingPopup isOpened={isOpened} onClose={onClose}>
			<section className={styles.container} style={{ width, height }}>
				<header>
					{Icon}
					<h3>{title}</h3>
				</header>
				<div className={styles.body}>{children}</div>
				<div className={styles['controls-container']}>
					<button className={styles['continue-btn']} onClick={onClose}>Continue</button>
				</div>
			</section>
		</OverlayingPopup>
	)
}

export default InfoPopup
