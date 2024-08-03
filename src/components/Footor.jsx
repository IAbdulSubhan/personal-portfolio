import React from 'react';

const Footor = () => {
    return (
        <div className="py-5 border bg-gray-100 flex flex-col sm:flex-row justify-between px-4 sm:px-16">
            <div className="text-center sm:text-left">
                <p>@2024 Abdul Subhan Mian <span>All Rights Reserved</span></p>
            </div>
            <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end space-x-4">
                {/* div for links */}
                <a href="/about" className="hover:underline">About</a>
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <a href="/licensing" className="hover:underline">Licensing</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </div>
        </div>
    );
};

export default Footor;
