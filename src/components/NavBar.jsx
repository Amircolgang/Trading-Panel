import React from 'react'

export default function NavBar() {
  return (
    <>
        <div className='h-[60px] p-[1.5rem] flex justify-between items-center bg-[#111]'>
            <div>
                <div className='w-[25px] h-[25px]'>
                    <img className='w-[100%] h-[100%]' src="/public/vite.svg" alt="" />
                </div>
                <span>Shirazi Co.</span>
            </div>
            <div>
                <ul className='flex gap-[1.5rem] text-[#fff]'>                    <li>Home </li>
                    <li>About</li>
                    <li>Trading</li>
                    <li>Ai</li>
                </ul>
            </div>
            <div>
                <div>

                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </>
)
}
