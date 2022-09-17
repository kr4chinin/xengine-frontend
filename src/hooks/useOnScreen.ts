import { useState, useEffect } from 'react'

function useOnScreen(
	ref: React.MutableRefObject<HTMLElement | null>,
	rootMargin = '0px'
) {
	// State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState(false)

	useEffect(() => {
		let element = ref.current

		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				setIntersecting(entry.isIntersecting)
			},
			{
				rootMargin
			}
		)
		if (element) {
			observer.observe(element)
		}
		return () => {
			if (element) {
				observer.unobserve(element)
			}
		}
	}, [ref, rootMargin])

	return isIntersecting
}

export default useOnScreen

