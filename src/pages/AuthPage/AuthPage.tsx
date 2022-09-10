import NavBar from '../../components/NavBar/NavBar'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import styles from './AuthPage.module.scss'
import { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const AuthPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value)
	}

	function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
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
					<PrimaryButton title='Sign up' onClick={() => {}}/>
				</div>
				<footer>
					Don't have an account? <span>Sign up!</span>
				</footer>
			</section>
		</>
	)
}

export default AuthPage
