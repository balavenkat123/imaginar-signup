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
        <div className='bg-white p-3 w-25 '>
            <form action='' >
              <center><h4 className='w-10 r-1 m-4 ustify-content-center align-items-center '> <strong>Login Form</strong> </h4></center>
              

                <div className='mb-3'>
                <label htmlFor='email'><strong>Email or Phone </strong> </label>
                <input name='email' type='email' className='form-control' />
                {/* {errors.email && <span className='text-danger'>{errors.email}</span>} */}
                </div>
                <div className='mb-3'>
                <label htmlFor='password'><strong>Passward</strong></label>
                <input name='password' type='password' className='form-control border'/>
                <a href='#'>Forgot Passward ?</a>
                {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                </div>
                <button type='submit' to='/Success' className='btn btn-success mean-fruit-gradient w-100 m-1'>LOGIN</button>
                
                <center><p>Not a member? <Link to='/Signup' className='m-1 w-100'>  Signup now</Link></p></center>
            </form>
        </div>   
    </div>
   
  )
}

export default Login