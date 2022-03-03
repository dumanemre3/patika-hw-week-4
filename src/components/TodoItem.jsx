import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TodoItem({ axiosConfig, APIBASE, todo, todoChange, setTodoChange }) {

    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [backgroundColor,setBackgroundColor] = useState("white");

    useEffect(() => {
        getTodoInfo();
    }, [])

    function getTodoInfo() {
        axios.get(`${APIBASE}/category/${todo.categoryId}`, axiosConfig).then((response) => { setCategory(response.data.title) })
        axios.get(`${APIBASE}/status/${todo.statusId}`, axiosConfig).then((response) => { setStatus(response.data.title);setBackgroundColor(response.data.color) })
    }
    function deleteTodo(id) {
        axios.delete(`${APIBASE}/todo/${id}`, axiosConfig).then(() => {
            setTodoChange(todoChange + 1);
        })
    }
    return (
        <tr style={{color:"white",backgroundColor:backgroundColor}}>
            <td>{todo.title}</td>
            <td>{category}</td>
            <td>{status}</td>
            <td>
                <button className='btn btn-primary mr-1'>Update</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => { deleteTodo(todo.id) }} className='btn btn-danger'>Delete</button>

            </td>
        </tr >
    )
}

export default TodoItem