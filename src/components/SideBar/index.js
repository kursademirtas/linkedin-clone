import React from 'react';
import {PhotoCamera, PersonAdd,TurnedIn, Add} from '@material-ui/icons';
import './sidebar.css'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar_top">
				<div className="welcome">
					<div  className="bg_wheat"/>
					<div className="avatar">
						<PhotoCamera />
					</div>
				
					<h3>Welcome, User</h3>
					<a href="/">Add a Photo</a>
				</div>
				<div className="connections">
					<div>
						<h4>Connections</h4>
						<p>Grow your Network</p>
					</div>
					<PersonAdd />
				</div>
				<div className="items">
					<TurnedIn />
					<h4 >My Items</h4>
				</div>
			</div>
			<div className="sidebar_bottom">
				<div className="sidebar_menu">
					<ul>
						<li>Groups</li>
						<li>Events</li>
						<li>Followed Hashtags</li>
					</ul>
					<div className="add_btn">
						<Add />
					</div>
				
				</div>
				<p>Discover More</p>
			</div>
		</div>
	)
}

export default Sidebar
