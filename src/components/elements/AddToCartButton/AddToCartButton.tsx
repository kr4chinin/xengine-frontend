import styles from './AddToCartButton.module.scss'
import { Icon } from '@iconify/react'
import React, { FC, useState } from 'react'
import { Icons } from '../../../utils/Icons'
import { observer } from 'mobx-react-lite'
import user from '../../../store/UserStore'
import { useMutation } from '@tanstack/react-query'
import { addToCart } from '../../../api/cartAPI'
import AddToCartWarning from '../../Popups/AddToCartWarning/AddToCartWarning'
import InterimPopup from '../../Popups/InterimPopup/InterimPopup'

interface AddToCartButtonProps {
	top?: string
	left?: string
	width?: string
	height?: string
	vehicleId: number
}

const AddToCartButton: FC<AddToCartButtonProps> = observer(
	({
		top = '20px',
		left = '20px',
		width = '45px',
		height = '45px',
		vehicleId
	}) => {
		const [isWarningOpen, setIsWarningOpen] = useState(false)
		const [isInterimSuccessOpen, setIsInterimSuccessOpen] = useState(false)

		function handleCloseWarning() {
			setIsWarningOpen(false)
		}

		const { mutate: handleAddToCart } = useMutation(
			() => addToCart(user.user!.id, vehicleId),
			{
				onSuccess: () => {
					setIsInterimSuccessOpen(true)
				}
			}
		)

		function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
			e.stopPropagation()
			if (user.user?.id) {
				handleAddToCart()
			} else {
				setIsWarningOpen(true)
			}
		}

		function handleInterimSuccessClose() {
			setIsInterimSuccessOpen(false)
		}

		return (
			<>
				<button
					onClick={handleClick}
					className={styles['add-btn']}
					style={{ top, left, width, height }}
				>
					<Icon
						icon={Icons.SHOPPING_CART_ADD}
						className={styles['cart-icon']}
					/>
				</button>

				<AddToCartWarning
					isOpened={isWarningOpen}
					onClose={handleCloseWarning}
				/>

				<InterimPopup
					isOpened={isInterimSuccessOpen}
					onClose={handleInterimSuccessClose}

				>
					<p>Vehicle added to cart!</p>
				</InterimPopup>
			</>
		)
	}
)

export default AddToCartButton
