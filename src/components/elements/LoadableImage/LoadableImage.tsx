import styles from './LoadableImage.module.scss'
import { FC, useEffect, useRef, useState } from 'react'
import useOnScreen from '../../../hooks/useOnScreen'
import cn from 'classnames'
import { flushSync } from 'react-dom'

interface LoadableImageProps {
	src: string
	alt?: string
	onLoad?(): void
	borderRadius?: string
}

const LoadableImage: FC<LoadableImageProps> = ({
	src,
	alt = '',
	borderRadius = '0px',
	onLoad = () => {}
}) => {
	const [isLoaded, setIsLoaded] = useState(false)

	const imageRef = useRef<HTMLImageElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	const isVisible = useOnScreen(containerRef)

	useEffect(() => {
		if (!isVisible || isLoaded) {
			return
		}

		if (imageRef.current) {
			imageRef.current.onload = () => {
                // To synchronize the state update with the DOM update
				flushSync(() => {
					setIsLoaded(true)
				})
				onLoad()
			}
		}
	}, [isVisible, isLoaded, onLoad])

	return (
		<div
			ref={containerRef}
			className={cn(styles.container, {
				[styles.containerLoaded]: isLoaded
			})}
			style={{ borderRadius }}
		>
			{(isVisible || isLoaded) && (
				<img
					ref={imageRef}
					className={cn(styles.image, {
						[styles.imageLoaded]: isLoaded
					})}
					src={src}
					alt={alt}
				/>
			)}
		</div>
	)
}

export default LoadableImage
