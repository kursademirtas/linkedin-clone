import React from "react";
import { usePostData } from "../../contexts/PostDataContext";
import PostBox from "../../components/PostBox";
import Sidebar from "../../components/SideBar";
import Header from "../../components/Header";
import styles from "./feed.module.css";
import Post from "../../components/Post";
import Widgets from "../../components/Widgets";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useState } from "react/cjs/react.development";

const Feed = () => {
  const { postData } = usePostData();
  const [scrollY, setScrollY] = useState(0);

  useScrollPosition(({ prevPos, currPos }) => {
    setScrollY(currPos.y)
  });

  const sortedData = postData.sort(function (x, y) {
    return y.date - x.date;
  });

  return (
    <div className={styles.feed_container}>
      <Header />
      <div className={styles.feed_body}>
        <Sidebar scrollY={scrollY} />
        <div className={styles.flow}>
          <PostBox />
          {sortedData.map((post) => (
            <Post post={post} />
          ))}
        </div>
        <Widgets scrollY={scrollY} />
      </div>
    </div>
  );
};

export default Feed;
