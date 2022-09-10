import { FC, useId } from 'react'
import styles from './PrimaryInput.module.scss'

interface PrimaryInputProps {
	placeholder: string
	type: string
	value: string
	label: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PrimaryInput: FC<PrimaryInputProps> = ({
	onChange,
	value,
	placeholder,
	type,
	label
}) => {
	const id = useId()

	return (
		<div className={styles.container}>
			<label className={styles.lable} htmlFor={id}>
				{label}
			</label>
			<input
				className={styles['primary-input']}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				type={type}
			/>
		</div>
	)
}

export default PrimaryInput
