import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskList } from "./taskList/taskList"
import { Footer } from "./footer/footer"
import { useState } from "react"

export const TaskContainer = () => {

  const [taskList, setTaskTitle] = useState([])

  const addTask = (title) => {
      const newTask = {
        id: taskList.length + 1,
        title: title,
        completed: false, 
      }
      setTaskTitle([...taskList, newTask])
  }

  const editTasks = (id, completedValue) => {
    setTaskTitle(
      taskList.map((task) => 
        task.id === id ? {...task, completed: completedValue} : task 
      )
    )
  }

  const deleteTasks = (id) => {
    setTaskTitle(taskList.filter((task) => task.id !== id))
  }

  const getTaskCount = () => {
    const completedTasks = taskList.filter((task) => task.completed.length === true)
    const incompletedTasks = taskList.length - completedTasks
    return {
      completedTasks, 
      incompletedTasks
    }  
  }

  const { completedTasks, incompletedTasks} = getTaskCount



  return (
    <main>
      <Header />
      <TaskInput addTask={addTask}/>
      <TaskList 
        taskList={taskList} 
        editTasks={editTasks} 
        deleteTasks={deleteTasks} 
        incompletedTasks={incompletedTasks}
      />
      <Footer />
    </main>
  )
}