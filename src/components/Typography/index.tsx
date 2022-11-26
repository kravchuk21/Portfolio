import React from 'react'
import styles from './Typography.module.scss'

export interface Typography {
  children: React.ReactNode;
}

const Typography: React.FC<Typography> = ({ children }) => {
  return (
    <p className={styles.typography}>{children}</p>
  )
}

export default Typography
