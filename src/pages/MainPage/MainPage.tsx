import CatalogControls from '../../components/CatalogControls/CatalogControls'
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine'
import NavBar from '../../components/NavBar/NavBar'
import PopularVehiclesList from '../../components/PopularVehiclesList/PopularVehiclesList'
import VehiclesList from '../../components/VehiclesList/VehiclesList'
import styles from './MainPage.module.scss'
import { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'

const MainPage = () => {
	const [isNavBarVisible, setIsNavBarVisible] = useState(false)
	const [isSideBarVisible, setIsSideBarVisible] = useState(false)

	return (
		<div className={styles.container}>
			<NavBar isVisible={isNavBarVisible} setIsVisible={setIsNavBarVisible} />
			<HorizontalLine marginTop="200px" />
			<PopularVehiclesList />
			<HorizontalLine marginTop="60px" />
			<CatalogControls />
			<VehiclesList />
			<SideBar
				isVisible={isSideBarVisible}
				setIsVisible={setIsSideBarVisible}
			/>
		</div>
	)
}

export default MainPage
