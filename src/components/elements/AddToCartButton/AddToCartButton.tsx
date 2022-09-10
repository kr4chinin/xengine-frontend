import styles from './AddToCartButton.module.scss'
import { Icon } from '@iconify/react'
import { FC } from 'react'
import { Icons } from '../../../utils/Icons'

interface AddToCartButtonProps {
	top?: string
	left?: string
	width?: string
	height?: string
}

const AddToCartButton: FC<AddToCartButtonProps> = ({
	top = '20px',
	left = '20px',
	width = '45px',
	height = '45px'
}) => {
	return (
		<button className={styles['add-btn']} style={{ top, left, width, height }}>
			<Icon icon={Icons.SHOPPING_CART_ADD} className={styles['cart-icon']} />
		</button>
	)
}

export default AddToCartButton
