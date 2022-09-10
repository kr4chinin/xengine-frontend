import { FC } from 'react'
import styles from './PrimaryButton.module.scss'

interface PrimaryButtonProps {
    title: string
    onClick: () => void
}

const PrimaryButton: FC<PrimaryButtonProps> = ({onClick, title}) => {
    return (
        <button className={styles['primary-btn']} onClick={onClick}>
            {title}
        </button>
    )
}

export default PrimaryButton