import { Brand } from '../types/Brand'
import { Type } from '../types/Type'
import { Vehicle } from '../types/Vehicle'
import { $authHost, $host } from './index'

export const fetchTypes = async () => {
    const { data } = await $host.get<Type[]>('api/type')
    return data
}

export const fetchType = async (id: number) => {
    const { data } = await $host.get<Type>('api/type/' + id)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get<Brand[]>('api/brand')
    return data
}

export const fetchBrand = async (id: number) => {
    const { data } = await $host.get<Brand>('api/brand/' + id)
    return data
}

export const fetchVehicles = async (typeId: number | null, brandId: number | null, page = 1, limit = 5, sort='') => {
    const { data } = await $host.get<{rows: Vehicle[], count: number}>('api/vehicle', { params: {
        typeId,
        brandId,
        page,
        limit,
        sort
    }})
    return data
}

export const fetchPopularVehicles = async () => {
    const { data } = await $host.get<Vehicle[]>('api/vehicle/popular')
    return data
}


