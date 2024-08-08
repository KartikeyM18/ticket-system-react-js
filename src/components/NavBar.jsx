import React from 'react'

export default function NavBar() {
    return (
        <div className='flex justify-between h-15 absolute w-screen px-14 pt-6'>
            <div>
                <button className='text-3xl  '>
                    <i className="fa-solid fa-bars" style={{ color: 'white' }}></i>
                </button>
            </div>
            <div>
                <button className='text-3xl '>
                    <i className="fa-solid fa-crown" style={{ color: 'white' }}></i>
                </button>
            </div>
            <div className='flex gap-14 '>
                <button className='text-3xl'>
                    <i className="fa-solid fa-magnifying-glass" style={{ color: 'white' }}></i>
                </button>
                <button className='text-3xl'>
                    <i className="fa-solid fa-bag-shopping" style={{ color: 'white' }}></i>
                </button>
                <button className='text-3xl'>
                    <i className="fa-brands fa-product-hunt" style={{ color: 'white' }}></i>
                </button>
            </div>

        </div>
    )
}
