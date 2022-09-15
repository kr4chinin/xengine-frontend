import CatalogControls from '../../components/CatalogControls/CatalogControls'
import HorizontalLine from '../../components/Elements/HorizontalLine/HorizontalLine'
import NavBar from '../../components/Sections/NavBar/NavBar'
import PopularVehiclesList from '../../components/PopularVehiclesList/PopularVehiclesList'
import VehiclesList from '../../components/VehiclesList/VehiclesList'
import { useState } from 'react'
import SideBar from '../../components/Sections/SideBar/SideBar'
import { Vehicle } from '../../types/Vehicle'
import { useQuery } from '@tanstack/react-query'
import { fetchVehicles } from '../../api/vehicleAPI'
import vehicle from '../../store/VehicleStore'
import { observer } from 'mobx-react-lite'
import PaginationBar from '../../components/Sections/PaginationBar/PaginationBar'

const MainPage = observer(() => {
	const [isNavBarVisible, setIsNavBarVisible] = useState(false)
	const [isSideBarVisible, setIsSideBarVisible] = useState(false)

	const [vehicles, setVehicles] = useState<Vehicle[]>([])

	const { isLoading, isError } = useQuery(
		[
			'vehicles',
			vehicle.selectedType,
			vehicle.selectedBrand,
			vehicle.page,
			vehicle.limit,
			vehicle.sort
		],
		() =>
			fetchVehicles(
				vehicle.selectedType?.id ?? null,
				vehicle.selectedBrand?.id ?? null,
				vehicle.page,
				vehicle.limit,
				vehicle.sort
			),
		{
			onSuccess(data) {
				setVehicles(data.rows)
				vehicle.setTotalCount(data.count)
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
			<PaginationBar />
		</div>
	)
})

export default MainPage
