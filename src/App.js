import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import Login from './login'

const App =()=>{

if (!localStorage.getItem('userId')) return <Login/>

  return(  
        <ChatEngine
        height = "100vh"
        projectID = "fd10d00c-b745-42a8-af05-944a43cdd499" 
        userName={localStorage.getItem('userId')}
        userSecret={localStorage.getItem('password')}
        />      
    )
}


export default App;