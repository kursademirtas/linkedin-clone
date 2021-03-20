import React from 'react'
import { usePostData } from '../../contexts/PostDataContext'
import PostBox from '../../components/PostBox'
import Sidebar from '../../components/SideBar'
import Header from '../../components/Header'
import styles from './feed.module.css'
import Post from '../../components/Post'
import Widgets from '../../components/Widgets'

const Feed = () => {
	const { postData } = usePostData();
	
	return (
		<div className={styles.feed_container}>
			<Header />
			<div className={styles.feed_body}>
				<Sidebar />
				<div>
					<PostBox />
					{postData.map(post => <Post post={post}/>)}
				</div>
				<Widgets />
			</div>
		</div>
	)
}

export default Feed;
