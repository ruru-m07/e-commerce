import axios from 'axios';
import React, { useEffect } from 'react'

function DeleteDb() {

  const deleteDatabase = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/reset-db'
      const res = await axios.delete(url)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
    {/* <button onClick={deleteDatabase}>DeleteDb</button> */}
     <dir></dir>
    </div>
  )
}

export default DeleteDb