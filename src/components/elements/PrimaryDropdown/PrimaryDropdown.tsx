import styles from './PrimaryDropdown.module.scss'
import { useState, useRef, FC } from 'react'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { Icon } from '@iconify/react'
import cl from 'classnames'
import { Icons } from '../../../utils/Icons'
import { ProgressBar } from 'react-loader-spinner'
import { Type } from '../../../types/Type'
import { Brand } from '../../../types/Brand'
import vehicle from '../../../store/VehicleStore'
import { observer } from 'mobx-react-lite'

interface PrimaryDropdownProps {
	list: Type[] | Brand[]
	title: string
	isLoading?: boolean
	isError?: boolean
}

const PrimaryDropdown: FC<PrimaryDropdownProps> = observer(
	({ list, title, isError = false, isLoading = false }) => {
		const [isShown, setIsShown] = useState(false)

		const triggerRef = useRef<HTMLDivElement>(null)
		const dropdownRef = useRef<HTMLDivElement>(null)

		useClickOutside(triggerRef, dropdownRef, handleClose)

		function toggleDropdown() {
			setIsShown(prev => !prev)
		}

		function handleStopPropagation(e: React.MouseEvent<HTMLDivElement>) {
			e.stopPropagation()
		}

		function handleClose() {
			setIsShown(false)
		}

		function handleSetSelected(el: Type | Brand) {
			if (title === 'Types') {
				vehicle.selectedType?.id === el.id
					? vehicle.setSelectedType(null)
					: vehicle.setSelectedType(el)
			}
			if (title === 'Brands') {
				vehicle.selectedBrand?.id === el.id
					? vehicle.setSelectedBrand(null)
					: vehicle.setSelectedBrand(el)
			}
		}

		return (
			<div className={styles.trigger} onClick={toggleDropdown} ref={triggerRef}>
				<div className={styles.header}>
					<p>{title}</p>
					<Icon
						icon={isShown ? Icons.ARROW_BACK : Icons.SHOW_MORE_CIRCLE}
						className="icon"
					/>
				</div>
				<div className={cl(styles.dropdown, { [styles.active]: isShown })}>
					<div
						className={cl(styles.menu, { [styles.active]: isShown })}
						ref={dropdownRef}
						onClick={handleStopPropagation}
					>
						{/* Huge logic expression in <li> has this underlying logic: if title is 'Types' than append active class to the current <li> if its id equals to selectedType's id, 
                        otherwise we do the same checks for the brand */}

						{!isError && !isLoading && (
							<ul>
								{list?.map(el => (
									<li
										key={el.id}
										onClick={() => handleSetSelected(el)}
										className={
											title === 'Types'
												? el.id === vehicle.selectedType?.id
													? styles.active
													: ''
												: el.id === vehicle.selectedBrand?.id
												? styles.active
												: ''
										}
									>
										{el.name}
									</li>
								))}
							</ul>
						)}
						{isError && (
							<p className={styles['error-message']}>❌ Error occured!</p>
						)}
						{isLoading && (
							<ProgressBar borderColor="whitesmoke" barColor="#5878A9" />
						)}
					</div>
				</div>
			</div>
		)
	}
)

export default PrimaryDropdown
