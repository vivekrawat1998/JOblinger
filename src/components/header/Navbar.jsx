import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Find a Job', path: '/jobs' },
        { name: 'Recruiter', path: '/companies' },
        { name: 'Candidates', path: '/blog' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact us', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white  text-white font-overlock shadow-lg">
            <div className="max-w-7xl mx-auto w-full">
                {/* Desktop Navbar */}
                <div className="hidden md:grid grid-cols-3 items-center px-10 py-4 text-[1.1rem]">
                    {/* Left: Logo */}
                    <div className="flex justify-start">
                        <img src='/logonew.svg' alt='' className='w-54 h-14 object-cover' /><Link to="/" className="text-2xl font-bold text-yellow-300">

                        </Link>
                    </div>

                    {/* Center: Menu Links */}
                    <div className="flex justify-center gap-8">
                        {menuItems.map((item, index) => (
                            <Link
                                to={item.path}
                                key={index}
                                className={`px-2 cursor-pointer whitespace-nowrap transition-all  duration-200 border-b-2 ${isActive(item.path) ? 'border-[#3C65F5] text-[#3C65F5]' : 'border-transparent text-gray'
                                    } hover:border-[#3C65F5] hover:text-[#3C65F5]`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Auth Links */}
                    <div className="flex justify-end items-center gap-8">
                        <Link to="/register" className="underline text-black">Register</Link>
                        <Link to="/register" className="bg-[#3C65F5] text-white hover:text-[#3C65F5] px-5 py-2 rounded-md hover:bg-yellow-500 font-semibold">Sign In</Link>
                    </div>
                </div>

                {/* Mobile Navbar Header */}
                <div className="md:hidden flex justify-between items-center px-4 py-3">
                    <Link to="/" className="text-xl font-bold text-yellow-300">
                        <div className=" flex items-start">
                            <img src="/logonew.svg" alt="JobBox Logo" className="w-54 h-14" />
                        </div></Link>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} color='gray' /> : <Menu size={28} color='blue' />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#FFFFFF] text-gray">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={`px-2 text-lg cursor-pointer transition-all duration-200 border-b-2 ${isActive(item.path) ? 'border-[#3C65F5]' : 'border-transparent'
                                        } hover:border-[#3C65F5] hover:text-[#3C65F5]`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        {/* Auth Links in Mobile */}
                        <div className="mt-4 flex gap-4">
                            <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 underline">Register</Link>
                            <Link to="/register" onClick={() => setMenuOpen(false)} className="bg-blue text-white px-3 py-1 rounded hover:bg-blue/40 font-semibold">SignIn</Link>
                        </div>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
