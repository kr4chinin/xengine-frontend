import { Icon } from '@iconify/react'
import { useState } from 'react'
import HorizontalLine from '../../components/Elements/HorizontalLine/HorizontalLine'
import PrimaryButton from '../../components/Elements/PrimaryButton/PrimaryButton'
import CreateTypePopup from '../../components/Popups/CreateTypePopup/CreateTypePopup'
import NavBar from '../../components/Sections/NavBar/NavBar'
import { Icons } from '../../utils/Icons'
import styles from './AdminPage.module.scss'

const AdminPage = () => {
	const [isVisible, setIsVisible] = useState(false)

    const [isCreateTypeOpen, setIsCreateTypeOpen] = useState(false)
    const [isCreateBrandOpen, setIsCreateBrandOpen] = useState(false)
    const [isCreateVehicleOpen, setIsCreateVehicleOpen] = useState(false)

    function handleCloseCreateType() {
        setIsCreateTypeOpen(false)
    }

    function handleOpenCreateType() {
        setIsCreateTypeOpen(true)
    }

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
					<PrimaryButton onClick={handleOpenCreateType} title="Create new type" />
					<PrimaryButton onClick={() => {}} title="Create new brand" />
					<PrimaryButton onClick={() => {}} title="Create new vehicle" />
				</div>
			</section>

            <CreateTypePopup isOpened={isCreateTypeOpen} onClose={handleCloseCreateType}/>
		</>
	)
}

export default AdminPage
