import { observer } from 'mobx-react-lite'
import styles from './PaginationBar.module.scss'
import vehicle from '../../../store/VehicleStore'

const PaginationBar = observer(() => {
	const pageCount = Math.ceil(vehicle.totalCount / vehicle.limit)
	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	return (
		<div className={styles.container}>
			{pages.map(page => (
				<button
					key={page}
					onClick={() => vehicle.setPage(page)}
					className={vehicle.page === page ? styles.active : ''}
				>
					{page}
				</button>
			))}
		</div>
	)
})

export default PaginationBar
