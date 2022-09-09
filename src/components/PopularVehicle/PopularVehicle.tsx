import { FC } from 'react'
import { Vehicle } from '../../types/Vehicle'
import styles from './PopularVehicle.module.scss'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
import { Icon } from '@iconify/react'

interface PopularVehicleProps {
	vehicle: Vehicle
}

const PopularVehicle: FC<PopularVehicleProps> = ({ vehicle }) => {
	return (
		<div className={styles.container}>
			<img src={vehicle.img} alt={vehicle.name} />
			<AddToCartButton />
			<button className={styles['learn-more-btn']}>Learn more...</button>
			<div className={styles.rating}>
				<p>Rating:</p>
				<p>{vehicle.rating}</p>
				<Icon icon="ant-design:star-filled" />
			</div>
		</div>
	)
}

export default PopularVehicle
