import { useEffect, useMemo, useState, memo, useCallback } from 'react'

import './App.css'

// ------------------------------------------------------useEffect------------------------------------------------------ //
// function App() {
//   const [todos, setTodos] = useState([]);
//   const [todoId, setTodoId] = useState(undefined);
//   const [singleTodo, setSingleTodo] = useState({});

//   useEffect(() => {
//     console.log("Back-end hit")
//     fetch("http://localhost:3000/todos")
//       .then(async function name(res) {
//         const todos = await res.json();
//         setTodos(todos);
//       })
//   }, [])

//   useEffect(() => {
//     if (todoId) {
//       fetch(`http://localhost:3000/todo?id=${todoId}`).then((res) => {
//         res.json().then((json) => {
//           console.log(`http://localhost:3000/todo?id=${todoId}`, " : ", json);
//           setSingleTodo(json)
//         })
//       })
//     }
//   }, [todoId])

//   return (
//     <>
//       <h1>Get todo</h1>
//       <TodoForm setTodoId={setTodoId}></TodoForm>
//       {/* <TodoById id={todoId} setSingleTodo={setSingleTodo}></TodoById> */}
//       <Todo key={singleTodo.id} title={singleTodo.title} description={singleTodo.description} completed={singleTodo.completed}></Todo>
//       <h1>All Todos</h1>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} completed={todo.completed}></Todo>)}
//       {/* <Todo title={"jnbfd"} description={"fkjdg"} completed={true}></Todo> */}
//     </>
//   )
// }

// function Todo({ title, description, completed }) {
//   if (!title) return <></>;
//   let completedText = "";
//   if (completed) {
//     completedText = "Completed";
//   } else {
//     completedText = "Pending";
//   }
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//       <button>{completedText}</button>
//     </div>
//   )
// }

// function TodoForm({ setTodoId }) {
//   function todoformhandler() {
//     setTodoId(document.getElementById("todoid").value);
//   }
//   return (
//     <div>
//       <input type="text" name="todoid" id="todoid" onKeyDownCapture={todoformhandler} />
//       <button onClick={todoformhandler}>Get Todo</button>
//     </div>
//   )
// }
// ------------------------------------------------------useEffect------------------------------------------------------ //


// ------------------------------------------------------useMemo------------------------------------------------------ //
// function App() {
//   const [num, setNum] = useState(1);
//   const [count, setCount] = useState(0);

//   function calculate(e) {
//     let num = e.target.value;
//     if (!num) {
//       setNum(2);
//     } else {
//       num = parseInt(num);
//       setNum(num);
//     }
//   }

//   let result = useMemo(() => {
//     // bellow computation will be memoised
//     console.log("compute");
//     let temp = 0;
//     for (let i = 0; i <= num; i++) {
//       temp += i;
//     }
//     return temp
//   }, [num])

//   return (
//     <>
//       <div>Hello World</div>
//       <input type="text" id="num" placeholder='1' onChange={calculate} />
//       <div>Sum 1 to {num} is <b>{result}</b></div>
//       <button onClick={() => setCount(count + 1)}>Count:{count}</button>
//     </>
//   )
// }
// ------------------------------------------------------useMemo------------------------------------------------------ //

// ------------------------------------------------------useCallback------------------------------------------------------ //
function App() {
  const [counter, setCounter] = useState(0);

  // will rerender CallbackChild
  // const someFunction = ()=>{
  //   console.log("Hi from someFunction");
  // }

  // will not rerender CallbackChild
  const someFunction = useCallback(() => {
    console.log("Hi from someFunction");
  }, [])

  return (
    <>
      <div>Hello World</div>
      <button onClick={() => setCounter(counter + 1)}>Count : {counter}</button>
      <CallbackChild someFunction={someFunction}></CallbackChild>
    </>
  )
}

const CallbackChild = memo(function CallbackChild({ someFunction }) {
  someFunction();
  console.log("CallbackChild rendered");
  return (
    <h1>CallbackChild</h1>
  )
})
// ------------------------------------------------------useCallback------------------------------------------------------ //
export default App
