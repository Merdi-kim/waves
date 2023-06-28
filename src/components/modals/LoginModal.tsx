import { Dispatch, SetStateAction } from 'react'
import LensProfile from '../ui/LensProfile'
import Image from 'next/image'

const LoginModal = ({closeModal}:{closeModal: Dispatch<SetStateAction<boolean>>}) => {

    const names = ['merkim.lens', 'vitalik.lens', 'test.lens', 'jonathan.lens', 'verylongnamelikethisonehere.lens']

  return (
    <div className='absolute flex items-center justify-center top-0 h-screen w-screen bg-black bg-opacity-90 overflow-hidden'>
        <div className="w-11/12 sm:w-9/12 lg:w-6/12 pb-8 flex flex-col items-center bg-neutral-800 rounded-lg">
            <div className='h-6 w-full flex items-center justify-end'>
                <Image height={25} width={25} alt='close icon' onClick={() => closeModal(true)} className='bg-white rounded-[50%] cursor-pointer' src='/assets/closeIcon.png'/>
            </div>
            <h2 className='font-bold text-xl mb-6'>Join the Wave</h2>
            <div className=' mb-6 flex flex-wrap justify-evenly'>
                {names.map((name, index) => <LensProfile key={index} name={name}/>)}
            </div>
            <button className='w-[250px] h-8 bg-blue-600 rounded-lg'>Login</button>
        </div>
    </div>
  )
}

export default LoginModal