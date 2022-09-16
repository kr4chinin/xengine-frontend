import { FC } from 'react'
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup'
import styles from './DialogPopup.module.scss'

interface DialogPopupProps {
	isOpened: boolean
	onClose: () => void
	children: React.ReactNode
	title: string
    onAccept: () => void
    onCancel: () => void
}

const DialogPopup: FC<DialogPopupProps> = ({
	isOpened,
	onClose,
	children,
    title,
    onAccept,
    onCancel
}) => {

	return (
		<OverlayingPopup isOpened={isOpened} onClose={onClose}>
			<div className={styles.container}>
				<h3>{title}</h3>
                {children}
				<div className={styles.controls}>
                    <button onClick={onAccept} className={styles.accept}>Accept</button>
                    <button onClick={onCancel} className={styles.cancel}>Cancel</button>
                </div>
			</div>
		</OverlayingPopup>
	)
}

export default DialogPopup
