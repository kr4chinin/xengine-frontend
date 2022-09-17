import styles from './VehicleItem.module.scss'
import { Vehicle } from '../../types/Vehicle'
import { FC } from 'react'
import { Icon } from '@iconify/react'
import { Icons } from '../../utils/Icons'
import AddToCartButton from '../Elements/AddToCartButton/AddToCartButton'
import HorizontalLine from '../Elements/HorizontalLine/HorizontalLine'
import { convertPrice } from '../../helpers/convertPrice'
import { useQuery } from '@tanstack/react-query'
import { fetchBrand, fetchType } from '../../api/vehicleAPI'
import { Type } from '../../types/Type'
import { ThreeDots } from 'react-loader-spinner'
import { Brand } from '../../types/Brand'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../../utils/Routes'
import LoadableImage from '../Elements/LoadableImage/LoadableImage'
import { getAverageRating } from '../../api/ratingAPI'

interface VehicleItemProps {
	vehicle: Vehicle
	refetchData?: () => void
}

const VehicleItem: FC<VehicleItemProps> = ({
	vehicle,
	refetchData = () => {}
}) => {
	const {
		data: type,
		isLoading: isTypeLoading,
		isError: isTypeError
	} = useQuery<Type>(['type', vehicle.typeId], () => fetchType(vehicle.typeId))

	const {
		data: brand,
		isLoading: isBrandLoading,
		isError: isBrandError
	} = useQuery<Brand>(['brand', vehicle.brandId], () =>
		fetchBrand(vehicle.brandId)
	)

	const { data: averageRating } = useQuery(['average-rating', vehicle.id], () =>
		getAverageRating(vehicle.id)
	)

	const navigate = useNavigate()

	function handleNavigateToVehicle(vehicleId: number) {
		navigate(Routes.DEVICE + `/${vehicleId}`)
	}

	return (
		<div className={styles['global-container']}>
			<div className={styles.container}>
				<div className={styles['image-container']}>
					<LoadableImage
						src={import.meta.env.VITE_API_URL + vehicle.img}
						alt={vehicle.name}
						borderRadius="8px"
					/>
					<AddToCartButton
						vehicleId={vehicle.id}
						width="40px"
						height="40px"
						refetchData={refetchData}
					/>
				</div>
				<div className={styles.info}>
					<div className={styles.main}>
						<div
							className={styles.name}
							onClick={() => handleNavigateToVehicle(vehicle.id)}
						>
							{vehicle.name}
						</div>
						<div
							className={styles.type}
							onClick={
								!isTypeLoading && !isTypeError && type?.name
									? () => handleNavigateToVehicle(vehicle.id)
									: () => {}
							}
						>
							{!isTypeLoading && !isTypeError && type?.name}
							{isTypeLoading && (
								<ThreeDots width={36} height={36} color="#5878A9" />
							)}
							{isTypeError && <p>Error 🚫</p>}
						</div>
						<div
							className={styles.brand}
							onClick={
								!isBrandLoading && !isBrandError && brand?.name
									? () => handleNavigateToVehicle(vehicle.id)
									: () => {}
							}
						>
							{!isBrandLoading && !isBrandError && brand?.name}
							{isBrandLoading && (
								<ThreeDots width={36} height={36} color="#5878A9" />
							)}
							{isBrandError && <p>Error 🚫</p>}
						</div>
					</div>
					<div className={styles.secondary}>
						<div className={styles['rating-container']}>
							<p>Rating:</p>
							<p>{averageRating || 0}</p>
							<Icon icon={Icons.STAR} />
						</div>
						<div className={styles['price-container']}>
							<p>Price:</p>
							<p>{convertPrice(String(vehicle.price))}</p>
							<Icon icon={Icons.DOLLAR_CIRCLE} />
						</div>
					</div>
					<section className={styles.description}>
						<header className={styles.header}>Description</header>
						<div className={styles['description-content']}>
							{vehicle.description}
						</div>
					</section>
				</div>
			</div>
			<HorizontalLine borderColor="#94a6b7" marginTop="32px" />
		</div>
	)
}

export default VehicleItem
