import React from 'react'

function Button({buttonClass,type,text}) {
  return (
    <button type={type} className={buttonClass}>{text}</button>
  )
}

export default Button