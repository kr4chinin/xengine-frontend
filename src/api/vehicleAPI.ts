import { Type } from '../types/Type'
import { Vehicle } from '../types/Vehicle'
import { $authHost, $host } from './index'

export const fetchTypes = async () => {
    const { data } = await $host.get<Type[]>('api/type')
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get<Type[]>('api/brand')
    return data
}

export const fetchVehicles = async (typeId: number | null, brandId: number | null, page = 1, limit = 5) => {
    const { data } = await $host.get<{rows: Vehicle[], count: number}>('api/vehicle', { params: {
        typeId,
        brandId,
        page,
        limit
    }})
    return data
}


