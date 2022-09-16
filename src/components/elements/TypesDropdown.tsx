import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { fetchTypes } from '../../api/vehicleAPI'
import { Type } from '../../types/Type'
import PrimaryDropdown from './PrimaryDropdown/PrimaryDropdown'
import vehicle from '../../store/VehicleStore'

const TypesDropdown = () => {
	const [types, setTypes] = useState<Type[]>([])

	const { isLoading, isError } = useQuery(['types'], () => fetchTypes(), {
		onSuccess(data) {
			vehicle.setTypes(data)
			setTypes(data)
		}
	})

	return (
		<PrimaryDropdown
			title="Types"
			list={types}
			isLoading={isLoading}
			isError={isError}
		/>
	)
}

export default TypesDropdown
