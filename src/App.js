import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const [showAddTaskForm, setShowAddTaskForm] = useState(false)

    const [tasks, setTasks] = useState([])

    // Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
        console.log(id)
    }

    // Delete Tasks
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
        // console.log('Delete', id)
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
        // console.log('Reminder', id)
    }

    return ( 
        <div className="container">
            <Header onAdd={() => setShowAddTaskForm(!showAddTaskForm)} showAdd={showAddTaskForm}/>
            {showAddTaskForm && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task'}
        </div>
    );
}

export default App;