import NavBar from '../../components/NavBar/NavBar'
import styles from './AuthPage.module.scss'

const AuthPage = () => {
	return (
		<div className={styles.container}>
			<NavBar isVisible={true} />
			<section>
				<h2>Authorization</h2>
				<div>
					<div>
						<input type="text" placeholder="Enter email..." id="email" />
						<label htmlFor="email">Email</label>
						<input
							type="password"
							placeholder="Enter password..."
							id="password"
						/>
						<label htmlFor="password">Password</label>
					</div>
                    <button>Log in</button>
				</div>
				<p>
					Don't have an account? <span>Sign up!</span>
				</p>
			</section>
		</div>
	)
}

export default AuthPage
