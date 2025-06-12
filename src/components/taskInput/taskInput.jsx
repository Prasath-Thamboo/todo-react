import styles from './task.module.css'


export const TaskInput = () => {
  return (
    <div className={` box ${styles.element}`}>
        <h2 className={styles.title}>Ajoute ta tâche suivante gars</h2>
        <form className={styles.container}>
            <input 
                type="text" 
                className={styles.input} 
                placeholder='Indiquez un titre'    
            />
        </form>

        <button className='button-primary' type='submit'>
            Ajouter
        </button>
    </div>
  )
}

