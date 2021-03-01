import React, {useRef, useState} from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import Logo from '../../components/Logo';
import { Alert } from '@material-ui/lab'

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
		} catch {
			setError("Failed to create an account")
		}

		setLoading(false);
	}


	return (
		<div className="signup_container">
			<div>
				<Logo />
				<p className="signup_text">Make the most of your professional life</p>
			</div>

			<div className="signup_form_container">
				{error &&  <Alert severity="error">{error}</Alert>}
				<form className="form_elements" onSubmit={handleSubmit}>
					<label htmlFor="email">Email</label>
					<input className="signup_input" id="email"  type="email" ref={emailRef} required />
					<label htmlFor="password">Password(6 or more characters)</label>
					<input className="signup_input"  id="password"  type="password" ref={passwordRef} required />
					<button className="btn_primary">Forgot password?</button>
					<input className="btn_signup" type="submit"  value="Agree and Join"/>
				</form>
				<span className="or">Or</span>
				<button className="google-signin">Join with Google</button>
				<p className="signup_text">Already on Linkedin?</p>
				<button disabled={loading} className="btn_primary">Sign in</button>
			</div>

	</div>
	)
}

export default Signup
