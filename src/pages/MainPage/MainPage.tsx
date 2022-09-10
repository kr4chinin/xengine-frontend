import CatalogControls from '../../components/CatalogControls/CatalogControls'
import HorizontalLine from '../../components/elements/HorizontalLine/HorizontalLine'
import NavBar from '../../components/sections/NavBar/NavBar'
import PopularVehiclesList from '../../components/PopularVehiclesList/PopularVehiclesList'
import VehiclesList from '../../components/VehiclesList/VehiclesList'
import styles from './MainPage.module.scss'
import { useState } from 'react'
import SideBar from '../../components/sections/SideBar/SideBar'

const MainPage = () => {
	const [isNavBarVisible, setIsNavBarVisible] = useState(false)
	const [isSideBarVisible, setIsSideBarVisible] = useState(false)

	return (
		<div>
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
