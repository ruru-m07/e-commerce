import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import { getUserProfile } from '../../FetchFunc/fetchEcommerceApi'


function Home() {

  const [user, setUser] = useState([])
    
  async function fetch(params) {
    const userProfile = await getUserProfile()
    if (userProfile) {
      setUser(userProfile.data)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  // console.log(user);
  

  return (
    <div>
    </div>
  )
}

export default Home