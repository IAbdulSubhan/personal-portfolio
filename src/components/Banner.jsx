import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js'; // Make sure to install this library
import myImage from '../assets/image3.png';
import bannerBackground from '../assets/banner_wallpaper.svg';

const Banner = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Engineer ","Programmer", "ML Engineer", "Full Stack Developer", "DevOps Engineer"], // Strings to display
            // Speed settings, try different values until you get good results
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
            }}
            className="main-container flex items-center text-white"
        >
            {/* for text part on left side */}
            <div className="w-full flex items-center justify-center">
                <div className="w-3/5">
                    <h3 className="text-3xl font-semibold">Hi, I'm </h3>
                    <h1 className="mt-3 text-5xl font-bold">Abdul Subhan</h1>
                    <h2 className="mt-3 text-3xl">
                        And I'm <span className='font-bold' ref={el}></span>
                    </h2>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt exercitationem
                        similique ut sequi repellat nesciunt dolores nemo aliquid! DoloribusLorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Quas deserunt exercitationem similique ut sequi
                        repellat nesciunt dolores nemo aliquid! Doloribus.
                    </p>

                    <div className="icons-container flex space-x-6 my-2">
                        <a className="hover:bg-orange-500 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-700">
                            <i className="fa-brands text-4xl fa-facebook"></i>
                        </a>

                        <a className="hover:bg-orange-500 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-700">
                            <i className="fa-brands text-4xl fa-instagram"></i>
                        </a>

                        <a className="hover:bg-orange-500 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-700">
                            <i className="fa-brands text-4xl fa-linkedin-in"></i>
                        </a>

                        <a className="hover:bg-orange-500 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-700">
                            <i className="fa-brands text-4xl fa-github"></i>
                        </a>
                    </div>
                    <br />
                    <a className="text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg" href="/contact">
                        Contact Me
                    </a>
                </div>
            </div>

            {/* for image part on right side */}
            <div className="w-full flex justify-center">
                <img className="rounded-full shadow w-fit h-fit" src={myImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;
