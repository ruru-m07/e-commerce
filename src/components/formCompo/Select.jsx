import React from 'react'

function Select({ options, label,classname ,...props }, ref) {
    // console.log(options);
    return (
        <div className='flex flex-col gap-1'>
            {label && <label>{label}</label>}
            {/* <div> */}
                <select className={classname} ref={ref} name="" id="" {...props}>
                    {options.map((option) => (
                        <option key={option.id} value={option.catogery}>{option.catogery}</option>
                    ))}
                </select>
            {/* </div> */}
        </div>
    )
}

export default React.forwardRef(Select)
