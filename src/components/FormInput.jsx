
import "./formInput.css";


export const FormInput = (props) => {
  return (
    <div className='formInput'>
        {/* <label>Username</label> */}
        <input name={props.name}  placeholder={props.placeholder} 
        onChange={e=>props.setUsername(e.target.value)}/>
    </div>
  )
}
