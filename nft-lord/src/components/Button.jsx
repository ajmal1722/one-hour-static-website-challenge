import React from 'react'

const Button = ({ value }) => {
    return (
        <div className='flex justify-center px-10 py-3 text-2xl button'>
            { value }
        </div>
    )
}

export default Button
