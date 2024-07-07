import React from 'react'

const Footor = () => {
    return (
        <>
            <div className='py-5 border bg-gray-100 flex justify-between px-64'>
                <div >
                    <p>@2024 Abdul Subhan Mian <span>All Rights Reserved</span></p>
                </div>
                <div className='space-x-5'>
                    {/* div for links */}
                    <a href="/about" className='hover:underline'>About</a>
                    <a href="/about" className='hover:underline'>Privacy Policy</a>
                    <a href="/about" className='hover:underline'>Licensing</a>
                    <a href="/about" className='hover:underline'>Contact</a>
                </div>
            </div>
        </>
    )
}

export default Footor
