import React, { useEffect, useState } from 'react'
import { Input, Button } from '../index'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { fetchLogIn, fetchSignup, getCurrentUser } from '../../FetchFunc/fetchUserApi'
import { login } from '../../store/storeSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



function Signup() {

  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const registerDetail = async (data) => {
    try {
      const fetchData = await fetchSignup(data)
      // console.log(fetchData);
      if (fetchData) {
        const loginUser = await fetchLogIn({ email: data.username, password: data.password })
        // console.log(loginUser);

        if (loginUser) {
          const currentUser = await getCurrentUser()

          if (currentUser) {
            dispatch(login(currentUser.data.data))
            navigate('/')
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(registerDetail)}>
        <div className='flex shadow-xl flex-col gap-4 bg-[#0000001a] w-[35%] rounded-md m-auto p-6 justify-center items-center'>
          <Input
            label='Username'
            type="text"
            className="border-[#c9c9c9] border-2 outline-none rounded-[4px] px-[3px] w-[24rem] h-[2.4rem]"
            placeholder="Blah blah blah"
            {...register("username")}
          />

          <Input
            label="Your Email"
            type="email"
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

          <div className='text-[#000]'>Already have a account? <Link to="/login" className='text-[#2f76e7]'>Log in</Link></div>

          <Button
            type='submit'
            text='Sign Up'
          />
        </div>
      </form>
    </>
  )
}

export default Signup