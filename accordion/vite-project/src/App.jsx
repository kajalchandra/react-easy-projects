import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './Components/Accordion'

function App() {
 const items = [
  {
    title : "JavaScript Basics",
    content : "Learn Variable, functions,and loops in javaScript"
  },
    {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
 ]

  return (
    <div className='app'>
      <Accordion items={items}/>
    </div>
  )
}

export default App
