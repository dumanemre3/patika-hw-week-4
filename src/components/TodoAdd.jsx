import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TodoAdd({ todoChange, setTodoChange, axiosConfig, APIBASE }) {

    const [categories, setCategories] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
    const [selectedStatusId, setSelectedStatusId] = useState(-1);
    const [todoTitle, setTodoTitle] = useState("");

    ////////////////////////////
    useEffect(() => {
        getCategories();
    }, []);

    ////////////////////////////
    function getCategories() {
        axios.get(`${APIBASE}/category`, axiosConfig).then((response) => {
            console.log("res", response);
            setCategories(response.data);
        }).catch((err) => {
            console.log("getCategories err", err)
        })
    }

    function selectCategory(id) {
        setSelectedCategoryId(id);
        getStatuses(id);
    }
    function getStatuses(categoryId) {
        axios.get(`${APIBASE}/status?categoryId=${categoryId}`, axiosConfig).then((response) => {
            setStatuses(response.data);
        }).catch((err) => {
            console.log("getStatuses err", categoryId, err)
        })
    }
    function saveTodo() {
        axios.post(`${APIBASE}/todo`, {
            title: todoTitle,
            categoryId: parseInt(selectedCategoryId),
            statusId: parseInt(selectedStatusId)
        }, axiosConfig).then(() => { setTodoChange(todoChange + 1) }).catch((err) => { alert("Could not add todo item.") })
    }
    return (
        <>
            <div className='row'>
                <div className='col'>
                    <h2>Todo Page</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <select onChange={(e) => selectCategory(e.target.value)} className="form-select">
                        <option className='d-none'>Kategori</option>
                        {categories.map((category, index) => <option key={index} value={category.id}>{category.title}</option>)}
                    </select>
                </div>
                <div className='col-3'>
                    <select onChange={(e) => setSelectedStatusId(e.target.value)} className="form-select">
                        <option className='d-none'>Statü</option>
                        {statuses.map((status, index) => <option key={index} value={status.id}>{status.title}</option>)}
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Todo:</label>
                        <input onChange={(e) => setTodoTitle(e.target.value)} className="form-control" placeholder="Enter Todo" />
                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <button onClick={() => saveTodo()} className='btn btn-block btn-primary'>Add Todo</button>
                </div>
            </div>
        </>
    )
}

export default TodoAdd