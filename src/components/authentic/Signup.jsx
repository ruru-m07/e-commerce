import React, { useEffect, useState } from 'react'
import { Input, Button } from '../index'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { fetchLogIn, fetchSignup, getCurrentUser } from '../../FetchFunc/fetchUserApi'
import { login } from '../../store/storeSlice'
import { useDispatch } from 'react-redux'



function Signup() {

  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const registerDetail = async (data) => {
    try {
      const fetchData = await fetchSignup(data)
      console.log(fetchData);
      if (fetchData) {
        const loginUser = await fetchLogIn({ email: data.username, password: data.password })
        console.log(loginUser);

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
        <div className='flex flex-col gap-4 bg-[#222327f9] w-[35%] rounded-md m-auto p-6 justify-center items-center mt-12'>
          <Input
            label='Username'
            type="text"
            placeholder="Blah blah blah"
            {...register("username")}
          />

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
            text='Sign Up'
          />
        </div>
      </form>
    </>
  )
}

export default Signup