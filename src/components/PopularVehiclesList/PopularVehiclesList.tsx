import { useQuery } from '@tanstack/react-query'
import { fetchPopularVehicles } from '../../api/vehicleAPI'
import { Vehicle } from '../../types/Vehicle'
import PopularVehicle from '../PopularVehicle/PopularVehicle'
import styles from './PopularVehiclesList.module.scss'
import { ThreeDots } from 'react-loader-spinner'

const PopularVehiclesList = () => {
	const {
		data: popularVehicles,
		isLoading,
		isError
	} = useQuery<Vehicle[]>(['popular-vehicles'], () => fetchPopularVehicles())

	return (
		<div className={styles.container}>
			<h2>Most popular vehicles</h2>
			<div className={styles['vehicles-container']}>
                {<ThreeDots visible={isLoading} color='#5878A9' width={70}/> }
				{!isLoading &&
					!isError &&
					popularVehicles.map(vehicle => (
						<PopularVehicle vehicle={vehicle} key={vehicle.id} />
					))}
			</div>
		</div>
	)
}

export default PopularVehiclesList