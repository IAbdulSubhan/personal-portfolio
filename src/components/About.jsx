import React from 'react'
import myImage from '../assets/image5.jpg'

const About = () => {
    return (

        <div className='main-container bg-gray-100  py-16'>
            <h1 className='text-center pb-16 text-5xl underline font-bold'>About Me</h1>

            <div className='flex items-center'>
                {/* left side images */}
                <div className="w-full flex justify-center">
                    <img className='rounded-full shadow w-fit h-fit' src={myImage} alt="Image" />
                </div>


                {/* right side text about me  */}
                <div className='w-full flex justify-center '>
                    <div className="space-y-10 w-4/5  text-black">
                        {/* <div className="space-y-5 w-4/5> */}
                        <h1 className='text-4xl font-semi-bold'>Full Stack Developer</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt exercitationem
                            similique ut sequi repellat nesciunt dolores nemo aliquid! DoloribusLorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt exercitationem
                            similique ut sequi repellat nesciunt dolores nemo aliquid! Doloribus.</p>

                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt exercitationem
                            similique ut sequi repellat nesciunt </p>

                        <br></br>
                        <a className=' text-2xl px-3 py-1  bg-orange-500 rounded-full shadow-lg' href="/about" >Read More...</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
