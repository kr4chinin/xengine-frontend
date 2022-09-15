import NavBar from '../../components/sections/NavBar/NavBar'
import { useState } from 'react'
import styles from './CartPage.module.scss'
import HorizontalLine from '../../components/elements/HorizontalLine/HorizontalLine'
import { ReactComponent as Cart } from '../../assets/icons/cart.svg'
import VehiclesList from '../../components/VehiclesList/VehiclesList'
import user from '../../store/UserStore'
import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'
import { Vehicle } from '../../types/Vehicle'
import { getCartVehicles } from '../../api/cartAPI'

const CartPage = observer(() => {
	const [isNavBarVisible, setIsNavBarVisible] = useState(false)

    const [vehicles, setVehicles] = useState<Vehicle[]>([])

	const { data } = useQuery<Vehicle[]>(
		['cart', user.user?.id],
		() => getCartVehicles(user.user?.id || -1),
		{
			onSuccess: data => {
                setVehicles(data)
                console.log(data)
            }
		}
	)

	return (
		<div className={styles.container}>
			<NavBar isVisible={isNavBarVisible} setIsVisible={setIsNavBarVisible} />
			<HorizontalLine marginTop="200px" />
			<div className={styles.header}>
				<Cart />
				<h2>Your cart</h2>
			</div>
			<VehiclesList
				vehicles={vehicles}
				isError={false}
				isLoading={false}
			/>
		</div>
	)
})

export default CartPage
