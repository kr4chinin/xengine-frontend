import { FC } from 'react'
import styles from './HorizontalLine.module.scss'

interface HorizontalLineProps {
	marginTop?: string
}

const HorizontalLine: FC<HorizontalLineProps> = ({
	marginTop = '40px'
}) => {
	return <hr className={styles.line} style={{marginTop }} />
}

export default HorizontalLine
