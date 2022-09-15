import NavBar from '../../components/Sections/NavBar/NavBar'
import { useState } from 'react'
import styles from './CartPage.module.scss'
import HorizontalLine from '../../components/Elements/HorizontalLine/HorizontalLine'
import { ReactComponent as Cart } from '../../assets/icons/cart.svg'
import VehiclesList from '../../components/VehiclesList/VehiclesList'
import user from '../../store/UserStore'
import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'
import { Vehicle } from '../../types/Vehicle'
import { getCartVehicles } from '../../api/cartAPI'
import { Radio } from 'react-loader-spinner'

const CartPage = observer(() => {
	const [isNavBarVisible, setIsNavBarVisible] = useState(false)

	const [vehicles, setVehicles] = useState<Vehicle[]>([])

	const { isLoading, isError } = useQuery<Vehicle[]>(
		['cart', user.user?.id],
		() => getCartVehicles(user.user?.id || -1),
		{
			onSuccess: data => {
				setVehicles(data)
			}
		}
	)

	return (
		<div className={styles.container}>
			<NavBar isVisible={isNavBarVisible} setIsVisible={setIsNavBarVisible} />
			<HorizontalLine marginTop="200px" />
			<div className={styles.header}>
				<Cart />
				<h2>Your cart: </h2>
			</div>
			{isLoading && (
				<div className={styles['loader-container']}>
					<Radio
						colors={['#5878A9', '#ADD1DF', '#5878A9']}
						height={100}
						width={200}
						wrapperStyle={{ alignSelf: 'center' }}
					/>
				</div>
			)}
			{!isError && !isLoading && (
				<VehiclesList vehicles={vehicles} isError={false} isLoading={false} />
			)}
		</div>
	)
})

export default CartPage
