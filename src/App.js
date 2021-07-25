import { useState } from "react"
import Header from "./components/Header"
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = ()=> {

  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: 'Aug 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: "Shopping",
      day: 'Aug 6th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: "Grocerries",
      day: 'Aug 7th at 2:30pm',
      reminder: true,
    },
    {
      id: 4,
      text: "Doctor's Appointment",
      day: 'Aug 12th at 2:30pm',
      reminder: true,
    }
  ])

  // Add Task
 const addTask = (task) => {
   const id = Math.floor(Math.random() * 10000) +1 //random id
   const newTask = { id, ...task}
   setTasks([...tasks, newTask])
  } 

  // Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder } : task))
    // console.log(id)
  }

  // && is a ternary same as  ? value1:value2 here value2=''
  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No tasks to Show'}
    </div>
  );
}

export default App;
