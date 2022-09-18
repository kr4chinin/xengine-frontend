import styles from './CreateVehiclePopup.module.scss'
import vehicle from '../../../store/VehicleStore'
import React, { FC, useId, useState } from 'react'
import SecondaryInput from '../../Elements/SecondaryInput/SecondaryInput'
import { v4 } from 'uuid'
import { Icon } from '@iconify/react'
import { Icons } from '../../../utils/Icons'
import DialogPopup from '../Elements/DialogPopup/DialogPopup'
import { useMutation } from '@tanstack/react-query'
import { createVehicle } from '../../../api/vehicleAPI'
import InfoPopup from '../Elements/InfoPopup/InfoPopup'

interface CreateVehiclePopupProps {
	isOpened: boolean
	onClose: () => void
	openSuccessInterim: () => void
	openFailInterim: () => void
}

const CreateVehiclePopup: FC<CreateVehiclePopupProps> = ({
	isOpened,
	onClose,
	openFailInterim,
	openSuccessInterim
}) => {
	const idType = useId()
	const idBrand = useId()
	const idDescription = useId()
	const idCharacteristics = useId()
	const idFile = useId()

	const [typeId, setTypeId] = useState<number>(0)
	const [brandId, setBrandId] = useState<number>(0)
	const [name, setName] = useState('')
	const [price, setPrice] = useState<number>(0)
	const [description, setDescription] = useState('')
	const [info, setInfo] = useState<
		{ id: string; title: string; description: string }[]
	>([])
	const [file, setFile] = useState<File | null>(null)

	const [isValidationErrorOpen, setIsValidationErrorOpen] = useState(false)

	function handleChangeTypeId(e: React.ChangeEvent<HTMLSelectElement>) {
		setTypeId(Number(e.target.value))
	}

	function handleChangeBrandId(e: React.ChangeEvent<HTMLSelectElement>) {
		setBrandId(Number(e.target.value))
	}

	function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
		setName(e.target.value)
	}

	function handleChangePrice(e: React.ChangeEvent<HTMLInputElement>) {
		setPrice(Number(e.target.value))
	}

	function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setDescription(e.target.value)
	}

	function handleAddInfo(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		setInfo([...info, { title: '', description: '', id: v4() }])
	}

	function handleRemoveInfo(
		e: React.MouseEvent<HTMLButtonElement>,
		id: string
	) {
		e.preventDefault()
		setInfo(info.filter(i => i.id !== id))
	}

	function handleChangeInfo(key: string, value: string, id: string) {
		setInfo(info.map(i => (i.id === id ? { ...i, [key]: value } : i)))
	}

	function handleSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.files) {
			setFile(e.target.files[0])
		}
	}

	const { mutate: handleCreateVehicle } = useMutation(
		() =>
			createVehicle(
				name,
				price,
				description,
				brandId,
				typeId,
				JSON.stringify(info),
				file
			),
		{
			onSuccess: () => {
				openSuccessInterim()

				// Nullify all fields when vehicle created
				setName('')
				setPrice(0)
				setDescription('')
				setInfo([])
				setFile(null)
			},
			onError: () => {
				if (!typeId || !brandId || !name || !price || !description || !file) {
					handleOpenValidationError()
				}
				openFailInterim()
			}
		}
	)

	function handleAccept() {
		handleCreateVehicle()
		onClose()
	}

	function handleCancel() {
		// Nullify all fields when canceling creation
		setName('')
		setPrice(0)
		setDescription('')
		setInfo([])
		setFile(null)

		onClose()
	}

	function handleCloseValidationError() {
		setIsValidationErrorOpen(false)
	}

	function handleOpenValidationError() {
		setIsValidationErrorOpen(true)
	}

	// TODO: TEST VEHICLE CREATION, FIX BUGS, ADD INTERIM POP-UPS FOR SUCCESS/ERROR

	return (
		<>
			<DialogPopup
				isOpened={isOpened}
				onClose={onClose}
				title="Create vehicle"
				onAccept={handleAccept}
				onCancel={handleCancel}
			>
				<form className={styles.controls}>
					<div className={styles['selects-container']}>
						<div className={styles['select-container']}>
							<label htmlFor={idType}>Select a type</label>
							<select id={idType} onChange={handleChangeTypeId}>
								<option defaultChecked>Choose type</option>
								{vehicle.types.map(type => (
									<option key={type.id} value={type.id}>
										{type.name}
									</option>
								))}
							</select>
						</div>

						<div className={styles['select-container']}>
							<label htmlFor={idBrand}>Select a brand</label>
							<select id={idBrand} onChange={handleChangeBrandId}>
								<option defaultChecked>Choose brand</option>
								{vehicle.brands.map(brand => (
									<option key={brand.id} value={brand.id}>
										{brand.name}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className={styles['name-price-container']}>
						<SecondaryInput
							label="Enter vehicle name"
							placeholder="Enter a name..."
							value={name}
							onChange={handleChangeName}
							type="text"
						/>

						<SecondaryInput
							label="Enter vehicle price"
							placeholder="Enter a price..."
							value={price}
							onChange={handleChangePrice}
							type="number"
							step={500000}
						/>
					</div>

					<label htmlFor={idDescription}>Enter description</label>
					<textarea
						id={idDescription}
						placeholder="Enter a description..."
						value={description}
						onChange={handleChangeDescription}
					/>

					<label htmlFor={idFile}>Apply picture</label>
					<input
						type="file"
						onChange={handleSelectFile}
						className={styles['file-input']}
						id={idFile}
					/>

					<label htmlFor={idCharacteristics}>Apply characteristic</label>
					<div className={styles['info-container']} id={idCharacteristics}>
						{info.map(i => (
							<div className={styles['info-item']} key={i.id}>
								<SecondaryInput
									label="Title"
									value={i.title}
									onChange={e =>
										handleChangeInfo('title', e.target.value, i.id)
									}
									type="text"
								/>
								<SecondaryInput
									label="Description"
									value={i.description}
									onChange={e =>
										handleChangeInfo('description', e.target.value, i.id)
									}
									type="text"
								/>
								<button
									className={styles['delete-btn']}
									onClick={e => handleRemoveInfo(e, i.id)}
								>
									<Icon icon={Icons.TRASH_BIN} />
								</button>
							</div>
						))}
						<button
							className={styles['add-btn']}
							onClick={handleAddInfo}
							type="button"
						>
							Add new characteristic
						</button>
					</div>
				</form>
			</DialogPopup>

			<InfoPopup
				title="Failed to create new vehicle"
				isOpened={isValidationErrorOpen}
				onClose={handleCloseValidationError}
				width="610px"
				height="200px"
			>
				<p>
					You must specify <b>all</b> fields above (despite{' '}
					<b>characteristics</b> section) to successfully create a vehicle!
					Something is missing...
				</p>
			</InfoPopup>
		</>
	)
}

export default CreateVehiclePopup
