import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

function TodoList({ todoChange, setTodoChange, axiosConfig, APIBASE }) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, [todoChange])

    function getTodos() {
        axios.get(`${APIBASE}/todo`, axiosConfig).then((response) => {
            setTodos(response.data);
        }).catch((err) => {
            console.log("getTodos err", err)
        })
    }
    return (
        <>
            <h2>Todo's</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Category</td>
                        <td>Status</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => <TodoItem todoChange={todoChange} setTodoChange={setTodoChange} axiosConfig={axiosConfig} APIBASE={APIBASE} todo={todo} key={index} />)}
                </tbody>
            </table>
        </>
    )
}

export default TodoList