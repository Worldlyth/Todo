import React from "react"
import Header from "./components/Header"
import Todos from "./components/Todos"
import "./materialize/css/materialize.css"

const App:React.FC = () => {
  return (
    <div>
      <Header />
      <Todos />
    </div>
  )
}

export default App
