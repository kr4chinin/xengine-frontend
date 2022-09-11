import { FC } from 'react'
import { Vehicle } from '../../types/Vehicle'
import VehicleItem from '../VehicleItem/VehicleItem'
import styles from './VehicleList.module.scss'
import { Radio } from 'react-loader-spinner'

interface VehicleListProps {
	vehicles: Vehicle[]
	isLoading: boolean
	isError: boolean
}

const VehiclesList: FC<VehicleListProps> = ({
	vehicles,
	isLoading,
	isError
}) => {
	return (
		<div className={styles.container}>
			{!isError &&
				!isLoading &&
				vehicles?.map(vehicle => (
					<VehicleItem vehicle={vehicle} key={vehicle.id} />
				))}
			<Radio
				colors={['#5878A9', '#ADD1DF', '#5878A9']}
				height={100}
				width={200}
				visible={!isLoading}
				wrapperStyle={{ alignSelf: 'center' }}
			/>
			{!isError && <p>❌ Something went wrong...</p>}
		</div>
	)
}

export default VehiclesList
