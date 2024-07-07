import React from 'react';
import myImage from '../assets/image5.jpg';

const About = () => {
    return (
        <div className="main-container bg-gray-100 py-8 md:py-16">
            <h1 className="text-center pb-8 md:pb-16 text-3xl md:text-5xl underline font-bold">About Me</h1>

            <div className="flex flex-col md:flex-row items-center">
                {/* Left side image */}
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <img className="rounded-full shadow w-40 h-40 md:w-60 md:h-60" src={myImage} alt="Image" />
                </div>

                {/* Right side text about me */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="space-y-6 md:space-y-10 w-4/5 text-black">
                        <h1 className="text-2xl md:text-4xl font-semibold">Full Stack Developer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt exercitationem
                            similique ut sequi repellat nesciunt dolores nemo aliquid! DoloribusLorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt exercitationem
                            similique ut sequi repellat nesciunt dolores nemo aliquid! Doloribus.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt exercitationem
                            similique ut sequi repellat nesciunt.</p>

                        <a className="text-lg md:text-2xl px-3 py-1 md:py-2 bg-orange-500 rounded-full shadow-lg" href="/about">Read More...</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
