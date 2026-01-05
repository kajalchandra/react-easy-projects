import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormPage from './Components/FormPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <FormPage/>
    </div>
  )
}

export default App
