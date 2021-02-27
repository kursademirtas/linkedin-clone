import React, {useState, useRef} from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import { Alert } from '@material-ui/lab'
import Logo from '../../components/Logo'
import './login.css'


const Login = () => {

	const history = useHistory();
	const { currentUser } = useAuth();

	if(currentUser) history.push("/feed");

	const emailRef = useRef();
	const passwordRef = useRef();
	const {login} = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	
	
	async function handleSubmit(e) {
		e.preventDefault();
		console.log(emailRef.current.value)
		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/feed")

		}catch {
			setError("Failed to login")
			
		}
		setLoading(false)
	}

	return (
		<div className="login_container">
			<Logo />
			<div className="form_container">
				{error &&  <Alert severity="error">{error}</Alert>}
				<div>
					<h2 className="login_title">Sign in</h2>
					<p className="login_text">Stay updated on your professsional world</p>
				</div>

				<form className="form_elements" onSubmit={handleSubmit}>
					<input className="login_input" placeholder="Email or Phone"  type="email" ref={emailRef} required />
					<input className="login_input"  placeholder="Password"  type="password" ref={passwordRef} required />
					<button className="btn_primary">Forgot password?</button>
					<input className="btn_login" type="submit"  value="Sign in"/>
				</form>
			</div>

			<div>
				<p className="login_text">New to Linkedin?</p>
				<button disabled={loading} className="btn_primary">Join Now</button>
			</div>

		</div>
	)
}

export default Login;
