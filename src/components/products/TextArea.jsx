import React from 'react'

const TextArea = React.forwardRef(function ({ placeholder, label,classname,...props }, ref) {
    return (
        <div className='flex flex-col gap-1'>
            {label && <label className='text-[#000000]'>{label}</label>}
            <textarea className={classname} ref={ref} rows="5" placeholder={placeholder} {...props}></textarea>
        </div>
    )
})

export default TextArea
