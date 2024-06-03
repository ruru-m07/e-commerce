import React,{useEffect,useState} from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input';
import Button from '../Button';
import { fetchLogIn } from '../../FetchFunc/fetchApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login() {
  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)

  const handelData = async(data) => {
    try {
      const logedIn = await fetchLogIn({email: data.email,password: data.password})
      if (logedIn) {
        console.log(logedIn);
        // navigate('/')
      }
    } catch (error) {
      console.log(error);      
    }
  }
  
  return (
    <form onSubmit={handleSubmit(handelData)}>
      <div className='flex flex-col gap-4 bg-[#2943e7bc] w-[35%] rounded-md m-auto p-6 justify-center items-center mt-12'>

        <Input
          label="Your Email"
          type="email"
          placeholder="Name@Unknown.com"
          {...register("email")}
        />

        <Input
          label='Password'
          type="password"
          placeholder="********"
          {...register("password")}
        />

        <Button
          type='submit'
          text='Login'
        />
      </div>
    </form>
  )
}

export default Login