import { useState } from "react"

const Tasks = () => {
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
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
