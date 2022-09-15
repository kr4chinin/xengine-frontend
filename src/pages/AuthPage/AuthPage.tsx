import NavBar from '../../components/sections/NavBar/NavBar'
import PrimaryInput from '../../components/elements/PrimaryInput/PrimaryInput'
import styles from './AuthPage.module.scss'
import { useState } from 'react'
import PrimaryButton from '../../components/elements/PrimaryButton/PrimaryButton'
import { useLocation } from 'react-router-dom'
import { Routes } from '../../utils/Routes'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { login, registration } from '../../api/userAPI'
import user from '../../store/UserStore'

const AuthPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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

	const { mutate: handleLogin } = useMutation(() => login(email, password), {
		onSuccess: data => {
			user.setUser(data)
			user.isAuth = true
			navigate(Routes.MAIN)
		}
	})

	const { mutate: handleRegistration } = useMutation(
		() => registration(email, password),
		{
			onSuccess: data => {
				user.setUser(data)
				user.isAuth = true
				navigate(Routes.MAIN)
			}
		}
	)

	const handleAuth = async () => {
		try {
			if (isRegistration) {
				handleRegistration()
			} else {
				handleLogin()
			}
		} catch (e) {}
	}

	return (
		<>
			<NavBar isVisible={true} />
			<section className={styles.container}>
				<h2>Authorization</h2>
				<div className={styles['auth-container']}>
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
