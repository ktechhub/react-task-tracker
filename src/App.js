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

    return ( 
        <div className="container">
            <Header/>
            <Tasks tasks={tasks}/>
        </div>
    );
}

export default App;