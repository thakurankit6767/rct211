import React from 'react'
import { ITodoItems } from './Todos'

const TodosItem = ({id,title, status}: ITodoItems) => {
  return (
    <div>
        <h4>{title}</h4>
        <span>{`${id}-${status}`}</span>
    </div>
  )
}

export default TodosItem