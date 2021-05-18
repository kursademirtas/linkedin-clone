import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import staticData from "./staticdata";

//Similiar redux-createStore;
const JobDataContext = React.createContext();

export function useJobData() {
  return useContext(JobDataContext);
}

export function JobDataProvider({ children }) {
  const [jobData, setJobData] = useState(staticData);
  const [searchResult, setSearchResult] = useState(jobData);
  //Search another solution for fetch data.
  const fetchData = async () => {
    const citiesRef = db.collection("jobsData");
    const snapshot = await citiesRef.get();
    const collections = [];
    snapshot.forEach((doc) => {
      const data = Object.assign(doc.data(), { id: doc.id });

      collections.push(data);
    });
    setJobData(collections);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchJob = (title, location) => {
    setSearchResult(
      jobData.filter((job) => {
        return job.Job_title.includes(title) || job.City.includes(location);
      })
    );
  };

  const value = {
    jobData,
    searchJob,
    searchResult,
  };

  return (
    <JobDataContext.Provider value={value}>{children}</JobDataContext.Provider>
  );
}
