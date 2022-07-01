import React from "react"
import { Todo } from "../components/Todos"
import "./completed.css"

interface TodoListProps {
  todos: Todo[]
  onToggle: (value: number) => void
  onRemove: (value: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  let style = { fontSize: "20px", color: "black" }
  let style2 = { fontSize: "20px", textDecoration: "line-through" }

  return (
    <>
      <ul className="collection z-depth-1 todos" style={{ margin: "0 50px" }}>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="collection-item"
            style={{ display: "flex", paddingTop: "13px" }}
          >
            <div style={{ marginRight: "20px", fontSize: "20px" }}>
              {index + 1}.
            </div>
            <label>
              <input
                type="checkbox"
                id="todoCheckbox"
                onChange={() => onToggle(todo.id)}
                checked={todo.completed}
              />
              <span style={todo.completed ? style2 : style}>{todo.title}</span>
            </label>
            <span
              style={{
                marginLeft: "auto",
                marginRight: "20px",
                alignSelf: "center",
                fontSize: "13px",
              }}
            >
              {todo.creationDate.slice(0, 17)}
            </span>
            <i
              className="material-icons "
              style={{ cursor: "pointer" }}
              onClick={() => onRemove(todo.id)}
            >
              delete
            </i>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
