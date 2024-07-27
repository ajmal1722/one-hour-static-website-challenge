import React from 'react'

const Navbar = () => {
    return (
        <div className='h-16 flex justify-between items-center mx-20 text-blue-950'>
            <h1 className='text-2xl font-bold '>
                Ski.ai
            </h1>
            <div className='font-semibold'>
                <div className='flex gap-6'>
                    <button>Dashboard</button>
                    <button>Insight</button>
                    <button>Training</button>
                    <button>Rehab</button>
                    <button>Nutrition</button>
                    <button>Dashboard</button>

                    <img 
                        className='rounded-full h-10'
                        src="https://s3-alpha-sig.figma.com/img/06a7/cee5/70d1835f640c3b3fc60145da03bd0b28?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmInWNynWrg5eo7UjGMcJnQloKmZhHmYcKCXn22HLAq1OxMSIgAFBlYaWB-bvVd1XjpO2Zq2x6OteLY~1~q7s~C9k03KU-qMr7MfaL8iyOaYFjPUkxEEbwNGXGmmOg0x2u7ZR7cox3-UETZY1M9uc4XmM2MwVZkYB9Mno6xL7BRGwkYCMaoBYR1Sjve1fQoEYULf~a2VN4bUb8CWipL7NtTUFPFRfLUKQ9AJwz9uEcPyqYWpsHPqYd-NriAHu1FpVf-nB1hKVCaAqtQJ4zwQwkWbozNjMsb6rsaalZuZ-JgMADpXzQO0eI7pubB6rNVo~drmXlpqzpAVxevFW8o3Yg__" alt="" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar