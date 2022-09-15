import { FC, useState } from 'react'
import ReactDOM from 'react-dom'
import EscapeListener from '../KeyboardListeners/EscapeListener'

interface PortalProps {
	children: React.ReactNode
	onClose: () => void
}

const Portal: FC<PortalProps> = ({ children, onClose }) => {
	const [container] = useState(() => document.createElement('div'))

	return ReactDOM.createPortal(
		<EscapeListener onClose={onClose}>{children}</EscapeListener>,
		container
	)
}

export default Portal
