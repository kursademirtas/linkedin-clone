import React from 'react';

import PublicHeader from '../../components/PublicHeader';


import './homepage.css'

function Homepage() {
	
	return (
		<div className="homepage">
			<PublicHeader /> 
			<section className="welcome_section">
				<div classname="welcome_intent">
					<h2 className="welcome_title">Welcome to your professional community</h2>
					<ul className="intent_container">
						<li className="intent">Search for a job<span>&gt;</span></li>
						<li className="intent">Find a person you know<span>&gt;</span></li>
						<li className="intent">Learn a new skill<span>&gt;</span></li>
					</ul>
				</div>
				<img src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn" alt="illustiration " className="illustiration-homepage"/>
			</section>
		
		</div>
	)
}

export default Homepage;
