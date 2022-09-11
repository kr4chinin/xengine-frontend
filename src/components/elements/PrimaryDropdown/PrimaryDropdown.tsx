import styles from './PrimaryDropdown.module.scss'
import { useState, useRef, FC } from 'react'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { Icon } from '@iconify/react'
import cl from 'classnames'
import { Icons } from '../../../utils/Icons'
import { ProgressBar } from 'react-loader-spinner'

interface PrimaryDropdownProps {
	list: { id: number; name: string }[]
	title: string
	isLoading?: boolean
	isError?: boolean
}

const PrimaryDropdown: FC<PrimaryDropdownProps> = ({
	list,
	title,
	isError = false,
	isLoading = false
}) => {
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
					{!isError ? (
						<p className={styles['error-message']}>❌ Error occured!</p>
					) : (
						<ul>
							{isLoading ? (
								<ProgressBar borderColor="whitesmoke" barColor="#5878A9" />
							) : (
								list?.map(el => <li key={el.id}>{el.name}</li>)
							)}
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}

export default PrimaryDropdown
