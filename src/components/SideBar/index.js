import React from 'react';
import { PersonAdd,TurnedIn, Add} from '@material-ui/icons';
import  styles from './sidebar.module.css'

const Sidebar = ({scrollY}) => {

	const isTop = scrollY < -325 ? true : false;
	const bottomBarStyle = isTop ? styles.sidebar_fixed : styles.sidebar_bottom
	
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar_top}>
				<div className={styles.welcome}>
					<div  className={styles.bg_wheat}/>
						<img className={styles.avatar} src="https://randomuser.me/api/portraits/women/40.jpg" alt="avatar"/>
					<h3>Welcome, User</h3>
					<a href="/">Add a Photo</a>
				</div>
				<div className={styles.connections}>
					<div>
						<h4>Connections</h4>
						<p>Grow your Network</p>
					</div>
					<PersonAdd />
				</div>
				<div className={styles.items}>
					<TurnedIn />
					<h4 >My Items</h4>
				</div>
			</div>
			<div className={bottomBarStyle}>
				<div className={styles.sidebar_menu}>
					<ul>
						<li>Groups</li>
						<li>Events</li>
						<li>Followed Hashtags</li>
					</ul>
					<div className={styles.add_btn}>
						<Add />
					</div>
				</div>
				<p>Discover More</p>
			</div>
		</div>
	)
}

export default Sidebar
