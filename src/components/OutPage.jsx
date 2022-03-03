import React, { useState } from 'react'
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function OutPage({ gotToken, APIBASE }) {
  const [isLoginPage, setIsLoginPage] = useState(true);
  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className='btn-group' role={"group"} aria-label="Sekme">
            <button onClick={() => setIsLoginPage(true)} type='button' className='btn btn-primary'>Login</button>
            <button onClick={() => setIsLoginPage(false)} type='button' className='btn btn-primary'>Register</button>
          </div>
        </div>
      </div>
      {isLoginPage ? <LoginPage gotToken={gotToken} APIBASE={APIBASE} /> : <RegisterPage gotToken={gotToken} APIBASE={APIBASE} />}

    </>
  )
}

export default OutPage