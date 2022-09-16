import PrimaryDropdown from './PrimaryDropdown/PrimaryDropdown'
import { Brand } from '../../types/Brand'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchBrands } from '../../api/vehicleAPI'
import vehicle from '../../store/VehicleStore'

const BrandsDropdown = () => {
	const [brands, setBrands] = useState<Brand[]>([])

	const { isLoading, isError } = useQuery(['brands'], () => fetchBrands(), {
		onSuccess(data) {
			vehicle.setBrands(data)
			setBrands(data)
		}
	})

	return (
		<PrimaryDropdown
			title="Brands"
			list={brands}
			isLoading={isLoading}
			isError={isError}
		/>
	)
}

export default BrandsDropdown
