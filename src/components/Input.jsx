import React from 'react'

const Input = React.forwardRef(function ({ type, placeholder, label,...props }, ref) {
    return (
        <div className='flex flex-col'>
            {label && <label className='text-[#ffffff]'>{label}</label>}
            <input className='border-[#c9c9c9] border-2 outline-none rounded-[4px] px-[3px] w-[24rem] h-[2.4rem]' ref={ref} type={type} placeholder={placeholder} {...props} />
        </div>
    )
})

export default Input