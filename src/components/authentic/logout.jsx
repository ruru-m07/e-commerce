import React from 'react'
// import Button from '../index'
import { logout } from '../../FetchFunc/fetchUserApi'
import { useDispatch } from 'react-redux'
import { isLoggedIn, logout as storeLogout } from '../../store/userSlice'
import { useNavigate } from 'react-router-dom'

function Logout() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function logoutFunc(params) {
    
    const loggedOut = await logout()
    console.log(loggedOut);
    if (loggedOut) {
      localStorage.removeItem("user")
      dispatch(storeLogout())
      dispatch(isLoggedIn(false))
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
