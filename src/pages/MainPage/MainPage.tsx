import CatalogControls from '../../components/CatalogControls/CatalogControls'
import HorizontalLine from '../../components/elements/HorizontalLine/HorizontalLine'
import NavBar from '../../components/sections/NavBar/NavBar'
import PopularVehiclesList from '../../components/PopularVehiclesList/PopularVehiclesList'
import VehiclesList from '../../components/VehiclesList/VehiclesList'
import styles from './MainPage.module.scss'
import { useState } from 'react'
import SideBar from '../../components/sections/SideBar/SideBar'
import { Vehicle } from '../../types/Vehicle'

const MainPage = () => {
	const [isNavBarVisible, setIsNavBarVisible] = useState(false)
	const [isSideBarVisible, setIsSideBarVisible] = useState(false)

	const vehicles: Vehicle[] = [
		{
			id: 1,
			name: 'Vehicle 1',
			rating: 6.1,
			price: 2500000,
			img: 'https://images.unsplash.com/photo-1623972860045-f2d0accbcf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
		},
		{
			id: 2,
			name: 'Vehicle 2',
			rating: 4.0,
			price: 3500000,
			img: 'https://images.unsplash.com/photo-1623972860045-f2d0accbcf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
		},
		{
			id: 3,
			name: 'Vehicle 3',
			rating: 5.1,
			price: 4500000,
			img: 'https://images.unsplash.com/photo-1623972860045-f2d0accbcf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
		},
		{
			id: 4,
			name: 'Vehicle 4',
			rating: 6.1,
			price: 2500000,
			img: 'https://images.unsplash.com/photo-1623972860045-f2d0accbcf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
		},
		{
			id: 5,
			name: 'Vehicle 5',
			rating: 4.0,
			price: 3500000,
			img: 'https://images.unsplash.com/photo-1623972860045-f2d0accbcf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
		},
		{
			id: 6,
			name: 'Vehicle 6',
			rating: 5.1,
			price: 4500000,
			img: 'https://images.unsplash.com/photo-1623972860045-f2d0accbcf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
		}
	]

	return (
		<div>
			<NavBar isVisible={isNavBarVisible} setIsVisible={setIsNavBarVisible} />
			<HorizontalLine marginTop="200px" />
			<PopularVehiclesList />
			<HorizontalLine marginTop="60px" />
			<CatalogControls />
			<VehiclesList vehicles={vehicles} />
			<SideBar
				isVisible={isSideBarVisible}
				setIsVisible={setIsSideBarVisible}
			/>
		</div>
	)
}

export default MainPage
