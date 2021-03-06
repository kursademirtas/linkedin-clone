import React from 'react';
import Logo from '../Logo';

import styles from './Footer.module.css';


const Footer= () => {

	const footerİtems = [<Logo />, 
		"2020","About","Accessibility","User Agreement",
		"Privacy Policy","Cookie Policy","Copyright Policy",
		"Brand Policy","Guest Controls","Community Guidelines",
	]

	return (
		<footer >
			<ul className={styles.footer_container}>
				{footerİtems.map(item => (<li className={styles.footer_item} >{item}</li>))}
			</ul>
		</footer>
	)
}

export default Footer;
