import React from 'react'
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import styles from './publicHeader.module.css'
import SearchBar from '../SearchBar';


const PublicHeader = () => {
	return (
		<header className={styles.header}>
			
				<Logo className={styles.logo}/>
				<div className={styles.searchBar}>
					<SearchBar />
				</div>
				<div>
					<Link to="/signup"><button className={styles.btn_join}>Join Now</button></Link>
					<Link to="/login"><button className={styles.btn_login_small }>Sign in</button></Link>
				</div>
		</header>
	)
}

export default PublicHeader
