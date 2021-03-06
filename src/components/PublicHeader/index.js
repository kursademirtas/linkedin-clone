import React from 'react'
import Logo from '../Logo';
import { Link, useHistory } from 'react-router-dom';
import styles from './publicHeader.module.css'
import SearchBar from '../SearchBar';


const PublicHeader = () => {

	const history = useHistory();
	const path = history.location.pathname

	return (
		<header className={styles.header}>
			
				<Logo className={styles.logo}/>
				<div className={styles.searchBar}>
					{path !== "/" ?  <SearchBar /> :null}
				</div>
				<div>
					<Link to="/signup"><button className={styles.btn_join}>Join Now</button></Link>
					<Link to="/login"><button className={styles.btn_login_small }>Sign in</button></Link>
				</div>
		</header>
	)
}

export default PublicHeader
