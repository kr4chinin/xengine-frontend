import { useMutation, useQuery } from '@tanstack/react-query'
import { FC, useId, useState } from 'react'
import { flushSync } from 'react-dom'
import { getRating, setRating } from '../../../api/ratingAPI'
import styles from './SetRatingBar.module.scss'
import user from '../../../store/UserStore'

interface SetRatingBarProps {
	vehicleId: number
	refetchAverageRating: () => void
}

const SetRatingBar: FC<SetRatingBarProps> = ({
	vehicleId,
	refetchAverageRating
}) => {
	const { mutate } = useMutation(
		() => setRating(vehicleId, user.user?.id || -1, currentRating),
		{
			onSuccess: () => {
				refetchAverageRating()
			}
		}
	)

	const { data: fetchedCurrentRating } = useQuery(
		['current-rating', vehicleId, user.user?.id],
		() => getRating(vehicleId, user.user?.id || -1),
		{
			onSuccess: data => {
				setCurrentRating(data.rate)
			}
		}
	)

	const star1 = useId()
	const star2 = useId()
	const star3 = useId()
	const star4 = useId()
	const star5 = useId()

	const [currentRating, setCurrentRating] = useState(0)

	function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
		// Update state synchronously to provide fresh data to mutate function
		flushSync(() => {
			setCurrentRating(+e.target.value)
		})
		mutate()
	}

	return (
		<div className={styles.container}>
			<h3>Set rating: </h3>
			<div className={styles.rate}>
				<input
					type="radio"
					id={star5}
					name="rate"
					value={5}
					onChange={handleCheck}
					checked={currentRating === 5}
				/>
				<label htmlFor={star5} title="Rate 5">
					5 stars
				</label>
				<input
					type="radio"
					id={star4}
					name="rate"
					value={4}
					onChange={handleCheck}
					checked={currentRating === 4}
				/>
				<label htmlFor={star4} title="Rate 4">
					4 stars
				</label>
				<input
					type="radio"
					id={star3}
					name="rate"
					value={3}
					onChange={handleCheck}
					checked={currentRating === 3}
				/>
				<label htmlFor={star3} title="Rate 3">
					3 stars
				</label>
				<input
					type="radio"
					id={star2}
					name="rate"
					value={2}
					onChange={handleCheck}
					checked={currentRating === 2}
				/>
				<label htmlFor={star2} title="Rate 2">
					2 stars
				</label>
				<input
					type="radio"
					id={star1}
					name="rate"
					value={1}
					onChange={handleCheck}
					checked={currentRating === 1}
				/>
				<label htmlFor={star1} title="Rate 1">
					1 star
				</label>
			</div>
		</div>
	)
}

export default SetRatingBar
