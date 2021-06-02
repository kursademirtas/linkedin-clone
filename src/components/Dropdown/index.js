import React, { useState } from "react";
import UserAvatar from "../UserAvatar";
import styles from "./Dropdown.module.css";
import Modal from "react-modal";
import { Person } from "@material-ui/icons";
import { useAuth } from "../../contexts/AuthContext";

Modal.setAppElement("#root");

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { logout } = useAuth();

  function openDropdown() {
    setIsDropdownOpen(true);
  }
  function closeDropdown() {
    setIsDropdownOpen(false);
  }

  return (
    <div className={styles.dropdown}>
      <div className="menu_item_container" onClick={openDropdown}>
        <Person style={{ fontSize: 24 }} />
        <span>Me&#x25BC;</span>
      </div>

      <Modal
        className={styles.modal_container}
        isOpen={isDropdownOpen}
        onRequestClose={closeDropdown}
        overlayClassName={styles.overlay}
      >
        <UserAvatar withJobTitle />
        <h3 className={styles.title}>Account</h3>
        <p className={styles.text}>Access My Premium</p>
        <p className={styles.text}>Help</p>
        <p className={styles.text}>Langouge</p>
        <p className={styles.text}>Privacy</p>
        <h3 className={styles.title}>Settings</h3>
        <p className={styles.text}>Change Password</p>
        <p className={styles.text}>Change Email</p>
        <p className={styles.text} onClick={logout}>
          Log out
        </p>
      </Modal>
    </div>
  );
};

export default Dropdown;
