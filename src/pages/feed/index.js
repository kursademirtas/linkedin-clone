import React from 'react'
import PostBox from '../../components/PostBox'
import Sidebar from '../../components/SideBar'
import Header from '../../components/Header'
import styles from './feed.module.css'
import Post from '../../components/Post'
import Widgets from '../../components/Widgets'

function feed() {
	return (
		<div className={styles.feed_container}>
			<Header />
			<div className={styles.feed_body}>
				<Sidebar />
				<div>
					<PostBox />
					<Post />
				</div>
				<Widgets />
			</div>
		</div>
	)
}

export default feed
