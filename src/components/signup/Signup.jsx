import React, { useEffect, useState } from 'react'
import { Input, Button } from '../index'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {fetchSignup} from '../../FetchFunc/fetchApi'



function Signup() {

  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()

  const registerDetail = async (data) => {
    try {
      const fetchData = await fetchSignup(data)
      console.log(fetchData);
      if (fetchData) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit(registerDetail)}>
      <div className='flex flex-col gap-4 bg-[#2943e7bc] w-[35%] rounded-md m-auto p-6 justify-center items-center mt-12'>
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