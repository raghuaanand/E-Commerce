import React from 'react'
import { dropdown } from '../../assets'

const sideBar = ['Electronics', 'Home & Lifestyle', 'Medicine', 'Sports & Outdoors', "Baby's & Toys", 'Groceries & Pets', 'Health & Beauty' ];

function createCard(sideBar){
    return(
        <p>{sideBar}</p>
    )
}

const LeftSideBar = () =>(
    <div className='flex flex-col gap-[1rem] font-normal text-[1rem] leading-6 border-r-2 w-fit pt-8 pr-4'>
        {/* use map function here */}
        <div className='flex justify-between gap-[3rem] items-center'>
            <p>Women's Fashion</p>
            <img src={dropdown} alt='dropdown'/>
        </div>
        <div className='flex justify-between gap-[3rem] items-center'>
            <p>Men's Fashion</p>
            <img src={dropdown} alt='dropdown'/>
        </div>
        {sideBar.map(createCard)}
    </div>
  )

export default LeftSideBar