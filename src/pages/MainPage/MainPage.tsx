import HorizontalLine from '../../components/HorizontalLine/HorizontalLine'
import NavBar from '../../components/NavBar/NavBar'
import styles from './MainPage.module.scss'

const MainPage = () => {
	return (
		<div className={styles.container}>
			<NavBar />
            <HorizontalLine marginTop='60px'/>
            <h2>Most popular vehicles</h2>
        
		</div>
	)
}

export default MainPage
