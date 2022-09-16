import { FC } from 'react'
import styles from './SecondaryButton.module.scss'

interface SecondaryButtonProps {
	title: string
	onClick: () => void
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ title, onClick }) => {
	return (
		<button className={styles['secondary-btn']} onClick={onClick}>
			{title}
		</button>
	)
}

export default SecondaryButton
