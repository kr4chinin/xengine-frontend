import styles from './FilterDropdown.module.scss'
import { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Icon } from '@iconify/react'
import cl from 'classnames'

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

	const options: { id: number; name: string }[] = [
		{ id: 1, name: 'Price' },
		{ id: 2, name: 'Name' },
		{ id: 3, name: 'Price' }
	]

	return (
		<div className={styles.trigger} onClick={toggleDropdown} ref={triggerRef}>
			<div className={styles.header}>
				<p>Filter</p>
				{isShown ? (
					<Icon icon="carbon:filter-remove" className="icon" />
				) : (
					<Icon icon="akar-icons:filter" />
				)}
			</div>
			<div className={cl(styles.dropdown, { [styles.active]: isShown })}>
				<div
					className={cl(styles.menu, { [styles.active]: isShown })}
					ref={dropdownRef}
					onClick={handleStopPropagation}
				>
					<ul>
						{options.map(option => (
							<li key={option.id}>{option.name}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FilterDropdown
