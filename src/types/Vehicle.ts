import { Info } from './Info'

export type Vehicle = {
	id: number
	name: string
	rating: number
	price: number
	img: string
	description: string
	typeId: number
	brandId: number
	info: Info[]
}
