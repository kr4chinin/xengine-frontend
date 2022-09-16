import BrandsDropdown from '../Elements/BrandsDropdown'
import FilterDropdown from '../Elements/FilterDropdown/FilterDropdown'
import TypesDropdown from '../Elements/TypesDropdown'
import styles from './CatalogControls.module.scss'

const CatalogControls = () => {
	return (
		<div className={styles.container} id='controls'>
			<h2>Vehicle catalog</h2>
			<div className={styles['controls-container']}>
                <TypesDropdown />
                <BrandsDropdown />
                <FilterDropdown />
            </div>
		</div>
	)
}

export default CatalogControls
