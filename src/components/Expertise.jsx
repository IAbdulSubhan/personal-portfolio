import React from 'react'
import bannerBackground from '../assets/banner_wallpaper.svg'


const expertise = () => {
    return (
        <>
            <div className="mt-2">
                <h1 className='mb-16 text-5xl font-bold underline text-center'>My Expertise</h1>
                {/* expertise section */}

                {/* Box section */}
                <div
                    style={
                        {
                            backgroundImage: `url(${bannerBackground})`,
                            backgroundSize: "cover"
                        }
                    }
                    className="box-container items-center flex  py-14">
                    {/* two boxes left and right box are there */}
                    <div className='flex text-white justify-center'>
                        {/* text container */}

                        <div className='w-2/3 text-center space-y-4'>
                            <h1 className='text-4xl font-bold'>I love these technologies</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse maiores quia, facere officia impedit incidunt ipsum vero repudiandae, sed minus doloribus, praesentium doloremque libero laboriosam accusantium ipsa alias at!</p>
                            <button className='text-2xl px-4 py-2 bg-orange-500 rounded-full'>Hire Me</button>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        {/* skill container */}

                        <div className='flex justify-center w-2/3 h-fit space-x-3 flex-wrap'>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Python</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>C++</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>php</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Javascript</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Python</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>C++</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>php</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Python</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>C++</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>php</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Javascript</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Python</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>C++</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>php</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Python</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>C++</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>php</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Javascript</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Python</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>C++</p>
                            <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>php</p>
                           
                            
                            
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default expertise
