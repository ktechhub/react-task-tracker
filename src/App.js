import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {

    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Task 1',
                day: 'Jan 3rd at 2:00pm',
                reminder: 'true'
            },
            {
                id: 2,
                text: 'Task 2',
                day: 'Jan 23rd at 2:00pm',
                reminder: 'false'
            },
            {
                id: 3,
                text: 'Task 3',
                day: 'Aug 3rd at 2:00pm',
                reminder: 'true'
            }
        ]
    )

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
            <Header/>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task'}
        </div>
    );
}

export default App;