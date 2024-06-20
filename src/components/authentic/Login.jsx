import React,{useEffect,useState} from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input';
import Button from '../Button';
import { fetchLogIn,getCurrentUser } from '../../FetchFunc/fetchUserApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/storeSlice';

function Login() {
  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)

  const handelData = async(data) => {
    // console.log(data.email, data.password);
    try {
      const logedIn = await fetchLogIn({email: data.email,password: data.password})
      console.log(logedIn);
      if (logedIn) {
        const currentUser = await getCurrentUser()
        console.log(currentUser);
        dispatch(login(currentUser.data.data))
        navigate('/')
      }
    } catch (error) {
      console.log(error);      
    }
  }
  
  return (
    <form onSubmit={handleSubmit(handelData)}>
      <div className='flex flex-col gap-4 bg-[#222327f9] w-[35%] rounded-md m-auto p-6 justify-center items-center mt-12'>

        <Input
          label="Your Email"
          type="text"
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
