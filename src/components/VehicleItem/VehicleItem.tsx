import styles from './VehicleItem.module.scss'
import { Vehicle } from '../../types/Vehicle'
import { FC } from 'react'
import { Icon } from '@iconify/react'
import { Icons } from '../../utils/Icons'
import AddToCartButton from '../elements/AddToCartButton/AddToCartButton'
import HorizontalLine from '../elements/HorizontalLine/HorizontalLine'
import { convertPrice } from '../../helpers/convertPrice'
import { useQuery } from '@tanstack/react-query'
import { fetchBrand, fetchType } from '../../api/vehicleAPI'
import { Type } from '../../types/Type'
import { ThreeDots } from 'react-loader-spinner'
import { Brand } from '../../types/Brand'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../../utils/Routes'

interface VehicleItemProps {
	vehicle: Vehicle
}

const VehicleItem: FC<VehicleItemProps> = ({ vehicle }) => {
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

	const navigate = useNavigate()

	function handleNavigateToVehicle(vehicleId: number) {
		navigate(Routes.DEVICE + `/${vehicleId}`)
	}

	return (
		<div
			className={styles['global-container']}
			onClick={() => handleNavigateToVehicle(vehicle.id)}
		>
			<div className={styles.container}>
				<div className={styles['image-container']}>
					<img
						src={import.meta.env.VITE_API_URL + vehicle.img}
						alt={vehicle.name}
					/>
					<AddToCartButton vehicleId={vehicle.id}/>
				</div>
				<div className={styles.info}>
					<div className={styles.main}>
						<div className={styles.name}>{vehicle.name}</div>
						<div className={styles.type}>
							{!isTypeLoading && !isTypeError && type?.name}
							{isTypeLoading && (
								<ThreeDots width={45} height={45} color="#5878A9" />
							)}
							{isTypeError && <p>Error 🚫</p>}
						</div>
						<div className={styles.brand}>
							{!isBrandLoading && !isBrandError && brand?.name}
							{isBrandLoading && (
								<ThreeDots width={45} height={45} color="#5878A9" />
							)}
							{isBrandError && <p>Error 🚫</p>}
						</div>
					</div>
					<div className={styles.secondary}>
						<div className={styles['rating-container']}>
							<p>Rating:</p>
							<p>{vehicle.rating}</p>
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
			<HorizontalLine borderColor="#94a6b7" />
		</div>
	)
}

export default VehicleItem
