import React, { useState, useEffect } from 'react';
import styles from './JobDetails.module.css';


const JobDetails = ({ jobData,id }) => {
	console.log(jobData)

	//To-do: 
	const current = jobData.find(item => item.id==id);
	const [showMore, setShowMore] = useState(false)
	const [validSalary, setValidSalary] = useState(false)
	const { Job_title, City, Company, Rating, Job_Desc, Valid_until, Max_Salary, Min_Salary,Job_Type,Industry} = current;

	const truncatedDescription = Job_Desc.slice(0, 200);

	function isSalaryValid() {
		if(Max_Salary === "-1") return;
		if(Min_Salary === "-1") return;
		setValidSalary(true)
	}

	useEffect(() => {
		isSalaryValid()
		setShowMore(false)
	}, [current])


	return (
		<div className={styles.JobDetails_container}>
			<div className={styles.card}  >
				<img src="https://marka-logo.com/wp-content/uploads/2020/08/Bitcoin-Logo.png" width="72" height="72" alt="logo"/>	
				<h2 className={styles.title} >{Job_title}</h2>
				<div className={styles.card_info}>	
					<p>{Company}</p>
					<p>{City}</p>
				</div>
				<p className={styles.clr_primary}>Be among  the first 10 applicants.</p>
				<div>
					<button className={styles.btn_apply }>Apply now</button>
					<button className={styles.btn_save}>Save</button>
				</div>
			</div>

			<div className={styles.description}>
				<h3 className={styles.desc_title}>Job Description:</h3>
				<p className={styles.desc_text}>{showMore? Job_Desc : truncatedDescription}</p>
				<button className={styles.btn_show} onClick={() => setShowMore(!showMore)}>{showMore? "Show less" : "Show more"}</button>
				
				<div className={styles.desc_bottom}>
					<p>Employment type <span>{Job_Type}</span></p>
					<p>Industries <span>{Industry}</span></p>
					<p>Salary Range <span> {validSalary ? "$"+Min_Salary +"/yr" + " - " +"$"+Max_Salary +"/yr": "No salary information" }</span></p>
					<p>Valid until<span>{Valid_until}</span></p>
				</div>
			
			</div>
		</div>
	)
}

export default JobDetails;
