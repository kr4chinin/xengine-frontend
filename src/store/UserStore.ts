import { makeAutoObservable } from "mobx"
import { User } from "../types/User"

class UserStore {
    private _isAuth: boolean
    private _user: User | null

    constructor () {
        this._isAuth = false
        this._user = null
        makeAutoObservable(this)
    }

    setIsAuth(value: boolean) {
        this._isAuth = value
    }

    setUser(user: User | null) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}

export default new UserStore()