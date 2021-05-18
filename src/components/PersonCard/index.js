import React from "react";
import styles from './PersonCard.module.css'
const PersonCard = ({ person }) => {
  const { profile_picture, name, company, city, job_title } = person;
  return (
    <div className={styles.personCard}>
      <img  src={profile_picture} alt={`${name}, linkedin profile picture`} />
	  <div className={styles.card_body}>
		  <h3>{name}</h3>
		  <h4>{job_title + ' at ' + company}</h4>
		  <p>🏙 {city}</p>
		  <p>💼 {company}</p>
	  </div>
    </div>
  );
};

export default PersonCard;
