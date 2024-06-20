import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from './components'
import { Outlet } from 'react-router-dom'
import { getCurrentUser } from './FetchFunc/fetchUserApi'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/storeSlice'

function App() {
  const dispatch = useDispatch()

  async function fetchCurrentUser(params) {
    try {
      const currentUser = await getCurrentUser()
      if (currentUser) {
        return currentUser
      }
    } catch (error) {
      console.log("error in app while getting the current user: ",error);
    }
  }


  useEffect(() => {
    async function fetched(params) {
      const fetchedUser = await fetchCurrentUser()
      if (fetchedUser) {
        dispatch(login(fetchedUser?.data.data))
      }
    }

    fetched()
  }, [])




  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App