import { FC } from 'react'
import styles from './HorizontalLine.module.scss'

interface HorizontalLineProps {
    borderColor?: string
    marginTop?: string
}

const HorizontalLine: FC<HorizontalLineProps> = ({borderColor = '#2F3337', marginTop = '40px'}) => {
    return (
        <hr
            className={styles.line}
            style={{borderColor, marginTop}}
        />
    )
}

export default HorizontalLine