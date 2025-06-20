import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskList } from "./taskList/taskList"
import { Footer } from "./footer/footer"
import { useState } from "react"

export const TaskContainer = () => {

  const [taskList, setTaskList] = useState([])

  const addTask = (title) => {
      const newTask = {
        id: taskList.length + 1,
        title: title,
        completed: false, 
      }
      setTaskList([...taskList, newTask])
  }

  const editTask = (id, completedValue) => {
    setTaskList(
      taskList.map((task) => 
        task.id === id ? {...task, completed: completedValue} : task 
      )
    )
  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const getTaskCount = () => {
    const completedTask = taskList.filter((task) => task.completed).length
    const incompletedTask = taskList.length - completedTask
    return {
      completedTask, 
      incompletedTask
    }  
  }

  const { completedTask, incompletedTask} = getTaskCount()


  return (
    <main>
      <Header />
      <TaskInput addTask={addTask}/>
      <TaskList 
        taskList={taskList} 
        editTask={editTask} 
        deleteTask={deleteTask} 
        incompletedTask={incompletedTask}
      />
      <Footer />
    </main>
  )
}