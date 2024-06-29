import React, { useEffect, useState } from 'react'
import { Input, Button } from '../index'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { fetchLogIn, fetchSignup, getCurrentUser } from '../../FetchFunc/fetchUserApi'
import { isLoggedIn, login } from '../../store/userSlice'
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
            localStorage.setItem("user",JSON.stringify(currentUser.data.data))
            dispatch(isLoggedIn(true))
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
        <div className='flex shadow-xl flex-col gap-4 bg-[#111827] w-[35%] rounded-md m-auto p-6 justify-center items-center'>
          <Input
            label='Username'
            type="text"
            className="border-[#c9c9c9] border-2 outline-none rounded-[4px] px-[3px] w-[24rem] h-[2.4rem]"
            labelClass="text-white"
            placeholder="Blah blah blah"
            {...register("username")}
          />

          <Input
            label="Your Email"
            type="email"
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

          <div className='text-[#fff]'>Already have a account? <Link to="/login" className='text-[#2f76e7]'>Log in</Link></div>

          <Button
            type='submit'
            text='Sign Up'
            buttonClass="bg-[#3c3f73] text-[#ffffff] px-4 py-2 rounded-md"
          />
        </div>
      </form>
    </>
  )
}

export default Signup