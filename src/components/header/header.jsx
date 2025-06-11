import React from 'react'
import styles from './header.module.css'
import reactLogo from '../../assets/react.svg'

export const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <img src={reactLogo} alt="logo" width={50} height={50} />
        </div>

        <div>
            <h1>Tâches quotidiennes</h1>
            <code>Salut tout le monde</code>
        </div>
      
        <code className='color-primary'>
            V.1.0
        </code>
    </div>
  )
}

