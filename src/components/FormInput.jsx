import React from 'react'
import "./form"

export const FormInput = (props) => {
  return (
    <div className='formInput'>
        <label>Username</label>
        <input placeholder='{props.placeholder}'/>
    </div>
  )
}
