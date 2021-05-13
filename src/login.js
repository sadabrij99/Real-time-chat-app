import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react'
import App from './App'


import './design.css'
import { Button, Form, Input} from 'reactstrap'
import axios from 'axios';

const Login =()=> {
  
  const [userId, setuserId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async(e) =>{

    e.preventDefault()

    const authObject = {
      'Project-ID':'fd10d00c-b745-42a8-af05-944a43cdd499',
      'User-Name' : userId,
      'User-Secret' : password
    }

    try {
      // username / password => chatengine -> give message
      await axios.get('https://api.chatengine.io/chats',{headers:authObject})

      localStorage.setItem('userId',userId)
      localStorage.setItem('password',password)

      window.location.reload()

    } catch (error) {
      
      setError('Please enter correct Id/Password........')

    }

                         

  }
  


  return ( 
        <div className='box-shadow'>    
          <Form className="login-form" onSubmit={handleSubmit}>
            <h1 className="text-center">LOGIN</h1>
            <Input type="text" placeholder="User ID" value={userId} onChange={(e)=>setuserId(e.target.value)} required /><br/>
            <Input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required /><br/>
            <Button type="submit" color="success">Login</Button>
            <h2 className="error">{error}</h2>
          </Form>
        </div>  
  );
}


export default Login