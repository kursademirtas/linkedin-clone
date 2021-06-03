import React from "react";
import Logo from "../Logo";
import { Link, useHistory } from "react-router-dom";
import styles from "./publicHeader.module.css";
import SearchBar from "../SearchBar";

const PublicHeader = ({ learningPage, peoplePage, search, withSearch }) => {
  const initialOption = peoplePage
    ? "people"
    : learningPage
    ? "learning"
    : "jobs";

  const history = useHistory();
  const path = history.location.pathname;

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div className={styles.searchBar}>
        {withSearch && (
          <SearchBar initialOption={initialOption} search={search} />
        )}
      </div>
      <div>
        <Link to="/signup">
          <button className={styles.btn_join}>Join Now</button>
        </Link>
        <Link to="/login">
          <button className={styles.btn_login_small}>Sign in</button>
        </Link>
      </div>
    </header>
  );
};

export default PublicHeader;
