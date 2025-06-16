import { TaskItem } from '../taskItem/taskItem'
import styles from './taskList.module.css'

export const TaskList = ({
  taskList, 
  editTask, 
  deleteTask,
  incompledtedTasks, 

}) => {
  return (
    <div className={styles.element}>
        <h2 className={styles.title}>
            Il te reste encore {incompledtedTasks} tâches à accomplir
        </h2>
        <ul className={styles.container}>
            <TaskItem />
        </ul>
    </div>
  )
}

