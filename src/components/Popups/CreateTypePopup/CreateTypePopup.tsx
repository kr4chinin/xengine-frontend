import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { createType } from '../../../api/vehicleAPI'
import SecondaryInput from '../../Elements/SecondaryInput/SecondaryInput'
import DialogPopup from '../Elements/DialogPopup/DialogPopup'
import styles from './CreateTypePopup.module.scss'
import vehicle from '../../../store/VehicleStore'

interface CreateTypePopupProps {
	isOpened: boolean
	onClose: () => void
	openSuccessInterim: () => void
	openFailInterim: () => void
}

const CreateTypePopup: FC<CreateTypePopupProps> = ({
	isOpened,
	onClose,
	openFailInterim,
	openSuccessInterim
}) => {
	const [name, setName] = useState('')

	const { mutate: mutateType } = useMutation(() => createType(name), {
		onSuccess: data => {
			openSuccessInterim()
			const currentTypes = vehicle.types
			vehicle.setTypes([...currentTypes, data])
			setName('')
		},
		onError: () => {
			openFailInterim()
		}
	})

	function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
		setName(e.target.value)
	}

	function handleAccept() {
		mutateType()
		onClose()
	}

	function handleCancel() {
		setName('')
		onClose()
	}

	return (
		<DialogPopup
			isOpened={isOpened}
			onClose={onClose}
			title="Create type"
			onAccept={handleAccept}
			onCancel={handleCancel}
		>
			<div className={styles.container}>
				<SecondaryInput
					value={name}
					onChange={handleChangeName}
					label="Type name"
					placeholder="Enter type name..."
					type="text"
				/>
			</div>
		</DialogPopup>
	)
}

export default CreateTypePopup
