import { useContext, useState } from 'react'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      Hi There
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>
    Count: {count}
  </div>
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1);
    }}>Increase</button>
    <button onClick={() => {
      setCount(count - 1);
    }}>Decrease</button>
  </div>
}

export default App
