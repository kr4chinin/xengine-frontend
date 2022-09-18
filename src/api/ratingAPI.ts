import { Rating } from '../types/Rating'
import { $authHost, $host } from './index'

export const setRating = async (
	vehicleId: number,
	userId: number,
	rate: number
) => {
	const { data } = await $authHost.post<Rating>('api/rating', {
		vehicleId,
		userId,
		rate
	})
	return data
}

export const getRating = async (vehicleId: number, userId: number) => {
	const { data } = await $authHost.get<Rating>(`api/rating/${userId}`, {
		params: {
			vehicleId
		}
	})
	return data
}

export const getAverageRating = async (vehicleId: number) => {
	const { data } = await $host.get<number>('api/rating/', {
		params: {
			vehicleId
		}
	})
	return data
}
