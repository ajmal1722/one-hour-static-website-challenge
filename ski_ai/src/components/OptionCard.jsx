import React from 'react'

const OptionCard = ({ data }) => {
  return (
    <div className='mx-5'>
        <h1 className='text-2xl font-bold'>
                { data.title }
            </h1>
        <div className='flex justify-between'>
            <h1>
                { data.firstHead }
            </h1>
            
        </div>
    </div>
  )
}

export default OptionCard
