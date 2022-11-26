import React from 'react'
import styles from './Typography.module.scss'

export interface Typography {
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<Typography> = ({ children, className }) => {
  return (
    <p className={styles.typography + ' ' + className}>{children}</p>
  )
}

export default Typography
