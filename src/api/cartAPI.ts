import { $authHost } from './index'

export const addToCart = async (userId: number, vehicleId: number) => {
	const { data } = await $authHost.post('api/cart', {
		userId,
		vehicleId
	})
	return data
}

export const getCartVehicles = async (userId: number) => {
	const { data } = await $authHost.get('api/cart', {
		params: {
			userId
		}
	})
    return data
}
