import React, { useContext, useState } from "react";

import { peopleData as data } from "./staticdata";

//Similiar redux-createStore;
const PeopleDataContext = React.createContext();

export function usePeopleData() {
  return useContext(PeopleDataContext);
}

export function PeopleDataProvider({ children }) {
  const [peopleData, setPeopleData] = useState(data);
  const [searchResult, setSearchResult] = useState([]);
  //Search another solution for fetch data.
  //   const fetchData = async () => {
  //     const citiesRef = db.collection("jobsData");
  //     const snapshot = await citiesRef.get();
  //     const collections = [];
  //     snapshot.forEach((doc) => {
  //       const data = Object.assign(doc.data(), { id: doc.id });

  //       collections.push(data);
  //     });
  //     setJobData(collections);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

    const searchPerson = (name, surname) => {
      setSearchResult(
        peopleData.filter((people) => {
          return people.name.includes(name) ||  people.name.includes(surname) ;
        })
      );
    };

  const value = {
    peopleData,
    searchPerson,
    searchResult
  };

  return (
    <PeopleDataContext.Provider value={value}>
      {children}
    </PeopleDataContext.Provider>
  );
}
