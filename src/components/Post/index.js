import React from 'react';
import styles from './Post.module.css'

import {LinkedIn,ThumbUpAlt, Comment, Share, Send }from '@material-ui/icons/';
const Post = () => {
	return (
		<div className={styles.post_container}>
			<div className={styles.post_top}>
				<LinkedIn color="primary" style={{fontSize:48}} />
				<span>Linkedin</span>
			</div>

			<div className={styles.post_body}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam tempore magni! Vero, porro eum rerum officiis fugit illum et.
				<img className={styles.post_img} src="https://media-exp1.licdn.com/dms/image/sync/C5618AQEyVFjNIaQjMA/companyUpdate-article-image-shrink_627_1200/0/1591115941890?e=1617840000&v=beta&t=8MTURZvxwkReI77F_JutR43FiP4zqtzzo9w-H1rE_Lc" alt="linkedin post" />
			</div>
			<div className={styles.post_bottom}>
				<div className={styles.post_icon}> < ThumbUpAlt /> <span>Like</span> </div>
				<div className={styles.post_icon}> <Comment /><span>Comment</span> </div>
				<div className={styles.post_icon}> < Share/> <span>Share</span></div>
				<div className={styles.post_icon}> < Send /><span>Send</span> </div>
			</div>
		</div>
	)
}

export default Post;
