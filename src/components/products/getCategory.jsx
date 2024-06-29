import React from 'react'
import {getCategories} from '../../FetchFunc/fetchEcommerceApi'

function GetCategory() {
    async function getAllCategory(params) {
       const getCategory = await getCategories()
       console.log(getCategory);
    }
  return (
    <button onClick={getAllCategory}>
        getAllCategory
    </button>
  )
}

export default GetCategory
