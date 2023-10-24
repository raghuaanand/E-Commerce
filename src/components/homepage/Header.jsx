import React from 'react'
import { cart, search, user, wishlist } from '../../assets'

const nav = ['Home', 'Contact', 'About', 'Sign Up'];


function createNav(nav){
  return(
      <p className='cursor-pointer'>{nav}</p>
  )
}

const Header = () => (
    <div className='text-black bg-white flex items-center w-full py-[0.75rem] mt-[2.5rem] border-b px-[8rem]'>
      <p className='text-[1.5rem] font-bold leading-6 tracking-[0.72px]'>Exclusive</p>
      <div className='flex items-center gap-[4rem] ml-[10rem]'>
        {nav.map(createNav)}
      </div>
      <div className='flex ml-[8rem] gap-[1rem]'>
        <div className='flex py-[0.5rem] pl-[1.25rem] pr-[0.75rem] gap-[2rem] bg-gray-100 rounded-lg'>
          <input
            placeholder='what are you looking for?'
            className='bg-gray-100 border-none outline-none'
          />
          <img src={search} alt='search' className='cursor-pointer'/>
        </div>
        <img src={wishlist} alt='wishlist' className='ml-[1.5rem] cursor-pointer'/>
        <img src={cart} alt='cart' className='cursor-pointer'/>
        <img src={user} alt='user' className='hidden cursor-pointer'/>
      </div>
    </div>
  )


export default Header