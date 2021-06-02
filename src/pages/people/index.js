import React from "react";
import { usePeopleData } from "../../contexts/PeopleDataContext";
import PublicHeader from "../../components/PublicHeader";
import Footer from "../../components/Footer";
import styles from "./peoplePage.module.css";
import PersonCard from "../../components/PersonCard";

const PeoplePage = () => {
  const { peopleData,  searchResult, searchPerson } = usePeopleData();

  const numberOfPerson = searchResult.length;

  const HeroSection = () => {
    return (
      <div className={styles.wrapper}>
        <img
          src="https://static-exp1.licdn.com/sc/h/dfa1erc1uncnl1po7l2v7yawd"
          alt="an illustration about talking to two people on the blue couch"
          width="200px"
        />
        <p>
          Try searching for your co-worker, classmate, professor, or friend.
        </p>
      </div>
    );
  };

  return (
    <div className={styles.page_container}>
      <PublicHeader peoplePage={true} search={searchPerson} withSearch/>
      {numberOfPerson ? (
        searchResult.map((person) => {
          return <PersonCard key={person.id} person={person}/>;
        })
      ) : (
        <HeroSection />
      )}
    </div>
  );
};

export default PeoplePage;
