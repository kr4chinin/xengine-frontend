import { Vehicle } from '../../types/Vehicle'
import PopularVehicle from '../PopularVehicle/PopularVehicle'
import styles from './PopularVehiclesList.module.scss'

const PopularVehiclesList = () => {
	const popularVehicles: Vehicle[] = [
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
		}
	]

	return (
		<div className={styles.container}>
			<h2>Most popular vehicles</h2>
			<div className={styles['vehicles-container']}>
				{popularVehicles.map(vehicle => (
					<PopularVehicle vehicle={vehicle} />
				))}
			</div>
		</div>
	)
}

export default PopularVehiclesList
