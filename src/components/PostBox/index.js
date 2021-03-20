import React from 'react'
import {Event,  Photo, YouTube, Create} from '@material-ui/icons';
import styles from  './postbox.module.css'
import PostInput from '../PostInput';
import Avatar from '../Avatar'

const PostBox = () => {
	return (
		<div className={styles.postBox_container}>
			<div className={styles.postBox_input}>
				<Avatar size={'48px'}/>
				<PostInput />
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
