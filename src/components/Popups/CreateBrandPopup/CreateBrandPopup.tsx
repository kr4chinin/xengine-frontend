import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { createBrand } from '../../../api/vehicleAPI'
import SecondaryInput from '../../Elements/SecondaryInput/SecondaryInput'
import DialogPopup from '../Elements/DialogPopup/DialogPopup'
import styles from './CreateBrandPopup.module.scss'
import vehicle from '../../../store/VehicleStore'

interface CreateBrandPopupProps {
	isOpened: boolean
	onClose: () => void
	openSuccessInterim: () => void
	openFailInterim: () => void
}

const CreateBrandPopup: FC<CreateBrandPopupProps> = ({
	isOpened,
	onClose,
	openFailInterim,
	openSuccessInterim
}) => {
	const [name, setName] = useState('')

	const { mutate: mutateBrand } = useMutation(() => createBrand(name), {
		onSuccess: data => {
			const currentBrands = vehicle.brands
			vehicle.setBrands([...currentBrands, data])
			openSuccessInterim()
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
		mutateBrand()
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
			title="Create brand"
			onAccept={handleAccept}
			onCancel={handleCancel}
		>
			<div className={styles.container}>
				<SecondaryInput
					value={name}
					onChange={handleChangeName}
					label="Brand name"
					placeholder="Enter brand name..."
					type="text"
				/>
			</div>
		</DialogPopup>
	)
}

export default CreateBrandPopup
