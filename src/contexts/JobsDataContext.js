import React, { useContext, useState, useEffect} from 'react';
import { db } from '../firebaseConfig';
import staticData from './staticdata';

//Similiar redux-createStore;
const JobDataContext = React.createContext();

export function useJobData() {
	return useContext(JobDataContext);
}

export  function JobDataProvider ({ children }) {


	const [jobData, setJobData] = useState(staticData);
	//Search another solution for fetch data.
	const fetchData = async () =>{
		const citiesRef = db.collection('jobsData');
		const snapshot = await citiesRef.get();
		const collections = [];
			snapshot.forEach(doc => {
			const data = Object.assign(doc.data(), { id:doc.id })
	
			collections.push(data);
		});
		setJobData(collections)
	}
	 
	useEffect(() => {fetchData()},[])

	const value = {
		jobData
	}

	return (
		<JobDataContext.Provider value= {value}>
			{ children }
		</JobDataContext.Provider>
	)
}


