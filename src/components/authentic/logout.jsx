import React from 'react'
import Button from '../Button'
import { logout } from '../../FetchFunc/fetchUserApi'
import { useDispatch } from 'react-redux'
import { logout as storeLogout } from '../../store/storeSlice'
import { useNavigate } from 'react-router-dom'

function Logout() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function logoutFunc(params) {
    
    const loggedOut = await logout()
    console.log(loggedOut);
    if (loggedOut) {
      dispatch(storeLogout())
      navigate("/")
    }

  }
  return (
    <button onClick={logoutFunc}>
      Log out
    </button>
  )
}

export default Logout
