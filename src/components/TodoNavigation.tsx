import React, { useState, SetStateAction } from "react"
import { Todo } from "./Todos"

interface TodoNavigationProps {
  filter: string
  setFilter: (value: React.SetStateAction<string>) => void
  setTodos: (value: Todo[] | []) => void
  invisibility: boolean
  setInvisibility: (value: SetStateAction<boolean>) => void
}


const TodoNavigation: React.FC<TodoNavigationProps> = ({
  filter,
  setFilter,
  setTodos,
  invisibility,
  setInvisibility
}) => {
  const clearTodos = () => {
    setTodos([])
    setFilter("")
  }

  const handleVisibility = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvisibility(e.target.checked)
  }
  

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  return (
    <div
      className="switch todos"
      style={{ display: "flex", alignItems: "center" }}
    >
      <span style={{ marginRight: "20px", fontSize: "20px" }}>Completed:</span>
      <label>
        Show
        <input type="checkbox" onChange={handleVisibility} checked={invisibility}/>
        <span className="lever"></span>
        Hide
      </label>

      <input
        type="text"
        style={{
          width: "30%",
          margin: "0 auto",
          marginLeft: "230px",
          textAlign: "center",
          fontSize: "20px",
        }}
        placeholder="find some TODOS"
        onChange={handleFilter}
        value={filter}
      />
      <a
        className="waves-effect waves-light btn"
        style={{ marginLeft: "auto", display: "flex" }}
        onClick={clearTodos}
      >
        clear
        <i
          className="material-icons "
          style={{ marginLeft: "10px", cursor: "pointer" }}
        >
          delete
        </i>
      </a>
    </div>
  )
}

export default TodoNavigation
