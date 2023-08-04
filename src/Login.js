import React from 'react'
import { Link } from "react-router-dom";
import './App.css';
// import Validation from './LoginValid';



const Login = () => {

//   const [values,setValues] = useState({
//     email : "",
//     passward: "",
//   })
//   const[errors,setErrors] = useState({

//   })
// //   const handleInput =(event)=>{
// //     setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
// //   }

// //   const handleSubmit=(event) => {
// //       event.preventDefault();
// //       setErrors(Validation(values));
// //     }
  return (
 
    <div className='d-flex justify-content-center align-items-center mean-fruit-gradient vh-100 '>
        <div className='bg-white p-3 w-25 rounded'>
            <form action='' >
              <h4 className='r-1 ustify-content-center align-items-center'> Login Form</h4>

                <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input name='email' type='email' placeholder='email'   className='form-control' />
                {/* {errors.email && <span className='text-danger'>{errors.email}</span>} */}
                </div>
                <div className='mb-3'>
                <label htmlFor='password'>password</label>
                <input name='password' type='password' placeholder='password'  className='form-control'/>
                {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                </div>
                <button type='submit' to='/Success' className='btn btn-success mean-fruit-gradient w-100'>Login In</button>
                <p>not have an account .....<br/>
                create one here</p>
                <Link to='/Signup' className='btn btn-default border bg-info w-100'>Create Account</Link>
            </form>
        </div>   
    </div>
   
  )
}

export default Login