import React, { useRef, useState } from 'react'
import { FormInput } from './components/FormInput'


const App = () => {


  // const [username,setUsername] = useState("");
  const usernameRef = useRef()
  console.log(usernameRef);


  return (
    
    <div className='app'>
      <form>
    <FormInput refer= placeholder="Username" setUsername={setUsername}/>
    <FormInput placeholder="Email"/>
    <FormInput placeholder="Full Name" />
    <FormInput placeholder="Sth else"/>
      </form>
      </div>
  )
}

export default App
