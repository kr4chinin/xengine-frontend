import { useState, useEffect } from 'react'

function useOnScreen(
	ref: React.MutableRefObject<HTMLElement | null>,
	rootMargin = '0px'
) {
	// State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				setIntersecting(entry.isIntersecting)
			},
			{
				rootMargin
			}
		)
		if (ref.current) {
			observer.observe(ref.current)
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [])

	return isIntersecting
}

export default useOnScreen
