import React, { useState } from 'react'

const header = () => {
    const [brandName, setBrandName] = useState("AbdulSubhanMian");

    const [menuLinks, setMenuLinks] = useState([
        {
            title: "Home",
            link: "/home",
            id:1
        },
        {
            title: "About",
            link: "/about",
            id:2
        },
        {
            title: "Skills",
            link: "/skills",
            id:3
        },
        {
            title: "Portfolio",
            link: "/portfolio",
            id:4
        },
        {
            title: "Contact",
            link: "/contact",
            id:5
        },
        
    ]);

    const [actionButton, setActionButton] = useState("Hire Me");
    return (
        <>
            <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
                <div>
                    {/* for logo */}

                    <a href="/home" className='text-1xl font-bold'>{brandName}</a>

                </div>

                <div className='space-x-6'>
                    {/* for menu links */}

                    {menuLinks.map((links)=>(
                        <a key={links.id} href={links.link} className='hover:text-orange-600'>{links.title}</a>
                    ))}
                    {/* <a href="/home" className='hover:text-orange-600'>Home</a>
                    <a href="/about" className='hover:text-orange-600'>About</a>
                    <a href="/skills" className='hover:text-orange-600'>Skills</a>
                    <a href="/portfolio" className='hover:text-orange-600'>Portfolio</a>
                    <a href="/contact" className='hover:text-orange-600'>Contact</a> */}

                </div>

                <div>
                    {/* Hire me section */}
                    <a href='/hire-me' className='px-4 py-2 bg-orange-500 rounded-full shadow text-black text-1xl'>{actionButton}</a>
                </div>


            </div>

        </>
    )
}

export default header
