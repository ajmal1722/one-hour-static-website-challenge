import React from 'react'
import Card from './Card'

const Section = () => {
    return (
        <>
        <div className='mx-28 my-8 h-32 flex  justify-around items-center bg-gray-100'>
            <h1 className='text-2xl font-bold'>
                Pearlifisher
            </h1>
            <h1 className='text-2xl font-bold'>
                Pearlifisher
            </h1>
            <h1 className='text-2xl font-bold'>
                Pearlifisher
            </h1>
            <h1 className='text-2xl font-bold'>
                Pearlifisher
            </h1>
            <h1 className='text-2xl font-bold'>
                Pearlifisher
            </h1>
        </div>
        <div className=''>
            <div className='flex justify-center text-center my-16'>
                <div className='w-2/6'>
                    <h1 className='text-4xl font-'>
                    Grow faster with help your customers
                    </h1>
                </div>
            </div>
            <div className='flex items-center justify-around my-16'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        </>
  )
}

export default Section
