import styles from './VehicleItem.module.scss'
import { Vehicle } from '../../types/Vehicle'
import { FC } from 'react'
import { Icon } from '@iconify/react'
import { Icons } from '../../utils/Icons'
import AddToCartButton from '../elements/AddToCartButton/AddToCartButton'
import HorizontalLine from '../elements/HorizontalLine/HorizontalLine'
import { convertPrice } from '../../helpers/convertPrice'

interface VehicleItemProps {
	vehicle: Vehicle
}

const VehicleItem: FC<VehicleItemProps> = ({ vehicle }) => {
	return (
		<div className={styles['global-container']}>
			<div className={styles.container}>
				<div className={styles['image-container']}>
					<img src={vehicle.img} alt={vehicle.name} />
					<AddToCartButton />
				</div>
				<div className={styles.info}>
					<div className={styles.main}>
						<p className={styles.name}>{vehicle.name}</p>
						<p className={styles.type}>Type</p>
						<p className={styles.brand}>Brand</p>
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
