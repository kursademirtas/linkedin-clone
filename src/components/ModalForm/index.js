import React, {useState} from 'react'
import styles from './ModalForm.module.css';
import Avatar from '../Avatar';
import { Image, YouTube, Add, AddLocation } from '@material-ui/icons';
import { usePostData } from '../../contexts/PostDataContext'


const ModalForm = ({closeModal}) => {

	
	const {addPost, useStorage} = usePostData();
	const [file, setFile] = useState(null);
	const {progress, url} = useStorage(file);
	const [postText, setPostText] = useState('');
	const [postMedia, setPostMedia] = useState('');
    const [error, setError] = useState(null);
   
	console.log(url)
	const handleChange = (e) => {
		const types = ["image/png", "image/jpeg", "image/jpg"];
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (types.includes(selectedFile.type)) {
                setError(null);
                setFile(selectedFile);
				setPostMedia(url)
            } else {
                setFile(null);
                setError("Please select an image file (png or jpg)");
            }
        }
    };

	const sendPost = (text, media, time)  =>{
		addPost({text, media, time})
		closeModal();
	}
	
	return (
		<div>
			<div className={styles.top}>
				<h2>Create a post</h2>
					<span onClick={() => closeModal()}>X</span>
				</div>
				<div className={styles.user_info}>
					 <Avatar size={'48px'}/>
					 <p>Alexa Siri</p>
				</div>
				<textarea onChange={(e) => setPostText(e.target.value)}  value={postText} cols="20" rows="5"  placeholder='What do you want to talk about?' />
				<button className={styles.btn_blue}>Add hashtag</button>
				<div className={styles.wrapper}>
					<div className={styles.buttons}>
						<button> <Add /></button>
						<label htmlFor="media-upload"><Image />
						<input id="media-upload" type="file" onChange={handleChange} style={{display:'none'}}/>
						</label>
						<button> <YouTube /></button>
						<button> <AddLocation /></button>
					</div>
					<button className={styles.btn_gray} onClick={() => sendPost(postText,postMedia, 'now')}>Post</button>
				</div>
		</div>
	)
}


export default ModalForm;