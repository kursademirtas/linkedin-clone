import React from 'react';
import styles from './Post.module.css'
import {LinkedIn,ThumbUpAlt, Comment, Share, Send }from '@material-ui/icons/';

const Post = ({ post }) => {

	const {text, likes, media} = post;

	return (

		<div className={styles.post_container}>
			<div className={styles.post_top}>
				<LinkedIn color="primary" style={{fontSize:48}} />
				<span>Linkedin</span>
			</div>
			<div className={styles.post_body}>
					{text}
				<img className={styles.post_img} src={media} alt="linkedin post" />
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
