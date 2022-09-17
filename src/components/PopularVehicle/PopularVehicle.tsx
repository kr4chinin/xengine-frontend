import { FC } from 'react'
import { Vehicle } from '../../types/Vehicle'
import styles from './PopularVehicle.module.scss'
import AddToCartButton from '../Elements/AddToCartButton/AddToCartButton'
import { Icon } from '@iconify/react'
import { Icons } from '../../utils/Icons'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../../utils/Routes'
import LoadableImage from '../Elements/LoadableImage/LoadableImage'
import { useQuery } from '@tanstack/react-query'
import { getAverageRating } from '../../api/ratingAPI'

interface PopularVehicleProps {
	vehicle: Vehicle
}

const PopularVehicle: FC<PopularVehicleProps> = ({ vehicle }) => {
	const navigate = useNavigate()

	function handleNavigateToVehicle(vehicleId: number) {
		navigate(Routes.DEVICE + `/${vehicleId}`)
	}

	const { data: averageRating } = useQuery(['average-rating', vehicle.id], () =>
		getAverageRating(vehicle.id)
	)

	return (
		<div className={styles.container}>
			<LoadableImage
				src={import.meta.env.VITE_API_URL + vehicle.img}
				alt={vehicle.name}
				borderRadius="9px"
			/>
			<AddToCartButton vehicleId={vehicle.id} />
			<button
				className={styles['learn-more-btn']}
				onClick={() => handleNavigateToVehicle(vehicle.id)}
			>
				Learn more...
			</button>
			<div className={styles.rating}>
				<p>Rating:</p>
				<p>{averageRating}</p>
				<Icon icon={Icons.STAR} />
			</div>
		</div>
	)
}

export default PopularVehicle
