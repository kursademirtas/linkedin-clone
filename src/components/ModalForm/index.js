import React, { useEffect, useState } from "react";
import styles from "./ModalForm.module.css";
import Avatar from "../Avatar";
import { Image, YouTube, Add, AddLocation } from "@material-ui/icons";
import { usePostData } from "../../contexts/PostDataContext";
import UserAvatar from "../UserAvatar";

const ModalForm = ({ closeModal }) => {
  const { addPost, useStorage } = usePostData();
  const [file, setFile] = useState(null);
  const [postText, setPostText] = useState("");
  const [postMedia, setPostMedia] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const types = ["image/png", "image/jpeg", "image/jpg"];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);
      } else {
        setFile(null);
        setError("Please select an image file (png or jpg)");
      }
    }
  };

  const { loading, url, progress } = useStorage(file);

  useEffect(() => {
    setPostMedia(url);
  }, [url]);

  const sendPost = (text, media) => {
    let date = new Date();
    addPost({ text, media, date });
    closeModal();
  };

  const addHashtag = () => {
    setPostText(postText + '#');
  }

  return (
    <div>
      <div className={styles.top}>
        <h2>Create a post</h2>
        <span onClick={() => closeModal()}>X</span>
      </div>
      <UserAvatar />
      <div className={styles.column_wrapper}>
        <textarea
          onChange={(e) => setPostText(e.target.value)}
          value={postText}
          cols="20"
          rows="5"
          placeholder="What do you want to talk about?"
        />
        <button onClick={addHashtag} className={styles.btn_blue}>Add hashtag</button>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <button>
            {" "}
            <Add />
          </button>
          <label htmlFor="media-upload">
            <Image />
            <input
              id="media-upload"
              type="file"
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </label>
          <button>
            {" "}
            <YouTube />
          </button>
          <button>
            {" "}
            <AddLocation />
          </button>
        </div>
        <button
          disabled={loading}
          className={styles.btn_gray}
          onClick={() => sendPost(postText, postMedia)}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
