import React from 'react'
import styles from './Widgets.module.css'


const Widgets = () => {
	return (
		<div className={styles.widgets_container}>
			<div className={styles.recommend_widgets}>
				<h3 className={styles.widget_subtitle}>Add to your feed</h3>
				<div className={styles.recommend_item}>
					<img className={styles.icon} src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" alt="javascript icon"/>
					<div>
						<h4>#JavaScript</h4>
						<button className={styles.btn_follow}>+ Follow</button>
					</div>
				</div>
				<div className={styles.recommend_item}>
					<img className={styles.icon} src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" alt="pyton icon"/>
					<div>
						<h4>#Python</h4>
						<button className={styles.btn_follow}>+ Follow</button>
					</div>
				</div>
				<div className={styles.recommend_item}>
				<img className={styles.icon} src="https://styles.redditmedia.com/t5_3h7yi/styles/communityIcon_9ds9kugm99g51.png?width=256&s=3ee4c30d4736dc4024319d53c20c6dacb5d11bb0" alt="javascript icon"/>
					<div>
						<h4>#Next.js</h4>
						<button className={styles.btn_follow}>+ Follow</button>
					</div>
				</div>
				<button className={styles.btn_viewMore}>View all recommendations</button>
			</div>

			<div className={styles.course_widgets}>
				<h3 className={styles.widget_subtitle}>Todays most viewed courses</h3>
				<ul>
					<li>
						The Six Morning Habits of High Performance
						<span>Pete Mockaitis| How to Be Avesome</span>	
					</li>
					<li>
						Speaking Confidently and Effectively
						<span>Pete Mockaitis| How to Be Avesome</span>	
					</li>
					<li>
						Unconsious Bias
						<span>Stacey Gordon</span>	
					</li>
				</ul>
			</div>

			<div className={styles.banner_widget}>
				<img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="linkedin banner" />
			</div>
		</div>
	)
}

export default Widgets
