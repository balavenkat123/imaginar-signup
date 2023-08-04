import React  from 'react'
import { Link} from "react-router-dom";
import './App.css';

// import Validation from './SignupValid';

function Signup(){

//   const [values,setValues] = useState({
//     email : "",
//     passward: "",
//   })
//   const navigate =useNavigate();
//   const[errors,setErrors] = useState({

//   })
//   const handleInput =(event)=>{
//     setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
//   }

//   const handleSubmit=(event) => {
//       event.preventDefault();
//       setErrors(Validation(values));
//       if(errors.name === ' ' && errors.email==='' && errors.password===''){
//     //     // axios.post('http://localhost:8081/signup',values)
//     //     // .then(res=>{
//     //     //   navigate('/');
//     //     //   console.log(res)
//     //     // })
//     //     // .catch(err=>console.log(err));
//          alert("anna")
//       }

//     }

   
  return (
    <div className='d-flex justify-content-center align-items-center  mean-fruit-gradient vh-100'>
    <div className='bg-white p-3 w-25 rounded'>
        <form action='' >
            {/* //onSubmit={handleSubmit} */}
            <center><h4 className='w-10 r-1 m-4 ustify-content-center align-items-center '> <strong>SignUp</strong> </h4></center>
            <div className='mb-3'>
            <label htmlFor='name'> <strong>Name</strong> </label>
            <input type='name'  className='form-control' name='name'  />
            {/* onChange={handleInput} */}
            </div>           
            <div className='mb-3'>
            <label htmlFor='email'><strong>Email </strong></label>
            <input type='email' className='form-control' name='email' />
            </div>
            <div className='mb-3'>
            <label htmlFor='password'><strong>passward </strong> </label>
            <input type='password'  className='form-control' name='password'  />
            </div>
            <button  type='submit' className='btn btn-success mean-fruit-gradient w-100 mb-3'>Sign-UP</button>
            <Link to='/' className='btn btn-success w-100 bg-primary'>Back to Login</Link>
            
        </form>
    </div>   
</div>
  )
}

export default Signup