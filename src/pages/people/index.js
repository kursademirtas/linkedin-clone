import React from 'react'
import PublicHeader from '../../components/PublicHeader'
import Footer from '../../components/Footer'
import styles from './peoplePage.module.css'

const PeoplePage = () => {
	return (
		<div className={styles.page_container}>
			<PublicHeader  peoplePage={true}/>
			<div className={styles.wrapper}>
				<img src="https://static-exp1.licdn.com/sc/h/dfa1erc1uncnl1po7l2v7yawd" alt="an illustration about talking to two people on the blue couch" width='200px' />
				<p>Try searching for your co-worker, classmate, professor, or friend.</p>
			</div>
			<Footer/>
		</div>
	
	)
}

export default PeoplePage
