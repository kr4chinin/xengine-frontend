import { FC } from 'react'
import styles from './PrimaryButton.module.scss'
import { RotatingLines } from 'react-loader-spinner'

interface PrimaryButtonProps {
	title: string
	onClick: () => void
	isLoading?: boolean
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
	onClick,
	title,
	isLoading = false
}) => {
	return (
		<button
			className={styles['primary-btn']}
			onClick={onClick}
			disabled={isLoading}
		>
			<p>
				<RotatingLines width="25px" visible={isLoading} strokeColor="#f5f5f5" />
				{title}
			</p>
		</button>
	)
}

export default PrimaryButton
