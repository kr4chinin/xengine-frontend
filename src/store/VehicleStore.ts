import { makeAutoObservable } from 'mobx'
import { Brand } from '../types/Brand'
import { Type } from '../types/Type'
import { Vehicle } from '../types/Vehicle'

class VehicleStore {
	private _types: Type[]
	private _brands: Brand[]
	private _vehicles: Vehicle[]
	private _selectedType: Type | {}
	private _selectedBrand: Brand | {}
	private _page: number
	private _totalCount: number
	private _limit: number

	constructor() {
		this._types = []
		this._brands = []
		this._vehicles = []
		this._selectedType = {}
		this._selectedBrand = {}
		this._page = 1
		this._totalCount = 0
		this._limit = 2
		makeAutoObservable(this)
	}

	setTypes(types: Type[]) {
		this._types = types
	}

	setBrands(brands: Brand[]) {
		this._brands = brands
	}

	setDevices(vehicles: Vehicle[]) {
		this._vehicles = vehicles
	}

	setSelectedType(type: Type) {
		this.setPage(1)
		this._selectedType = type
	}

	setSelectedBrand(brand: Brand) {
		this.setPage(1)
		this._selectedBrand = brand
	}

	setPage(page: number) {
		this._page = page
	}

	setTotalCount(count: number) {
		this._totalCount = count
	}

	setLimit(limit: number) {
		this._limit = limit
	}

	get page() {
		return this._page
	}

	get totalCount() {
		return this._totalCount
	}

	get limit() {
		return this._limit
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get vehicles() {
		return this._vehicles
	}

	get selectedType() {
		return this._selectedType
	}

	get selectedBrand() {
		return this._selectedBrand
	}
}

export default new VehicleStore()
