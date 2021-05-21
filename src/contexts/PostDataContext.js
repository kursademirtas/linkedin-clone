import React, { useContext, useState, useEffect } from "react";
import { db, projectStorage } from "../firebaseConfig";

const PostDataContext = React.createContext();

export function usePostData() {
  return useContext(PostDataContext);
}

export function PostDataProvider({ children }) {

  const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const loading = progress===100 || progress===0 ? false : true 

    useEffect(() => {
      if (file) {
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on(
          "state_changed",
          (snap) => {
            // track the upload progress
            let percentage = Math.round(
              (snap.bytesTransferred / snap.totalBytes) * 100
            );
            setProgress(percentage);
          },
          (err) => {
            setError(err);
          },
          async () => {
            const downloadUrl = await storageRef.getDownloadURL();
            setUrl(downloadUrl);
          }
        );
      }
    }, [file]);

    return { url, error, loading,progress };
  };

  const [postData, setPostData] = useState([]);

  const fetchData = async () => {
    const citiesRef = db.collection("Post");
    const snapshot = await citiesRef.get();
    const collections = [];
    snapshot.forEach((doc) => {
      const data = Object.assign(doc.data(), { id: doc.id });
      collections.push(data);
    });
    setPostData(collections);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addPost = async (post) => {
    await db.collection("Post").add(post);
    fetchData();
  };

  const value = {
    postData,
    addPost,
    useStorage,
  };

  return (
    <PostDataContext.Provider value={value}>
      {children}
    </PostDataContext.Provider>
  );
}
