import NavBar from '../../components/Sections/NavBar/NavBar'
import PrimaryInput from '../../components/Elements/PrimaryInput/PrimaryInput'
import styles from './AuthPage.module.scss'
import { useState } from 'react'
import PrimaryButton from '../../components/Elements/PrimaryButton/PrimaryButton'
import { useLocation } from 'react-router-dom'
import { Routes } from '../../utils/Routes'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { login, registration } from '../../api/userAPI'
import user from '../../store/UserStore'
import { User } from '../../types/User'
import { ErrorResponse } from '../../types/ErrorResponse'
import { Icon } from '@iconify/react'
import { Icons } from '../../utils/Icons'

const AuthPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState<ErrorResponse | null>(null)

	const navigate = useNavigate()
	const location = useLocation()

	function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value)
	}

	function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}

	function handleNavigateLogin() {
		navigate(Routes.LOGIN)
	}

	function handleNavigateRegistration() {
		navigate(Routes.REGISTRATION)
	}

	const isRegistration = location.pathname === Routes.REGISTRATION

	const {
		mutate: handleLogin,
		isError: isLoginError,
		isLoading: isLoginLoading
	} = useMutation<User, ErrorResponse>(() => login(email, password), {
		onSuccess: data => {
			user.setUser(data)
			user.setIsAuth(true)
			navigate(Routes.MAIN)
		},
		onError: error => {
			setErrorMessage(error)
			console.log('⚙️ This is dev message', error.response.data.cause)
		}
	})

	const {
		mutate: handleRegistration,
		isError: isRegistrationError,
		isLoading: isRegistrationLoading
	} = useMutation<User, ErrorResponse>(() => registration(email, password), {
		onSuccess: data => {
			user.setUser(data)
			user.setIsAuth(true)
			navigate(Routes.MAIN)
		},
		onError: error => {
			setErrorMessage(error)
			console.log('⚙️ This is dev message', error.response.data.cause)
		}
	})

	const handleAuth = async () => {
		if (isRegistration) {
			handleRegistration()
		} else {
			handleLogin()
		}
	}

	return (
		<>
			<NavBar isVisible={true} />
			<section className={styles.container}>
				<h2>Authorization</h2>
				<div className={styles['auth-container']}>
					{(isRegistrationError || isLoginError) && (
                        <div className={styles.error}>
                            <Icon icon={Icons.ERROR} />
                            <h3>{errorMessage?.response.data.message}</h3>
                        </div>
					)}
					<div className={styles['input-container']}>
						<PrimaryInput
							type="text"
							label="Email"
							value={email}
							onChange={handleChangeEmail}
							placeholder="Enter email..."
						/>
						<PrimaryInput
							type="password"
							label="Password"
							value={password}
							onChange={handleChangePassword}
							placeholder="Enter password..."
						/>
					</div>
					<PrimaryButton
						title={isRegistration ? 'Sign up' : 'Log in'}
						onClick={handleAuth}
					/>
				</div>
				<footer>
					{isRegistration ? (
						<p>
							Already have an account?{' '}
							<span onClick={handleNavigateLogin}>Log in!</span>
						</p>
					) : (
						<p>
							Don't have an account?{' '}
							<span onClick={handleNavigateRegistration}>Sign up!</span>
						</p>
					)}
				</footer>
			</section>
		</>
	)
}

export default AuthPage
