import styles from './AddToCartButton.module.scss'
import { Icon } from '@iconify/react'
import React, { FC } from 'react'
import { Icons } from '../../../utils/Icons'
import { observer } from 'mobx-react-lite'
import user from '../../../store/UserStore'
import { useMutation } from '@tanstack/react-query'
import { addToCart } from '../../../api/cartAPI'

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
		if (user.user?.id) {
			alert('Not authorized')
		}

		const { mutate: handleAddToCart } = useMutation(() =>
			addToCart(user.user!.id, vehicleId)
		)

		function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
			e.stopPropagation()
			if (user.user?.id) {
				handleAddToCart()
			} else {
				alert('Not authorized')
			}
		}

		return (
			<button
				onClick={handleClick}
				className={styles['add-btn']}
				style={{ top, left, width, height }}
			>
				<Icon icon={Icons.SHOPPING_CART_ADD} className={styles['cart-icon']} />
			</button>
		)
	}
)

export default AddToCartButton
