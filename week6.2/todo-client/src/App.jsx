import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(undefined);
  const [singleTodo, setSingleTodo] = useState({});

  useEffect(() => {
    console.log("Back-end hit")
    fetch("http://localhost:3000/todos")
      .then(async function name(res) {
        const todos = await res.json();
        setTodos(todos);
      })
  }, [])

  useEffect(() => {
    if (todoId) {
      fetch(`http://localhost:3000/todo?id=${todoId}`).then((res) => {
        res.json().then((json) => {
          console.log(`http://localhost:3000/todo?id=${todoId}`, " : ", json);
          setSingleTodo(json)
        })
      })
    }
  }, [todoId])

  return (
    <>
      <h1>Get todo</h1>
      <TodoForm setTodoId={setTodoId}></TodoForm>
      {/* <TodoById id={todoId} setSingleTodo={setSingleTodo}></TodoById> */}
      <Todo key={singleTodo.id} title={singleTodo.title} description={singleTodo.description} completed={singleTodo.completed}></Todo>
      <h1>All Todos</h1>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} completed={todo.completed}></Todo>)}
      {/* <Todo title={"jnbfd"} description={"fkjdg"} completed={true}></Todo> */}
    </>
  )
}

function Todo({ title, description, completed }) {
  if (!title) return <></>;
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

function TodoForm({ setTodoId }) {
  function todoformhandler() {
    setTodoId(document.getElementById("todoid").value);
  }
  return (
    <div>
      <input type="text" name="todoid" id="todoid" onKeyDownCapture={todoformhandler} />
      <button onClick={todoformhandler}>Get Todo</button>
    </div>
  )
}

export default App
