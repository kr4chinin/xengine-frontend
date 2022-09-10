import PrimaryDropdown from './PrimaryDropdown/PrimaryDropdown'
import { Brand } from '../../types/Brand'

const BrandsDropdown = () => {

	const brands: Brand[] = [
		{ id: 1, name: 'Brand 1' },
		{ id: 2, name: 'Brand 2' },
		{ id: 3, name: 'Brand 3' },
		{ id: 4, name: 'Brand 4' },
		{ id: 5, name: 'Brand 5' }
	]

	return (
        <PrimaryDropdown title='Brands' list={brands}/>
	)
}

export default BrandsDropdown
