import styles from './FilterDropdown.module.scss'
import { useState, useRef } from 'react'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { Icon } from '@iconify/react'
import cl from 'classnames'
import { Icons } from '../../../utils/Icons'
import vehicle from '../../../store/VehicleStore'
import { SortBy } from '../../../utils/SortBy'

const FilterDropdown = () => {
	const [isShown, setIsShown] = useState(false)

	const triggerRef = useRef<HTMLDivElement>(null)
	const dropdownRef = useRef<HTMLDivElement>(null)

	function toggleDropdown() {
		setIsShown(prev => !prev)
	}

	function handleStopPropagation(e: React.MouseEvent<HTMLDivElement>) {
		e.stopPropagation()
	}

	function handleClose() {
		setIsShown(false)
	}

	useClickOutside(triggerRef, dropdownRef, handleClose)

	const options: { id: number; name: string; onClick: () => void }[] = [
		{
			id: 1,
			name: 'Price',
			onClick: () => vehicle.setSort(SortBy.PRICE_DESCENDING)
		},
		{
			id: 2,
			name: 'Name',
			onClick: () => vehicle.setSort(SortBy.NAME_ASCENDING)
		},
		{
			id: 3,
			name: 'Rating',
			onClick: () => vehicle.setSort(SortBy.RATING_DESCENDING)
		}
	]

	return (
		<div className={styles.trigger} onClick={toggleDropdown} ref={triggerRef}>
			<div className={styles.header}>
				<p>Filter</p>
				<Icon
					icon={isShown ? Icons.CLOSE_FILTER : Icons.FILTER}
					className="icon"
				/>
			</div>
			<div className={cl(styles.dropdown, { [styles.active]: isShown })}>
				<div
					className={cl(styles.menu, { [styles.active]: isShown })}
					ref={dropdownRef}
					onClick={handleStopPropagation}
				>
					<ul>
						{options.map(option => (
							<li key={option.id} onClick={option.onClick}>
								{option.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FilterDropdown
