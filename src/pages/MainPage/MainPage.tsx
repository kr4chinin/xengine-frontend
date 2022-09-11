import CatalogControls from '../../components/CatalogControls/CatalogControls'
import HorizontalLine from '../../components/elements/HorizontalLine/HorizontalLine'
import NavBar from '../../components/sections/NavBar/NavBar'
import PopularVehiclesList from '../../components/PopularVehiclesList/PopularVehiclesList'
import VehiclesList from '../../components/VehiclesList/VehiclesList'
import { useState } from 'react'
import SideBar from '../../components/sections/SideBar/SideBar'
import { Vehicle } from '../../types/Vehicle'
import { useQuery } from '@tanstack/react-query'
import { fetchVehicles } from '../../api/vehicleAPI'
import vehicle from '../../store/VehicleStore'
import { observer } from 'mobx-react-lite'

const MainPage = observer(() => {
	const [isNavBarVisible, setIsNavBarVisible] = useState(false)
	const [isSideBarVisible, setIsSideBarVisible] = useState(false)

	const [vehicles, setVehicles] = useState<Vehicle[]>([])

	const [page, setPage] = useState(1)

	const { isLoading, isError } = useQuery(
		['vehicles', vehicle.selectedType, vehicle.selectedBrand, page],
		() =>
			fetchVehicles(
				vehicle.selectedType?.id ?? null,
				vehicle.selectedBrand?.id ?? null, 
				page,
				2
			),
		{
			onSuccess(data) {
				console.log(data)
				setVehicles(data)
			}
		}
	)

	return (
		<div>
			<NavBar isVisible={isNavBarVisible} setIsVisible={setIsNavBarVisible} />
			<HorizontalLine marginTop="200px" />
			<PopularVehiclesList />
			<HorizontalLine marginTop="60px" />
			<CatalogControls />
			<VehiclesList
				vehicles={vehicles}
				isLoading={isLoading}
				isError={isError}
			/>
			<SideBar
				isVisible={isSideBarVisible}
				setIsVisible={setIsSideBarVisible}
			/>
		</div>
	)
})

export default MainPage
