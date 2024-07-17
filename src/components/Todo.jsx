import React from "react";
import { VscCheckAll } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div 
    className="todo"
    style={ todo.isCompleted ? {borderLeft:'6px solid green'}:{borderLeft: '6px solid red'}}
    >
        <div className="content">
      <p>{todo.text}</p>
      <p className='category'>({todo.category})</p>
    </div>
    <div className="btn-action">
      <button className='complete'onClick={() => completeTodo(todo.id)}><VscCheckAll/></button>
      <button className='remove'onClick={() => removeTodo(todo.id)}><CgClose/></button>
    </div>
  </div>
  )
}

export default Todo