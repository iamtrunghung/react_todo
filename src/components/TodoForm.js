import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
function TodoForm({ addTodo }) {
    const [input, setInput] = useState({
        id: "",
        task: "",
        isComplete: false
    })
    function handleTaskInputChange(e) {
        setInput({ ...input, task: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (input.task.trim()) {
            addTodo({ ...input, id: uuidv4() })
            // reset input
            setInput({ ...input, task: "" })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                value={input.task}
                onChange={handleTaskInputChange}
            />
            <Button variant="primary" type="submit">Thêm</Button>
        </form>
    )
}
export default TodoForm