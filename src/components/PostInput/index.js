import React from "react";
import Modal from "react-modal";
import ModalForm from "../ModalForm";
import styles from "./PostInput.module.css";

Modal.setAppElement("#root");

const PostInput = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.post_container}>
      <input
        onClick={() => openModal()}
        type="textarea"
        placeholder="Start a post..."
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Post Modal"
      >
        <ModalForm closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default PostInput;
