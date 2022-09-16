import { $authHost } from './index'

export const addToCart = async (userId: number, vehicleId: number) => {
	const { data } = await $authHost.post('api/cart', {
		userId,
		vehicleId
	})
	return data
}

export const deleteFromCart = async (userId: number, vehicleId: number) => {
	const { data } = await $authHost.delete('api/cart', {
		data: {
			userId,
			vehicleId
		}
	})
	return data
}

export const checkIsInCart = async (userId: number, vehicleId: number) => {
	const { data } = await $authHost.get('api/cart/check', {
		params: {
			userId,
			vehicleId
		}
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

export const getTotalPrice = async (userId: number) => {
    const { data } = await $authHost.get('api/cart/total', {
        params: {
            userId
        }
    })
    return data
}