import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskList } from "./taskList/taskList"
import { Footer } from "./footer/footer"



export const TaskContainer = () => {
  return (
    <main>
      <Header />
      <TaskInput />
      <TaskList />
      <Footer />
    </main>
  )
}