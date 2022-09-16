import { FC, useId } from 'react'
import styles from './SecondaryInput.module.scss'

interface SecondaryInputProps {
	label: string
	value: string | number
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type: string
	width?: string
	step?: number
}

const SecondaryInput: FC<SecondaryInputProps> = ({
	value,
	label,
	onChange,
	placeholder = 'Enter value...',
	type,
	width = '300px',
	step
}) => {
	const id = useId()

	return (
		<div className={styles.container}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				style={{ width }}
				step={step ? step : ''}
			/>
		</div>
	)
}

export default SecondaryInput
