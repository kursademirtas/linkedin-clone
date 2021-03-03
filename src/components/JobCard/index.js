import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './JobCard.module.css';

const JobCard = ({ job, setCurrentJobId }) => {


	const {id, Job_title, City, Company, Rating} = job;

	console.log(job)
	

	return (
	
	<div className={styles.card}  >
		<h2 className={styles.title} value={job.id} id={id}  onClick={(e) => setCurrentJobId(e.target.id)} >{Job_title}</h2>
		<p className={styles.category_name}>{Company}</p>
		<p className={styles.state_info}>{City}</p>
		<span>Rating: {Rating }</span>
	</div>
	)
}

export default JobCard;
