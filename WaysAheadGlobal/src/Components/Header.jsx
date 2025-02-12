import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=' sticky  w-full top-0 z-50'>
            <div className='w-full p-1 px-7 lg:px-14 flex justify-between items-center z-40 bg-white'>
                <a href='/'>
                    <img src="https://www.waysaheadglobal.com/assets/images/logo.png" alt="WaysAhead Global" className='w-18' />
                </a>

                <div className='flex items-center gap-6'>
                    {
                        localStorage.getItem('token') ?
                            <a onClick={() => { localStorage.clear() }} className='bg-orange-600 cursor-pointer px-4 py-2 rounded text-white text-sm font-semibold button'>Logout</a>
                            :
                            <a href='/auth-login-signup' className='bg-orange-600 cursor-pointer px-4 py-2 rounded text-white text-sm font-semibold button'>Login</a>
                    }
                    <div onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className='text-3xl text-orange-600 cursor-pointer' /> : <FaBars className='text-3xl text-orange-600 cursor-pointer' />}
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden absolute w-full md:flex transform ${menuOpen ? 'translate-y-0' : 'translate-y-[-100%] -z-10'}   gap-6 items-center justify-center bg-orange-500 py-2 `} style={{ transition: '0.3s ease-in-out' }}>
                <nav className='flex gap-9   font-semibold text-sm'>
                    <a href='/#home' className=' hover:text-blue-700  transition'>Home</a>
                    <a href='/#about' className=' hover:text-blue-700  transition'>About Us</a>
                    <a href='/#service' className=' hover:text-blue-700  transition'>Services</a>
                    <a href='/#usecase' className=' hover:text-blue-700  transition'>Use Cases</a>
                    <a href='/#career' className=' hover:text-blue-700  transition'>Careers</a>
                    <a href='/#contact' className=' hover:text-blue-700  transition'>Contact</a>
                    <a href='/#news' className=' hover:text-blue-700  transition'>News & Media</a>
                </nav>
            </div>

            <div className={`md:hidden absolute bg-white  w-full flex text-sm flex-col  p-1 items-center  transform ${menuOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ transition: '0.3s ease-in-out' }}>
                <a href='/#home' className='text-gray-800  hover:text-orange-600 py-2 navitems  w-[90%] mx-auto flex justify-center rounded-md   '>Home</a>
                <a href='/#about' className='text-gray-800  hover:text-orange-600 py-2 navitems w-[90%] mx-auto flex justify-center rounded-md   '>About Us</a>
                <a href='/#service' className='text-gray-800  hover:text-orange-600 py-2 navitems w-[90%] mx-auto flex justify-center rounded-md   '>Services</a>
                <a href='/#usecase' className='text-gray-800  hover:text-orange-600 py-2 navitems w-[90%] mx-auto flex justify-center rounded-md   '>Use Cases</a>
                <a href='/#career' className='text-gray-800  hover:text-orange-600 py-2 navitems w-[90%] mx-auto flex justify-center rounded-md   '>Careers</a>
                <a href='/#contact' className='text-gray-800  hover:text-orange-600 py-2 navitems w-[90%] mx-auto flex justify-center rounded-md   '>Contact</a>
                <a href='/#news' className='text-gray-800  hover:text-orange-600 py-2 navitems w-[90%] mx-auto flex justify-center rounded-md   '>News & Media</a>
                <hr className='border w-[90%] my-2' />
            </div>

        </div>
    );
};

export default Header;
