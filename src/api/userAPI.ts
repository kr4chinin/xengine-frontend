import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'
import { User } from '../types/User'

export const registration = async (
	email: string,
	password: string
): Promise<User> => {
	const { data } = await $host.post('api/user/registration', {
		email,
		password
	})
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}

export const login = async (email: string, password: string): Promise<User> => {
	const { data } = await $host.post('api/user/login', {
		email,
		password
	})
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}
