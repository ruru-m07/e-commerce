import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Input,Button} from '../index';
import { fetchLogIn, getCurrentUser } from '../../FetchFunc/fetchUserApi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoggedIn, login } from '../../store/userSlice';

function Login() {
  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)

  const handelData = async (data) => {
    // console.log(data.email, data.password);
    try {
      const logedIn = await fetchLogIn({ email: data.email, password: data.password })
      // console.log(logedIn);
      if (logedIn) {
        const currentUser = await getCurrentUser()

        console.log(currentUser);
        dispatch(login(currentUser.data.data))
        localStorage.setItem("user",JSON.stringify(currentUser.data.data))
        dispatch(isLoggedIn(true))
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(handelData)}>
      <div className='flex shadow-xl flex-col gap-4 bg-[#111827] w-[35%] rounded-md m-auto p-6 justify-center items-center'>

        <Input
          label="Your Email"
          type="text"
          className="border-[#c9c9c9] border-2 outline-none rounded-[4px] px-[3px] w-[24rem] h-[2.4rem]"
          labelClass="text-white"
          placeholder="Name@Unknown.com"
          {...register("email")}
        />

        <Input
          label='Password'
          type="password"
          className="border-[#c9c9c9] border-2 outline-none rounded-[4px] px-[3px] w-[24rem] h-[2.4rem]"
          labelClass="text-white"
          placeholder="********"
          {...register("password")}
        />

        <div className='text-[#fff]'>Don't have a account? <Link to="/signup" className='text-[#185ac6]'>Sign Up</Link></div>

        <Button
          type='submit'
          text='Login'
          buttonClass="bg-[#3c3f73] text-[#ffffff] px-4 py-2 rounded-md"
        />


      </div>
    </form>
  )
}

export default Login
