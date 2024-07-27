import React from 'react'

const ProfileSection = () => {
    return (
        <div className='flex justify-center'>
            <div className='text-center text-blue-700'>
                <img 
                    className='rounded-full h-48 mt-10 w-auto mb-4 mx-auto'
                    src="https://s3-alpha-sig.figma.com/img/06a7/cee5/70d1835f640c3b3fc60145da03bd0b28?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmInWNynWrg5eo7UjGMcJnQloKmZhHmYcKCXn22HLAq1OxMSIgAFBlYaWB-bvVd1XjpO2Zq2x6OteLY~1~q7s~C9k03KU-qMr7MfaL8iyOaYFjPUkxEEbwNGXGmmOg0x2u7ZR7cox3-UETZY1M9uc4XmM2MwVZkYB9Mno6xL7BRGwkYCMaoBYR1Sjve1fQoEYULf~a2VN4bUb8CWipL7NtTUFPFRfLUKQ9AJwz9uEcPyqYWpsHPqYd-NriAHu1FpVf-nB1hKVCaAqtQJ4zwQwkWbozNjMsb6rsaalZuZ-JgMADpXzQO0eI7pubB6rNVo~drmXlpqzpAVxevFW8o3Yg__" alt="" 
                />
                <h1 className='text-2xl font-bold text-blue-950'>
                    Jess Kim
                </h1>
                <h1 className='text-lg'>
                    Giant Slalom
                </h1>
                <h1 className='text-lg'>
                US Ski Team
                </h1>
                <button className='font-semibold text-blue-950 py-2 mx-4 bg-slate-300 my-2 px-12 rounded-lg'>
                    Edit Profile
                </button>
            </div>
        </div>
    )
}

export default ProfileSection
