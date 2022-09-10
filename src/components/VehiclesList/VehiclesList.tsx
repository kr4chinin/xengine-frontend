import { FC } from 'react'
import { Vehicle } from '../../types/Vehicle'
import VehicleItem from '../VehicleItem/VehicleItem'
import styles from './VehicleList.module.scss'

interface VehicleListProps {
	vehicles: Vehicle[]
}

const VehiclesList: FC<VehicleListProps> = ({ vehicles }) => {
	return (
		<div className={styles.container}>
			{vehicles.map(vehicle => (
				<VehicleItem vehicle={vehicle} key={vehicle.id} />
			))}
		</div>
	)
}

export default VehiclesList
