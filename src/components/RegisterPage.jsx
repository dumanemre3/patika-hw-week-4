import React, { useState } from 'react'
import axios from 'axios';

function RegisterPage({ gotToken, APIBASE }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    function onSubmitClicked() {
        if (password === passwordConfirm) {
            axios.post(`${APIBASE}/auth/register`, {
                username,
                password,
                passwordConfirm
            }).then((response) => {
                gotToken(response.data.token);
            }).catch((err) => {
                console.log(err);
                alert("Could not register.")
            })
        } else {
            alert("Şifre uymuyor")
        }
    }
    return (
        <div className='mt-5'>
            <div className='row'>
                <h2>Register Page</h2>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Email:</label>
                        <input onChange={(e) => { setUsername(e.target.value) }} type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password Confirm:</label>
                        <input onChange={(e) => { setPasswordConfirm(e.target.value) }} type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <button onClick={onSubmitClicked} className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage