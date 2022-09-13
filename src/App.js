import React, { useState } from 'react'
import { FormInput } from './components/FormInput'


const App = () => {


  const [username,setUsername] = useState("");


  return (
    
    <div className='app'>
      <form>
    <FormInput placeholder="Username" setUsername={setUsername}/>
    <FormInput placeholder="Email"/>
    <FormInput placeholder="Full Name" />
    <FormInput placeholder="Sth else"/>
      </form>
      </div>
  )
}

export default App
