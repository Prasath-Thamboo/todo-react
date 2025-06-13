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


  return (
    <main>
      <Header />
      <TaskInput addTask={addTask}/>
      <TaskList />
      <Footer />
    </main>
  )
}