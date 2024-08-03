    import React, { useRef, useEffect } from 'react';
    import Typed from 'typed.js'; // Make sure to install this library
    import myImage from '../assets/image3.png';
    import bannerBackground from '../assets/banner_wallpaper.svg';

    const Banner = () => {
        const el = useRef(null);

        useEffect(() => {
            const typed = new Typed(el.current, {
                strings: ["Software Engineer", "Programmer", "ML Engineer", "Full Stack Developer", "DevOps Engineer"], // Strings to display
                startDelay: 300,
                typeSpeed: 50,
                backSpeed: 10,
                backDelay: 100,
            });

            // Destroying
            return () => {
                typed.destroy();
            };
        }, []);

        return (
            <div
                style={{
                    backgroundImage: `url(${bannerBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 'auto',
                    maxHeight: '24rem',
                    maxWidth: '70rem', // Ensure it doesn't exceed the max height
                }}
                className="flex flex-row items-center justify-center mt-2  lg:justify-between p-4 lg:p-8 text-white h-48 sm:h-64 md:h-72 lg:h-96 ">
                {/* Text part on the left side */}
                <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
                    <h3 className="text-lg mt-10 sm:text-xl lg:text-2xl font-semibold">Hi, I'm</h3>
                    <h1 className="mt-2 text-xl sm:text-2xl lg:text-4xl font-bold">Abdul Subhan</h1>
                    <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl">
                        And I'm <span className='font-bold' ref={el}></span>
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm lg:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt exercitationem
                        similique ut sequi repellat nesciunt dolores nemo aliquid! DoloribusLorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Quas deserunt exercitationem similique ut sequi
                        repellat nesciunt dolores nemo aliquid! Doloribus.
                    </p>

                    <div className="icons-container flex justify-center lg:justify-start space-x-2 lg:space-x-4 mt-4">
                        <a className="hover:bg-orange-500 border cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center bg-gray-700">
                            <i className="fa-brands text-base sm:text-lg fa-facebook"></i>
                        </a>

                        <a className="hover:bg-orange-500 border cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center bg-gray-700">
                            <i className="fa-brands text-base sm:text-lg fa-instagram"></i>
                        </a>

                        <a className="hover:bg-orange-500 border cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center bg-gray-700">
                            <i className="fa-brands text-base sm:text-lg fa-linkedin-in"></i>
                        </a>

                        <a className="hover:bg-orange-500 border cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center bg-gray-700">
                            <i className="fa-brands text-base sm:text-lg fa-github"></i>
                        </a>
                    </div>
                    <br />
                    <a className="text-sm sm:text-base lg:text-lg px-4 py-1 mb-15 bg-orange-500 rounded-full shadow-lg" href="/contact">
                        Contact Me
                    </a>
                </div>

                {/* Image part on the right side */}
                <div className="flex-1 flex justify-center items-center">
                <img className="rounded-full shadow w-40 h-40 lg:w-80 lg:h-80 object-cover" src={myImage} alt="Profile" />
                </div>
            </div>
        );
    };

    export default Banner;
