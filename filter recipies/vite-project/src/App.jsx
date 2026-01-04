import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RecipeFilterApp from './Components/RecipeFilterApp'

function App() {
 

  return (
    <div className='app' >
      <h1>Recipe Explorer</h1>
      <RecipeFilterApp/>
    </div>
  )
}

export default App
