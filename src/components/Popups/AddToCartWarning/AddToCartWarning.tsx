import { FC } from 'react'
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup'
import styles from './AddToCartWarning.module.scss'
import { Link } from 'react-router-dom'
import { Routes } from '../../../utils/Routes'
import { Icon } from '@iconify/react'
import { Icons } from '../../../utils/Icons'
import InfoPopup from '../InfoPopup/InfoPopup'

interface AddToCartWarningProps {
	onClose: () => void
	isOpened: boolean
}

const AddToCartWarning: FC<AddToCartWarningProps> = ({ isOpened, onClose }) => {
	return (
		<InfoPopup
			isOpened={isOpened}
			onClose={onClose}
			title="Failed to add item to cart"
			Icon={<Icon icon={Icons.CROSS} onClick={onClose} />}
			height="227px"
			width="648px"
		>
			<p>
				<b>Unauthorized</b> users can not add items to cart. Press{' '}
				<Link
					className={styles.link}
					to={Routes.REGISTRATION}
					onClick={onClose}
				>
					here
				</Link>{' '}
				if you don't have an account yet and want to <b>create</b> one or{' '}
				<Link className={styles.link} to={Routes.LOGIN} onClick={onClose}>
					here
				</Link>{' '}
				if you already have an account and want to <b>log in</b>.
			</p>
		</InfoPopup>
	)
}

export default AddToCartWarning
