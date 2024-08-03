import React from 'react'
import DevOps from '../assets/devops-2.svg'
import Datascience from '../assets/Data Science.png'

const services = () => {
    return (
        <>
            <div className='main-container py-14'>
                <h1 className='text-center pb-16 text-xs sm:text-sm md:text-4xl  underline font-bold'>My Services</h1>
                <div className="services-container flex space-x-5 px-6 mt-12">

                    {/* 1st box */}
                    <div className="space-x-3 bg-slate-200 px-5 text-center shadow-lg rounded-xl service1 space-y-4 ">
                        <i className="mt-2 text-6xl fa-solid fa-code"></i>
                        <h1 className='text-3xl'>Web Development</h1>

                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus eos eum
                            delectus, nihil explicabo harum modi quae architecto omnis!</p>
                        <button className='px-3 py-1 bg-orange-500 text-2xl rounded-full shadow'>Check</button>
                    </div>
                    {/* 2nd box */}
                    <div className="space-x-3 bg-slate-200 px-5 text-center shadow-lg rounded-xl service2 space-y-4 ">
                    <img src={Datascience} alt="DevOps Icon" className="inline-block w-20 h-20" />
                        <h1 className='text-3xl'>Data Scientist</h1>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus eos eum
                            delectus, nihil explicabo harum modi quae architecto omnis!</p>
                        <button className='px-3 py-1 bg-orange-500 text-2xl rounded-full shadow'>Check</button>

                    </div>
                    {/* 3rd box */}
                    <div className="space-x-3 bg-slate-200 px-5 text-center shadow-lg rounded-xl service3 space-y-4  ">
                        <img src={DevOps} alt="DevOps Icon" className="inline-block w-24 h-24" />
                        <h1 className='text-3xl'>DevOps</h1>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus eos eum
                            delectus, nihil explicabo harum modi quae architecto omnis!</p>
                        <button className='px-3 py-1 bg-orange-500 text-2xl rounded-full shadow'>Check</button>
                    </div>


                </div>

            </div>




        </>
    )
}

export default services