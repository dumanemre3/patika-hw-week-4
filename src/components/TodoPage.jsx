import React, { useState } from 'react'
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

function TodoPage({ token, APIBASE }) {

    const axiosConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const [todoChange, setTodoChange] = useState(0);

    return (
        <>
            <TodoAdd todoChange={todoChange} setTodoChange={setTodoChange} APIBASE={APIBASE} axiosConfig={axiosConfig} />
            <hr />
            <TodoList todoChange={todoChange} setTodoChange={setTodoChange} APIBASE={APIBASE} axiosConfig={axiosConfig} />
        </>
    )
}

export default TodoPage