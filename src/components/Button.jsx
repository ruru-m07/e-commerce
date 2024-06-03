import React from 'react'

function Button({type,text}) {
  return (
    <button type={type} className='bg-[#284de2] text-white px-4 py-2 rounded-md'>{text}</button>
  )
}

export default Button