import { TaskItem } from '../taskItem/taskItem'
import styles from './taskList.module.css'

export const TaskList = ({
  taskList, 
  editTask, 
  deleteTask,
  incompletedTask, 

}) => {

  const tasksList = taskList.map((task) => (
  <TaskItem key={task.id} />))

  return (
    <div className={styles.element}>
        <h2 className={styles.title}>
            Il te reste encore {incompletedTask} tâches à accomplir
        </h2>
        
            {taskList && taskList.length > 0 && (
              <ul className={styles.container}>
                {tasksList}
              </ul>
            )}
        
    </div>
  )
}

