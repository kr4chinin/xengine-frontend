import { Icon } from '@iconify/react'
import { useState } from 'react'
import HorizontalLine from '../../components/Elements/HorizontalLine/HorizontalLine'
import PrimaryButton from '../../components/Elements/PrimaryButton/PrimaryButton'
import CreateBrandPopup from '../../components/Popups/CreateBrandPopup/CreateBrandPopup'
import CreateTypePopup from '../../components/Popups/CreateTypePopup/CreateTypePopup'
import CreateVehiclePopup from '../../components/Popups/CreateVehiclePopup/CreateVehiclePopup'
import InterimPopup from '../../components/Popups/Elements/InterimPopup/InterimPopup'
import NavBar from '../../components/Sections/NavBar/NavBar'
import { Icons } from '../../utils/Icons'
import styles from './AdminPage.module.scss'

const AdminPage = () => {
	const [isVisible, setIsVisible] = useState(false)

	const [isCreateTypeOpen, setIsCreateTypeOpen] = useState(false)
	const [isCreateBrandOpen, setIsCreateBrandOpen] = useState(false)
	const [isCreateVehicleOpen, setIsCreateVehicleOpen] = useState(false)

	const [isCreateTypeSuccessOpen, setIsCreateTypeSuccessOpen] = useState(false)
	const [isCreateBrandSuccessOpen, setIsCreateBrandSuccessOpen] =
		useState(false)
	const [isCreateVehicleSuccessOpen, setIsCreateVehicleSuccessOpen] =
		useState(false)

	const [isCreateTypeFailOpen, setIsCreateTypeFailOpen] = useState(false)
	const [isCreateBrandFailOpen, setIsCreateBrandFailOpen] = useState(false)
	const [isCreateVehicleFailOpen, setIsCreateVehicleFailOpen] = useState(false)

	return (
		<>
			<NavBar isVisible={isVisible} setIsVisible={setIsVisible} />
			<HorizontalLine marginTop="200px" />
			<div className={styles.header}>
				<Icon icon={Icons.ADMIN_PANEL} />
				<h2>Admin panel</h2>
			</div>
			<section className={styles.body}>
				<h2>What you want to do?</h2>
				<div className={styles['controls-container']}>
					<PrimaryButton
						onClick={handleOpenCreateType}
						title="Create new type"
					/>
					<PrimaryButton
						onClick={handleOpenCreateBrand}
						title="Create new brand"
					/>
					<PrimaryButton
						onClick={handleOpenCreateVehicle}
						title="Create new vehicle"
					/>
				</div>
			</section>

			<CreateTypePopup
				isOpened={isCreateTypeOpen}
				onClose={handleCloseCreateType}
				openSuccessInterim={handleOpenCreateTypeSuccess}
				openFailInterim={handleOpenCreateTypeFail}
			/>
			<InterimPopup
				isOpened={isCreateTypeSuccessOpen}
				onClose={handleCloseCreateTypeSuccess}
				width="360px"
			>
				Type created successfully!
			</InterimPopup>
			<InterimPopup
				isOpened={isCreateTypeFailOpen}
				onClose={handleCloseCreateTypeFail}
				background="#CA3142"
				width="340px"
			>
				Failed to create new type!
			</InterimPopup>

			<CreateBrandPopup
				isOpened={isCreateBrandOpen}
				onClose={handleCloseCreateBrand}
				openFailInterim={handleOpenCreateBrandFail}
				openSuccessInterim={handleOpenCreateBrandSuccess}
			/>
			<InterimPopup
				isOpened={isCreateBrandSuccessOpen}
				onClose={handleCloseCreateBrandSuccess}
				width="360px"
			>
				Brand created successfully!
			</InterimPopup>
			<InterimPopup
				isOpened={isCreateBrandFailOpen}
				onClose={handleCloseCreateBrandFail}
				background="#CA3142"
				width="350px"
			>
				Failed to create new brand!
			</InterimPopup>

			<CreateVehiclePopup
				isOpened={isCreateVehicleOpen}
				onClose={handleCloseCreateVehicle}
				openFailInterim={handleOpenCreateVehicleFail}
				openSuccessInterim={handleOpenCreateVehicleSuccess}
			/>
			<InterimPopup
				isOpened={isCreateVehicleSuccessOpen}
				onClose={handleCloseCreateVehicleSuccess}
				width="360px"
			>
				Vehicle created successfully!
			</InterimPopup>
			<InterimPopup
				isOpened={isCreateVehicleFailOpen}
				onClose={handleCloseCreateVehicleFail}
				background="#CA3142"
				width="350px"
			>
				Failed to create new vehicle!
			</InterimPopup>
		</>
	)

	function handleCloseCreateType() {
		setIsCreateTypeOpen(false)
	}

	function handleOpenCreateType() {
		setIsCreateTypeOpen(true)
	}

	function handleCloseCreateTypeSuccess() {
		setIsCreateTypeSuccessOpen(false)
	}

	function handleOpenCreateTypeSuccess() {
		setIsCreateTypeSuccessOpen(true)
	}

	function handleCloseCreateTypeFail() {
		setIsCreateTypeFailOpen(false)
	}

	function handleOpenCreateTypeFail() {
		setIsCreateTypeFailOpen(true)
	}

	function handleCloseCreateBrand() {
		setIsCreateBrandOpen(false)
	}

	function handleOpenCreateBrand() {
		setIsCreateBrandOpen(true)
	}

	function handleOpenCreateBrandSuccess() {
		setIsCreateBrandSuccessOpen(true)
	}

	function handleCloseCreateBrandSuccess() {
		setIsCreateBrandSuccessOpen(false)
	}

	function handleOpenCreateBrandFail() {
		setIsCreateBrandFailOpen(true)
	}

	function handleCloseCreateBrandFail() {
		setIsCreateBrandFailOpen(false)
	}

	function handleOpenCreateVehicle() {
		setIsCreateVehicleOpen(true)
	}

	function handleCloseCreateVehicle() {
		setIsCreateVehicleOpen(false)
	}

	function handleCloseCreateVehicleSuccess() {
		setIsCreateVehicleSuccessOpen(false)
	}

	function handleOpenCreateVehicleSuccess() {
		setIsCreateVehicleSuccessOpen(true)
	}

	function handleCloseCreateVehicleFail() {
		setIsCreateVehicleFailOpen(false)
	}

	function handleOpenCreateVehicleFail() {
		setIsCreateVehicleFailOpen(true)
	}
}

export default AdminPage
