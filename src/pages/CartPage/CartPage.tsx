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
import { getCartVehicles, getTotalPrice } from '../../api/cartAPI'
import { Radio, ThreeDots } from 'react-loader-spinner'
import { convertPrice } from '../../helpers/convertPrice'
import { Icon } from '@iconify/react'
import { Icons } from '../../utils/Icons'

const CartPage = observer(() => {
	const [isNavBarVisible, setIsNavBarVisible] = useState(false)

	const [vehicles, setVehicles] = useState<Vehicle[]>([])

	const {
		isLoading,
		isError,
		refetch: refetchCartVehicles
	} = useQuery<Vehicle[]>(
		['cart', user.user?.id],
		() => getCartVehicles(user.user?.id || -1),
		{
			onSuccess: data => {
				setVehicles(data)
			}
		}
	)

	const { data: totalPrice, isLoading: isTotalPriceLoading } = useQuery<number>(
		['total-price'],
		() => getTotalPrice(user.user?.id || -1)
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
				<VehiclesList
					vehicles={vehicles}
					isError={false}
					isLoading={false}
					refetchData={refetchCartVehicles}
				/>
			)}
			<div className={styles.total}>
				<Icon icon={Icons.DOLLAR_BANKNOTE} />
				<h2>Your total:</h2>
				{totalPrice ? (
					<h2>{convertPrice(totalPrice.toString())}</h2>
				) : (
					<h2>0</h2>
				)}
				<ThreeDots visible={isTotalPriceLoading} height={20} width={45} />
			</div>
		</div>
	)
})

export default CartPage
