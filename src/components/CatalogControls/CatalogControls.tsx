import BrandsDropdown from '../elements/BrandsDropdown'
import FilterDropdown from '../elements/FilterDropdown/FilterDropdown'
import TypesDropdown from '../elements/TypesDropdown'
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
