import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from "./routes/PageRoutes";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <PageRoutes/>
   </BrowserRouter>
  )
}

export default App
