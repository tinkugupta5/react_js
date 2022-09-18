import React, { useRef, useState } from 'react'
import { FormInput } from './components/FormInput'


const App = () => {


  // const [username,setUsername] = useState("");
  const [values,setValues] = useState({

    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"", 
  });

  const input = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    }
  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(data)

  }

  return (
    
    <div className='app'>
    <form onSubmit={handleSubmit}>
    <FormInput name="username" placeholder="Username" setUsername={setUsername}/>
    <FormInput name="email" placeholder="Email"/>
    <FormInput name="fullname" placeholder="Full Name" />
    <FormInput name="sth" placeholder="Sth else"/>
    <button>Submit</button> 
      </form>
      </div>
  )
}

export default App
