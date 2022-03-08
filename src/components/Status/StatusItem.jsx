import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StatusAdd from './StatusAdd';

function StatusItem({ axiosConfig,statusChange,setStatusChange, APIBASE, status }) {
    
    function deleteStatus(id) {
        axios.delete(`${APIBASE}/status/${id}`, axiosConfig).then(() => {
            setStatusChange(statusChange + 1);
        })
    }

    return (
        <tr>
            <td>{status.title}</td>
            <td>{status.color}</td>
            <td>
                <button onClick={() => { deleteStatus(status.id)}} className='btn btn-danger'>Delete</button>
            </td>
        </tr >
    )
}

export default StatusItem