import axios, { AxiosRequestConfig } from 'axios'

const $host = axios.create({
	baseURL: import.meta.env.VITE_API_URL
})

const $authHost = axios.create({
	baseURL: import.meta.env.VITE_TEST_VAR
})

// Creating interceptor for requests where authorization is required ($authHost)
const authInterceptor = (config: AxiosRequestConfig) => {
	const token = localStorage.getItem('token')
	if (config && config.headers && token) {
		config.headers.authorization = `Bearer ${token}`
	}

	return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $authHost, $host }
