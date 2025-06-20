import styles from './taskItem.module.css'


export const TaskItem = ({task, editTask, deleteTask}) => {
  return (
    <li 
      className={`${styles.container} ${task?.completed ? styles.success : styles.default}`}
      onclick={() => editTask(task.id, !task.completed)}
    >
        <div className={styles.item}>
            <div className={`${styles.id} ${task?.completed ? styles.success : styles.idDefault}`}>
                {task.id}
            </div>
            <div className={styles.contentDefault}>
                {task.title}
            </div>
        </div>
        <button onclick={deleteTask}>X</button>
    </li>
  )
}


