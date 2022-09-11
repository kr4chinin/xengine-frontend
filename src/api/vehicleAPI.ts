import { Type } from '../types/Type'
import { $authHost, $host } from './index'

export const fetchTypes = async () => {
    const { data } = await $host.get<Type[]>('api/type')
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get<Type[]>('api/brand')
    return data
}


