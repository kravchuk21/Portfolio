import React from 'react'
import styles from './Title.module.scss'

interface Title {
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: React.ReactNode;
}

const Title: React.FC<Title> = ({ children, tag = 'h1' }) => {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.title}>{children}</h1>
		case 'h2':
			return <h2 className={styles.title}>{children}</h2>
		case 'h3':
			return <h3 className={styles.title}>{children}</h3>
		case 'h4':
			return <h4 className={styles.title}>{children}</h4>
		case 'h5':
			return <h5 className={styles.title}>{children}</h5>
		case 'h6':
			return <h6 className={styles.title}>{children}</h6>
		default:
			return <h1 className={styles.title}>{children}</h1>
	}
}

export default Title
