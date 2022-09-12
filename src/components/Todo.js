import Button from 'react-bootstrap/Button';
function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckbox() {
        toggleComplete(todo.id)
    }
    function handleRemove() {
        removeTodo(todo.id)
    }
    return (
        <div>
            <li
                style={{
                    textDecoration: todo.isComplete ? 'line-through' : null,
                    listStyle: 'none',
                    margin: '15px',
                }}
            >
                <input type="checkbox" onClick={handleCheckbox}/>
                <span>{todo.task}</span>
                <Button variant="danger" onClick={handleRemove} style={{ marginLeft: '10px' }}>&times;</Button>
            </li>
        </div>
    ) 
}
export default Todo