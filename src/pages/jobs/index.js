import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import JobDetails from "../../components/JobDetails";
import PublicHeader from "../../components/PublicHeader";
import { useJobData } from "../../contexts/JobsDataContext";
import styles from "./jobs.module.css";

const Jobs = () => {
  const { jobData, searchJob, searchResult } = useJobData();
  const [currentJobId, setCurrentJobId] = useState(null);
  const numberOfJobs = searchResult.length;

  return (
    <div className={styles.jobPage_container}>
      <PublicHeader search={searchJob} />
      <div className={styles.job_content}>
        <aside className={styles.job_list}>
          <h2>{numberOfJobs} Result </h2>
          {numberOfJobs
            ? jobData.map((job) => (
                <JobCard
                  job={job}
                  key={job.id}
                  setCurrentJobId={setCurrentJobId}
                />
              ))
            : "Loading..."}
        </aside>
        {currentJobId && <JobDetails jobData={jobData} id={currentJobId} />}
      </div>
    </div>
  );
};

export default Jobs;
