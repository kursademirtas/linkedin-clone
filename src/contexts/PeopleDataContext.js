import React, { useContext, useState } from "react";
import { peopleData as data } from "./staticdata";

const PeopleDataContext = React.createContext();

export function usePeopleData() {
  return useContext(PeopleDataContext);
}

export function PeopleDataProvider({ children }) {
  const [peopleData, setPeopleData] = useState(data);
  const [searchResult, setSearchResult] = useState([]);

  const searchPerson = (name, surname) => {
    const fullName = name + surname;
    setSearchResult(
      peopleData.filter((people) => {
        return people.name.toLowerCase().includes(fullName.toLowerCase());
      })
    );
  };

  const value = {
    peopleData,
    searchPerson,
    searchResult,
  };

  return (
    <PeopleDataContext.Provider value={value}>
      {children}
    </PeopleDataContext.Provider>
  );
}
