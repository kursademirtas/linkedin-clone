import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import styles from "./searchBar.module.css";
import { useJobData } from "../../contexts/JobsDataContext";

const SearchBar = ({ initialOption, search }) => {
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);

 function handleClick (e) {
	e.preventDefault();
	search(firstValue, secondValue);
	setFirstValue(null);
	setSecondValue(null);
  }

  const [currentOption, setCurrentOption] = useState(initialOption);
  //When change option, search input placeholder will set according to option.
  const inputLabel = {
    jobs: ["Search job titles or companies", "Location"],
    people: ["Name", "Surname"],
    learning: ["Search skills, subjects, or software", "Instructor"],
  };

  return (
    <form className={styles.form_container}>
      <select
        name="category-option"
        className={styles.category_select}
        value={currentOption}
        onChange={(e) => setCurrentOption(e.target.value)}
      >
        <option value="jobs">Jobs</option>
        <option value="people">People</option>
        <option value="learning">Learning</option>
      </select>
      <input
        type="text"
        placeholder={inputLabel[currentOption][0]}
        className={styles.search_input}
        value={firstValue}
        onChange={(e) => setFirstValue(e.target.value)}
      />
      <input
        type="text"
        placeholder={inputLabel[currentOption][1]}
        className={styles.search_input}
        value={secondValue}
        onChange={(e) => setSecondValue(e.target.value)}
      />
      <button type="submit" className={styles.search_button} onClick={(e) => handleClick(e)}>
        <Search />
      </button>
    </form>
  );
};

export default SearchBar;
