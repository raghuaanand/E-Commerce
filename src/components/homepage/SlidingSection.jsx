import React from 'react'
import { iphone15, apple_logo, sliding_ellipse, sliding_ellipse_grp, right_arrow, ellipse } from '../../assets'

const SlidingSection = () =>(
    
    <div className='bg-black ml-[3rem] mt-[2.5rem] w-full mr-[8rem] pt-[3.6rem]'>

    <div className='flex h-[80%]'>
            <div className='text-white pl-[4rem]'>
                <div className='flex items-center gap-[1.5rem]'>
                    <img src={apple_logo} alt='apple logo' className='w-[2.5rem] h-[3rem]'/>
                    <p className='text-[#FAFAFA] text-[1rem] font-normal leading-[1.5rem]'>iPhone 15 Series</p>
                </div>
                <p className='text-[3rem] font-semibold leading-[3.75rem] tracking-[1.92px] mt-[1.25rem] w-[60%]'>Up to 10% off Voucher</p>
                <div className='flex gap-[0.5rem] mt-[1.6rem]'>
                    <a className='text-[1rem] font-medium leading-[1.5rem] border-b-2 pb-[2px]'>Shop Now</a>
                    <img src={right_arrow}/>
                </div>
            </div>
            <img src={iphone15} alt='iphone 15'/>
    </div>
    <div className='flex justify-center gap-3 mt-[1.5rem]'>
        <img src={sliding_ellipse} alt='ellipse'/>
        <img src={sliding_ellipse} alt='ellipse'/>
        <img src={sliding_ellipse_grp} alt='ellipse'/>
        <img src={sliding_ellipse} alt='ellipse'/>
        <img src={sliding_ellipse} alt='ellipse'/>
    </div>
    </div>

  )

export default SlidingSection