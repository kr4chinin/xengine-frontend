import CatalogControls from '../../components/CatalogControls/CatalogControls'
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine'
import NavBar from '../../components/NavBar/NavBar'
import PopularVehiclesList from '../../components/PopularVehiclesList/PopularVehiclesList'
import VehiclesList from '../../components/VehiclesList/VehiclesList'
import styles from './MainPage.module.scss'

const MainPage = () => {
	return (
		<div className={styles.container}>
			<NavBar />
            <HorizontalLine marginTop='60px'/>
            <PopularVehiclesList />
            <HorizontalLine marginTop='60px'/>
            <CatalogControls />
            <VehiclesList />
		</div>
	)
}

export default MainPage
