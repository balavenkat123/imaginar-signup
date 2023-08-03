import React  from 'react'
import { Link} from "react-router-dom";

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
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 w-25 rounded'>
        <form action='' >
            {/* //onSubmit={handleSubmit} */}
            <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type='name' placeholder='Full name' className='form-control' name='name'  />
            {/* onChange={handleInput} */}
            </div>           
            <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='email' className='form-control' name='email' />
            </div>
            <div className='mb-3'>
            <label htmlFor='password'>passward</label>
            <input type='password' placeholder='password' className='form-control' name='password'  />
            </div>
            <button  type='submit' className='btn btn-success w-100 mb-3'>Sign-UP</button>
            <Link to='/' className='btn btn-success w-100 bg-secondary'>login</Link>
            
        </form>
    </div>   
</div>
  )
}

export default Signup