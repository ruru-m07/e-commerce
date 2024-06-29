import React from 'react'
import { createCategory } from '../../FetchFunc/fetchEcommerceApi'

function AddCategory() {
    // async function addCategory(params) {
    //    const category =  await createCategory()
    //    console.log(category);
    // }
  return (
    <button onClick={"addCategory"}>
        Add Category
    </button>
  )
}

export default AddCategory
