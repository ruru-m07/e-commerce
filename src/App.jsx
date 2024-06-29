import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from './components'
import { Outlet } from 'react-router-dom'
import { getCurrentUser } from './FetchFunc/fetchUserApi'
import { useDispatch, useSelector } from 'react-redux'
import { authStore, isLoggedIn, login, logout } from './store/userSlice'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  // const isUserLocal = localStorage.getItem("user")
  // const isUser = JSON.parse(isUserLocal)
  // const [user, setUser] = useState(isUser)
  const userStatus = useSelector((state) => state.auth.status)


  async function fetchCurrentUser(params) {

    try {
      const currentUser = await getCurrentUser()
      // console.log(currentUser);
      if (currentUser) {
        return currentUser
      }
    } catch (error) {
      console.log("error in app while getting the current user: ", error);
    }finally{
      setLoading(false)
    }
  }


  useEffect(() => {
    async function fetched(params) {
      setLoading(true)

      const fetchedUser = await fetchCurrentUser()
      // console.log(fetchedUser.data);
      if (fetchedUser) {
        // setUser(fetchedUser?.data.data)
        dispatch(login(fetchedUser?.data.data))
        dispatch(isLoggedIn(true))
      }

      setLoading(false)
    }

  // console.log(cookieValue);
      fetched()

    setLoading(false)
  }, []);






  // return isLoggedIn ? (<>{
  //   loading ?
  //     (
  //       <div>Loading...</div>
  //     ) : (
  return <>
    <Header />
    <Outlet />
  </>
  //     )
  // }</>): (
  //   <>
  //     <Header />
  //     <Outlet />
  //   </>
  // )
}

export default App