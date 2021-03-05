import React from 'react'
import {Event,  Photo, YouTube, Create} from '@material-ui/icons';
import styles from  './postbox.module.css'

const PostBox = () => {
	return (
		<div className={styles.postBox_container}>
			<div className={styles.postBox_input}>
				<img className={styles.avatar_img} src="https://randomuser.me/api/portraits/women/40.jpg" alt="avatar"/>
				<input  type="text" placeholder="Start a post..." />
			</div>
			<div className={styles.postBox_menu}>
				<div className={styles.postBox_menu_item}>
					<Photo />
					<span>Photo</span>
				</div>
				<div className={styles.postBox_menu_item}>
					<YouTube />
					<span>Video</span>
				</div>
				<div className={styles.postBox_menu_item}>
					<Event />
					<span>Event</span>
				</div>
				<div className={styles.postBox_menu_item}>
					<Create />
					<span>Write Article</span>
				</div>
			</div>
		</div>
	)
}

export default PostBox;
