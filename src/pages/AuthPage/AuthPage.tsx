import NavBar from '../../components/NavBar/NavBar'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import styles from './AuthPage.module.scss'
import { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import { useLocation } from 'react-router-dom'
import { Routes } from '../../utils/Routes'
import { useNavigate } from 'react-router-dom'

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
					<PrimaryButton title={isRegistration ? 'Sign up' : 'Log in'} onClick={() => {}} />
				</div>
				<footer>
					{isRegistration? (
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
