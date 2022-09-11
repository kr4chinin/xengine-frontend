import { FC } from 'react'
import { Vehicle } from '../../types/Vehicle'
import VehicleItem from '../VehicleItem/VehicleItem'
import styles from './VehicleList.module.scss'

interface VehicleListProps {
	vehicles: Vehicle[]
	isLoading: boolean
	isError: boolean
}

const VehiclesList: FC<VehicleListProps> = ({
	vehicles,
	isLoading,
	isError
}) => {
	return (
		<div className={styles.container}>
			{vehicles?.map(vehicle => (
				<VehicleItem vehicle={vehicle} key={vehicle.id} />
			))}
			{isLoading && <div>Loading...</div>}
			{isError && <div>Error</div>}
		</div>
	)
}

export default VehiclesList
