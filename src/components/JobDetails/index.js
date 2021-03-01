import React from 'react';
import styles from './JobDetails.module.css';


const JobDetails = ({ jobData,id }) => {

	const current = jobData.find(item => item.id==id);
	const { Job_title, City, Company, Rating, description, time, logo} = current;

	return (
		<div className={styles.JobDetails_container}>
			<div className={styles.card}  >
				<img src={logo} width="72" height="72" alt="logo"/>
				<h2 className={styles.title} >{Job_title}</h2>
				<div>	
					<p className={styles.category_name}>{Company}</p>
					<p className={styles.state_info}>{City}</p>
				</div>
				<div>
					<p className={styles.time}>{time}</p>
					<p>Be among  the first 10 applicants.</p>
				</div>
				<div>
					<button>Apply now</button>
					<button>Save</button>
				</div>
			</div>
			<div className={styles.description}>

			</div>
		</div>
	)
}

export default JobDetails;
