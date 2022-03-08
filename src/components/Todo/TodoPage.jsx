import React, { useState } from 'react'
import CategoryAdd from '../Category/CategoryAdd';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

function TodoPage({ token, APIBASE }) {

    const axiosConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const [todoChange, setTodoChange] = useState(0);
    const [categoryAdd, setCategoryAdd] = useState(0);
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [statusChange, setStatusChange] = useState(0);
    
    return (
        <>
            <div class="row">
                <div class="col-md-6">
                    <TodoAdd categoryAdd={categoryAdd} statusChange={statusChange} todoChange={todoChange} setTodoChange={setTodoChange} APIBASE={APIBASE} axiosConfig={axiosConfig} />
                </div>
            </div>
            <hr />
            <TodoList todoChange={todoChange} setTodoChange={setTodoChange} APIBASE={APIBASE} axiosConfig={axiosConfig} />
            <button type="button" class="btn btn-primary" onClick={() => setCategoryVisible(!categoryVisible)}>Kategorileri Düzenle</button>
            <div class="mt-3 col-md-6">
                <CategoryAdd statusChange={statusChange} setStatusChange={setStatusChange} categoryVisible={categoryVisible} categoryAdd={categoryAdd} setCategoryAdd={setCategoryAdd} APIBASE={APIBASE} axiosConfig={axiosConfig}></CategoryAdd>
            </div>
        </>
    )
}

export default TodoPage