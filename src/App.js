import './App.css';
import React, { useState } from 'react';
import OutPage from './components/OutPage';
import TodoPage from './components/TodoPage';

function App() {

  const APIBASE="http://localhost:80";
  const [isOutPage, setIsOutPage] = useState(true);
  const [token, setToken] = useState("");

  function gotToken(token) {
    setToken(token);
    setIsOutPage(false);
  }
  return (
    <div className='container p-1 pt-5'>
      {isOutPage ? <OutPage APIBASE={APIBASE} gotToken={gotToken} /> : <TodoPage APIBASE={APIBASE} token={token}/>}
    </div>
  );
}

export default App;
