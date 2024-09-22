import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Back-end hit")
    fetch("http://localhost:3000/todos")
      .then(async function name(res) {
        const todos = await res.json();
        setTodos(todos);
      })
  }, [])

  return (
    <>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} completed={todo.completed}></Todo>)}
      {/* <Todo title={"jnbfd"} description={"fkjdg"} completed={true}></Todo> */}
    </>
  )
}

function Todo({ title, description, completed }) {
  let completedText = "";
  if (completed) {
    completedText = "Completed";
  } else {
    completedText = "Pending";
  }
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <button>{completedText}</button>
    </div>
  )
}

export default App
