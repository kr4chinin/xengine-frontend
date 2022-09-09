import { Type } from '../types/Type'
import PrimaryDropdown from './PrimaryDropdown/PrimaryDropdown'

const TypesDropdown = () => {

	const types: Type[] = [
		{ id: 1, name: 'Type 1' },
		{ id: 2, name: 'Type 2' },
		{ id: 3, name: 'Type 3' },
		{ id: 4, name: 'Type 4' },
		{ id: 5, name: 'Type 5' }
	]

	return (
        <PrimaryDropdown title='Types' list={types}/>
	)
}

export default TypesDropdown
