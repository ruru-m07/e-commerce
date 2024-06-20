import React from 'react'

function Button({type,text}) {
  return (
    <button type={type} className='bg-[#6d6d71] text-[#ffffff] px-4 py-2 rounded-md'>{text}</button>
  )
}

export default Button