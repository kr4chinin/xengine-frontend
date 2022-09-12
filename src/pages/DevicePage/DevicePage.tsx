import styles from './DevicePage.module.scss'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchBrand, fetchType, fetchVehicle } from '../../api/vehicleAPI'
import { Vehicle } from '../../types/Vehicle'
import NavBar from '../../components/sections/NavBar/NavBar'
import { useState } from 'react'
import HorizontalLine from '../../components/elements/HorizontalLine/HorizontalLine'
import { Type } from '../../types/Type'
import { Brand } from '../../types/Brand'
import { ThreeDots } from 'react-loader-spinner'
import AddToCartButton from '../../components/elements/AddToCartButton/AddToCartButton'
import { Icon } from '@iconify/react'
import { Icons } from '../../utils/Icons'
import { convertPrice } from '../../helpers/convertPrice'

const DevicePage = () => {
	const { id } = useParams<{ id: string }>()

	const {
		data: vehicle,
		isLoading,
		isError
	} = useQuery<Vehicle>(['vehicle', id], () => fetchVehicle(+id!))

	const [isNavBarVisible, setIsNavBarVisible] = useState(false)

	const {
		data: type,
		isLoading: isTypeLoading,
		isError: isTypeError
	} = useQuery<Type>(
		['type', vehicle?.typeId],
		() => fetchType(vehicle?.typeId as number),
		{
			enabled: !!vehicle
		}
	)

	const {
		data: brand,
		isLoading: isBrandLoading,
		isError: isBrandError
	} = useQuery<Brand>(
		['brand', vehicle?.brandId],
		() => fetchBrand(vehicle?.brandId as number),
		{
			enabled: !!vehicle
		}
	)

	return (
		<>
			<NavBar isVisible={isNavBarVisible} setIsVisible={setIsNavBarVisible} />
			<div className={styles.container}>
				<HorizontalLine marginTop="200px" />
				<div className={styles['main-info']}>
					<p className={styles.name}>{vehicle?.name}</p>
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
				<div className={styles.content}>
					<div className={styles['first-column']}>
						<div className={styles['image-container']}>
							<img
								src={import.meta.env.VITE_API_URL + vehicle?.img}
								alt={vehicle?.name}
							/>
							<AddToCartButton height="65px" width="65px" />
						</div>
						<div className={styles['first-column-additional']}>
							<div className={styles.price}>
								<p>
									<span>Price: </span>
									{convertPrice(String(vehicle?.price))}
								</p>
								<Icon icon={Icons.DOLLAR_CIRCLE} />
							</div>
							<div className={styles.rating}>
								<p>
									<span>Rating: </span>
									{vehicle?.rating}
								</p>
								<Icon icon={Icons.STAR} />
							</div>
						</div>
					</div>
					<div className={styles['second-column']}>
                        <HorizontalLine borderColor='#808080' marginTop='0px'/>
                        <section className={styles.description}>
                            <h3>Description: </h3>
                            <p>
                                {vehicle?.description}
                            </p>
                        </section>
                        <div className={styles.characteristics}>
                            <h3>Characteristics: </h3>
                        </div>
                    </div>  
				</div>
			</div>
		</>
	)
}

export default DevicePage
