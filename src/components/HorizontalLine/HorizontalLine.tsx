import { FC } from 'react'
import styles from './HorizontalLine.module.scss'

interface HorizontalLineProps {
    backgroundColor?: string
    marginTop?: string
}

const HorizontalLine: FC<HorizontalLineProps> = ({backgroundColor = '#2F3337', marginTop = '40px'}) => {
    return (
        <hr 
            style={{backgroundColor, marginTop}}
        />
    )
}

export default HorizontalLine