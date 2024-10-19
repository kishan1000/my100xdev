import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { lazy, Suspense } from "react"

import Landing from "./components/Landing"
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/dashboard" element={
            <Suspense fallback={<div>Loading About Page...</div>}>
              <Dashboard />
            </Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <div>
    <button onClick={() => {
      navigate('/');
    }}>Landing Page</button>

    <button onClick={() => {
      navigate('/dashboard');
    }}>Dashboard</button>
  </div>
}

export default App
