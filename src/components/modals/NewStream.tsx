import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

const NewStream = ({closeModal}:{closeModal: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div className='absolute flex items-center justify-center top-0 h-screen w-screen bg-black bg-opacity-90 overflow-hidden'>
            <div className="w-11/12 sm:w-9/12 lg:w-6/12 pb-8 flex flex-col items-center bg-neutral-800 rounded-lg">
                <div className='h-6 w-full flex items-center justify-end'>
                    <Image height={25} width={25} alt='close icon' onClick={() => closeModal(true)} className='bg-white rounded-[50%] cursor-pointer' src='/assets/closeIcon.png'/>
                </div>
                <h2 className='font-bold text-xl mb-6'>Start the revolution now</h2>
                <div className=' mb-6 flex flex-wrap justify-evenly'>
                    <input type="text" className='h-4 w-11/12 rounded-lg border-none outline-none' placeholder='The title goes here'/>
                    
                </div>
                <button className='w-[250px] h-8 bg-blue-600 rounded-lg'>Login</button>
            </div>
        </div>
      )
}

export default NewStream