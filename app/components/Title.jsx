import React from 'react'
import styles from '../page.module.css'

const Title = ({ text }) => {
  return (
    <div className={styles.title}>
        {text}
    </div>
  )
}

export default Title