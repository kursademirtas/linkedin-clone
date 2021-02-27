import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import './homepage.css'

function Homepage() {
	return (
		<div className="homepage">

			<header className="homepage_header">
			<Logo />
				<div>

					<Link to="/login"><button className="btn_join">Join Now</button></Link>
					<Link to="/login"><button className="btn_login_small">Sign in</button></Link>
				</div>
			</header>

			<section className="welcome_section">
				<div classname="welcome_intent">
					<h2 className="welcome_title">Welcome to your professional community</h2>
					<ul className="intent_container">
						<li className="intent">Search for a job<span>></span></li>
						<li className="intent">Find a person you know<span>></span></li>
						<li className="intent">Learn a new skill<span>></span></li>
					</ul>
				</div>

				<img src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn" alt="illustiration " className="illustiration-homepage"/>
			</section>
		
		</div>
	)
}

export default Homepage;
