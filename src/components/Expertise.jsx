import React from 'react';
import bannerBackground from '../assets/banner_wallpaper.svg';

const Expertise = () => {
    return (
        <>
            <div className="mt-2">
                <h1 className='mb-16 text-xs sm:text-sm md:text-4xl font-bold underline text-center'>My Expertise</h1>
                {/* expertise section */}

                {/* Box section */}
                <div
                    style={{
                        backgroundImage: `url(${bannerBackground})`,
                        backgroundSize: "cover",
                        maxHeight: '24rem'
                    }}
                    className="box-container items-center flex flex-row md:flex-row py-14 px-4">
                    {/* two boxes left and right box are there */}
                    <div className='flex flex-1 text-white justify-center'>
                        {/* text container */}
                        <div className='w-full md:w-2/3 text-center md:text-left space-y-4'>
                            <h1 className='text-xs sm:text-sm md:text-4xl font-bold'>I love these technologies</h1>
                            <p className='text-xs sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse maiores quia, facere officia impedit incidunt ipsum vero repudiandae, sed minus doloribus, praesentium doloremque libero laboriosam accusantium ipsa alias at!</p>
                            <button className='text-base md:text-2xl px-4 py-2 bg-orange-500 rounded-full'>Hire Me</button>
                        </div>
                    </div>

                    <div className='flex flex-1 justify-center mt-8 md:mt-0'>
                        {/* skill container */}
                        <div className='flex flex-wrap justify-center w-full md:w-2/3 space-x-3'>
                            {["Python", "C++", "PHP", "JavaScript", "Rust", "React","Python", "C++", "PHP", "JavaScript", "Rust", "React", "JavaScript","Python", "C++", "PHP", "JavaScript", "Rust", ].map((skill, index) => (
                                <p key={index} className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>
                                    {skill}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Expertise;
