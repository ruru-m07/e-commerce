import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Input} from '../index';
import Button from '../Button';
import { fetchLogIn, getCurrentUser } from '../../FetchFunc/fetchUserApi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/storeSlice';

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
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(handelData)}>
      <div className='flex shadow-xl flex-col gap-4 bg-[#0000001a] w-[35%] rounded-md m-auto p-6 justify-center items-center'>

        <Input
          label="Your Email"
          type="text"
          className="border-[#c9c9c9] border-2 outline-none rounded-[4px] px-[3px] w-[24rem] h-[2.4rem]"
          placeholder="Name@Unknown.com"
          {...register("email")}
        />

        <Input
          label='Password'
          type="password"
          className="border-[#c9c9c9] border-2 outline-none rounded-[4px] px-[3px] w-[24rem] h-[2.4rem]"
          placeholder="********"
          {...register("password")}
        />

        <div className='text-[#000]'>Don't have a account? <Link to="/signup" className='text-[#185ac6]'>Sign Up</Link></div>

        <Button
          type='submit'
          text='Login'
        />


      </div>
    </form>
  )
}

export default Login
