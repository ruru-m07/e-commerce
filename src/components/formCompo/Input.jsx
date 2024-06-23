import React from 'react'

const Input = React.forwardRef(function ({ type, placeholder, label,classname,...props }, ref) {
    return (
        <div className='flex flex-col gap-1'>
            {label && <label className='text-[#000000]'>{label}</label>}
            <input className={classname} ref={ref} type={type} placeholder={placeholder} {...props} />
        </div>
    )
})

export default Input