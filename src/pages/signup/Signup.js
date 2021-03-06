import React, {useRef, useState} from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory} from 'react-router-dom';
import Logo from '../../components/Logo';
import { Alert } from '@material-ui/lab';
import styles from './Signup.module.css';
import Footer from '../../components/Footer';

const Signup = () => {

	const emailRef = useRef();
	const passwordRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();


	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			history.push("/feed");
		}catch {
			setError("Failed to create an account")
		}
		setLoading(false);
	}


	return (

		<div className={styles.signup_container}>
			<div className={styles.signup_text}>
				<Logo />
				<p >Make the most of your professional life</p>
			</div>
			<div className={styles.form_container}>
				{error &&  <Alert severity="error">{error}</Alert>}
				<form className={styles.form_elements} onSubmit={handleSubmit}>
					<label htmlFor="email">Email</label>
					<input className={styles.input} id="email"  type="email" ref={emailRef} required />
					<label htmlFor="password">Password(6 or more characters)</label>
					<input className={styles.input}  id="password"  type="password" ref={passwordRef} required />
					<p className={styles.agreement}>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>	
					<input className={styles.btn_signup} type="submit"  value="Agree and Join"/>
				</form>
				<span className={styles.or}>Or</span>
				<button className={styles.btn_google}><img src="https://i.stack.imgur.com/22WR2m.png" alt="google icon" className={styles.google_icon}/>Join with Google</button>
				<div className={styles.signin}>
					<p >Already on Linkedin?</p>
					<button disabled={loading} className="btn_primary">Sign in</button>
				</div>
			</div>
			<Footer />
		</div>
	

	)
}

export default Signup
