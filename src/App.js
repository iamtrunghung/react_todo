import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const LOCALSTORAGE_NAME = 'List_Todo'
function App() {
  const [todos, setTodos] = useState(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME))
    return storageTodos ?? []
  })
  
  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(todos))
  }, [todos])

  function addTodo(todo) {
    setTodos([todo, ...todos])
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo =>{
        if(todo.id === id)
        {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo;
      })
    )
  }

  function removeTodo(id){
      setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className="App">
      <h2>React Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList 
      todos={todos} 
      toggleComplete={toggleComplete} 
      removeTodo={removeTodo} />
    </div>
  );
}

export default App;
