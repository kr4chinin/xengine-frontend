import styles from './TypesDropdown.module.scss'
import { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Icon } from '@iconify/react'
import cl from 'classnames'
import { Type } from '../../types/Type'

const TypesDropdown = () => {
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

	const types: Type[] = [
		{ id: 1, name: 'Type 1' },
		{ id: 2, name: 'Type 2' },
		{ id: 3, name: 'Type 3' },
		{ id: 4, name: 'Type 4' },
		{ id: 5, name: 'Type 5' }
	]

	return (
		<div className={styles.trigger} onClick={toggleDropdown} ref={triggerRef}>
			<div className={styles.header}>
				<p>Types</p>
				{isShown ? (
					<Icon icon="akar-icons:arrow-back-thick" className="icon" />
				) : (
					<Icon icon="fluent:more-circle-20-filled" />
				)}
			</div>
			<div className={cl(styles.dropdown, { [styles.active]: isShown })}>
				<div
					className={cl(styles.menu, { [styles.active]: isShown })}
					ref={dropdownRef}
					onClick={handleStopPropagation}
				>
					<ul>
						{types.map(type => (
							<li key={type.id}>{type.name}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default TypesDropdown
