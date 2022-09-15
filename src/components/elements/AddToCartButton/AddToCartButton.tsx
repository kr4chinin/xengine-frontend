import styles from './AddToCartButton.module.scss'
import { Icon } from '@iconify/react'
import React, { FC, useState } from 'react'
import { Icons } from '../../../utils/Icons'
import { observer } from 'mobx-react-lite'
import user from '../../../store/UserStore'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addToCart, checkIsInCart, deleteFromCart } from '../../../api/cartAPI'
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

		const [isInterimAddOpen, setIsInterimAddOpen] = useState(false)
		const [isInterimDeleteOpen, setIsInterimDeleteOpen] = useState(false)

		const [isInCart, setIsInCart] = useState(false)

		const { refetch } = useQuery<boolean>(
			['check-cart', user.user?.id, vehicleId],
			() => checkIsInCart(user.user?.id || -1, vehicleId),
			{
				onSuccess: data => {
					setIsInCart(data)
				},
				enabled: user.user?.id !== undefined
			}
		)

		const { mutate: handleAddToCart } = useMutation(
			() => addToCart(user.user!.id, vehicleId),
			{
				onSuccess: () => {
					setIsInterimAddOpen(true)
					refetch()
				}
			}
		)

		const { mutate: handleDeleteFromCart } = useMutation(
			() => deleteFromCart(user.user!.id, vehicleId),
			{
				onSuccess: () => {
					setIsInterimDeleteOpen(true)
					refetch()
				}
			}
		)

		function handleAdd(e: React.MouseEvent<HTMLButtonElement>) {
			e.stopPropagation()
			if (user.user?.id) {
				handleAddToCart()
			} else {
				setIsWarningOpen(true)
			}
		}

		function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
			e.stopPropagation()
			if (user.user?.id) {
				handleDeleteFromCart()
			} else {
				setIsWarningOpen(true)
			}
		}

		function handleInterimAddClose() {
			setIsInterimAddOpen(false)
		}

		function handleInterimDeleteClose() {
			setIsInterimDeleteOpen(false)
		}

        function handleCloseWarning() {
			setIsWarningOpen(false)
		}

		return (
			<>
				<button
					onClick={isInCart ? handleDelete : handleAdd}
					className={styles['add-btn']}
					style={{ top, left, width, height }}
				>
					<Icon
						icon={
							isInCart ? Icons.SHOPPING_CART_DELETE : Icons.SHOPPING_CART_ADD
						}
						className={styles['cart-icon']}
					/>
				</button>

				<AddToCartWarning
					isOpened={isWarningOpen}
					onClose={handleCloseWarning}
				/>

				<InterimPopup
					isOpened={isInterimAddOpen}
					onClose={handleInterimAddClose}
				>
					<p>Vehicle added to cart!</p>
				</InterimPopup>

				<InterimPopup
					isOpened={isInterimDeleteOpen}
					onClose={handleInterimDeleteClose}
					background="#CA3142"
					width="350px"
				>
					<p>Vehicle removed from cart!</p>
				</InterimPopup>
			</>
		)
	}
)

export default AddToCartButton
