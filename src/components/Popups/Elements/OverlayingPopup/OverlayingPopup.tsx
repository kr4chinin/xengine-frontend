import { FC } from 'react'
import Portal from '../../../Portal/Portal'
import styles from './OverlayingPopup.module.scss'

interface OverlayingPopupProps {
	children: React.ReactNode
	onClose: () => void
	isOpened: boolean
}

const OverlayingPopup: FC<OverlayingPopupProps> = ({
	children,
	isOpened,
	onClose
}) => {
	if (!isOpened) {
		return null
	}

	return (
		<Portal onClose={onClose}>
			<div className={styles.container} role="dialog">
				<div
					className={styles.overlay}
					role="button"
					tabIndex={0}
					onClick={onClose}
				/>
				<div className={styles.content}>{children}</div>
			</div>
		</Portal>
	)
}

export default OverlayingPopup
