import styles from './footer.module.css'


export const Footer = () => {
  return (
    <footer className={styles.container}>
        <code className={styles.footer}>
            Tu as réalisé X tâches
        </code>
    </footer>
  )
}


