import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import TodoNavigation from "./TodoNavigation"
import "./todos.css"

export interface Todo {
  title: string
  id: number
  completed: boolean
  index: number
  creationDate: string
}


const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState<string>("")
  const [filter, setFilter] = useState<string>("")
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([])
  const [invisibility, setInvisibility] = useState (false) 
  const [invisibleTodos, setInvisibleTodos] = useState<Todo[]> ([])

  useEffect(() => {
    let filteredTodos = todos.filter((todo) =>
    
      todo.title.toLowerCase().includes(filter)
    )
    setFilteredTodos(filteredTodos)
  }, [todos, filter])

  useEffect(()=> {
    let invisibleTodos = filteredTodos.filter((todo)=> 
      {
        if (invisibility) {
          return !todo.completed
        } else {
          return todo
        }
      }
    )
    setInvisibleTodos(invisibleTodos)
  },[invisibility, filteredTodos])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
      index: 1,
      creationDate: new Date().toLocaleString()
    }
    setTodos((prev) => [...prev, newTodo])
    setTitle("")
  }

  const toggleHandler = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <form className="todos" onSubmit={addTodo}>
        <h4>New todo:</h4>
        <input
          type="text"
          onChange={handleInput}
          style={{ fontSize: "20px" }}
          value={title}
          placeholder="What you need to do?"
        />
      </form>

      <h4 className="todos">TODO list</h4>

      <TodoNavigation
        setTodos={setTodos}
        setFilter={setFilter}
        filter={filter}
        invisibility={invisibility}
        setInvisibility={setInvisibility}
      />

      <hr className="todos" />

      {invisibleTodos.length ? (
        <TodoList
          todos={invisibleTodos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      ) : (
        <h3 className="center" style={{ color: "gray" }}>
          empty
        </h3>
      )}
    </>
  )
}

export default Todos
