import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import random from Math

function App() {

  return (
    // <CardWrapper innerComponent={<TextComponent />}></CardWrapper> // Not so good way to use wrapper
    <CardWrapper>
      <TextComponent></TextComponent>
      <TextComponent></TextComponent>
    </CardWrapper>
  )

  // const [todos, setTodos] = useState([
  //   { id: 1, title: '1', description: 'desc1' },
  //   { id: 2, title: '2', description: 'desc2' },
  //   { id: 3, title: '3', description: 'desc3' }])

  // function addTodo() {
  //   setTodos([...todos, { id: 4, title: '4', description: 'desc4' }])
  // }
  // return (
  //   <div>
  //     <button onClick={addTodo}>Add Todo</button>
  //     {todos.map(t => <Todo key={t.id} title={t.title} description={t.description}></Todo>)}
  //     {/* <Todos></Todos> */}
  //   </div>
  // )
}

function TextComponent() {
  return (
    <div>Hi There</div>
  )
}

function CardWrapper({ children }) {
  console.log(children)
  return (
    <div style={{ border: "2px solid black" }}>
      {children}
    </div>
  )
}

// function Header({ title }) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }

// const Header = React.memo(function Header({ title }) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// })

// function Todo({ title, description }) {

//   return (
//     <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   )
// }

// function Todos() {
//   const [todos, setTodos] = useState([
//     { id: 1, title: '1', description: 'desc1' },
//     { id: 2, title: '2', description: 'desc2' },
//     { id: 3, title: '3', description: 'desc3' }])

//   function addTodo() {
//     setTodos([...todos, { id: 4, title: '4', description: 'desc4' }])
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add Todo</button>
//       {todos.map(t => (<div key={t.id}>
//         <h1>{t.title}</h1>
//         <h5>{t.description}</h5>
//       </div>))}
//     </div>
//   )
// }

export default App
