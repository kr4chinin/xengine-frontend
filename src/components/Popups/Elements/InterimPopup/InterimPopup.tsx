import { FC, useEffect, useRef } from 'react'
import Portal from '../../../Portal/Portal'
import styles from './InterimPopup.module.scss'
import cl from 'classnames'
import { Icon } from '@iconify/react'
import { Icons } from '../../../../utils/Icons'
import { useClickOutside } from '../../../../hooks/useClickOutside'

interface InterimPopupProps {
	onClose: () => void
	isOpened: boolean
	width?: string
	children: React.ReactNode
	background?: string
}

const InterimPopup: FC<InterimPopupProps> = ({
	onClose,
	isOpened,
	width = '300px',
	background = '#5878A9',
	children
}) => {
	const mainRef = useRef(null)

	// We are using mainRef twice because we don't have a triggerRef
	useClickOutside(mainRef, mainRef, onClose)

	useEffect(() => {
		if (isOpened) {
			setTimeout(() => onClose(), 1500)
		}
	}, [isOpened, onClose])

	return (
		<Portal onClose={onClose}>
			<div
				onClick={onClose}
				className={cl(styles.container, { [styles.active]: isOpened })}
				style={{ width, background }}
				role="dialog"
			>
				<Icon icon={Icons.INFO} />
				{children}
			</div>
		</Portal>
	)
}

export default InterimPopup
