import BrandsDropdown from '../BrandsDropdown'
import FilterDropdown from '../FilterDropdown/FilterDropdown'
import TypesDropdown from '../TypesDropdown'
import styles from './CatalogControls.module.scss'

const CatalogControls = () => {
	return (
		<div className={styles.container}>
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
