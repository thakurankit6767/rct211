import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header'
import TodosInput from './TodosInput'
import TodosItem from './TodosItem';

export interface ITodoItems {
    id :number;
    title : string;
    status : boolean;
}

const Todos = () => {
    const [todos, setTodos] = useState<ITodoItems[]>([])
    console.log('todos:', todos)

    const handleAdd = (title : string) => {
        const payload = {
            title , status: false, id : todos.length + 1
        }
        setTodos([...todos,payload])
        axios.post("http://localhost:8080/todos",payload)
        .then((res)=> {
            console.log(res.data);
        })
    }

    const getTodos = () => {
        axios.get("http://localhost:8080/todos")
        // .then(({data} : {data : ITodoItems[]})=> {
        //     setTodos(data)
        // })
        .then((res: AxiosResponse<ITodoItems[]>)=> {
            const {data} = res;
            setTodos(data)
        })
    }
    useEffect(()=> {
        getTodos()
    },[])
  return (
    <div>
        <Header label='Todos'></Header>
        <TodosInput onHandleClick={handleAdd} ></TodosInput>
        { todos.length > 0 && 
          todos.map((item) => {
          return <TodosItem key={item.id} {...item}></TodosItem>
        })}
    </div>
  )
}

export default Todos