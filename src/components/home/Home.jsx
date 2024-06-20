import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import { fetchAvailableUser } from '../../FetchFunc/fetchChatApi'


function Home() {

  const [users, setUsers] = useState(second)
    
  async function fetch(params) {
    const avaUser = await fetchAvailableUser()
    console.log(avaUser);
  }

  useEffect(() => {
    fetch()
  }, [])
  

  return (
    <div>
      
    </div>
  )
}

export default Home