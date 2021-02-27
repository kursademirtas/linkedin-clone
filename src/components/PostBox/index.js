import React from 'react'
import {Event, Person, Photo, YouTube, Create} from '@material-ui/icons';
import './postbox.css'

const PostBox = () => {
	return (
		<div className="postBox_container">
			<div className="postBox_input">
				<Person style={{fontSize:48}} />
				<input  type="text" placeholder="Start a post..." />
			</div>
			<div className="postBox_menu">
				<div className="postBox_menu_item">
					<Photo />
					<span>Photo</span>
				</div>
				<div className="postBox_menu_item">
					<YouTube />
					<span>Video</span>
				</div>
				<div className="postBox_menu_item">
					<Event />
					<span>Event</span>
				</div>
				<div className="postBox_menu_item">
					<Create />
					<span>Write Article</span>
				</div>
			</div>
		</div>
	)
}

export default PostBox;
