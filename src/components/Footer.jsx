import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-blue-600 text-white">
            {/* Footer Section */}
            <footer className="bg-white text-gray-700 font-inter px-4 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
                        {/* Logo and Description */}
                        <div className="lg:col-span-2">

                            <div className="flex justify-start">
                                <img src='/logonew.svg' alt='' className='w-54 h-14 object-cover' />
                            </div>
                            <p className="mt-4 text-gray-600">
                                JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
                            </p>
                            <div className=' flex gap-5 items-center text-blue  mt-4 '>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div>
                            <h3 className="font-poppins font-semibold mb-2">Resources</h3>
                            <ul className="space-y-1 text-gray-600">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-poppins font-semibold mb-2">Community</h3>
                            <ul className="space-y-1 text-gray-600">
                                <li><a href="#">Feature</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Credit</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-poppins font-semibold mb-2">Quick links</h3>
                            <ul className="space-y-1 text-gray-600">
                                <li><a href="#">iOS</a></li>
                                <li><a href="#">Android</a></li>
                                <li><a href="#">Microsoft</a></li>
                                <li><a href="#">Desktop</a></li>
                            </ul>
                        </div>

                        {/* App Download */}
                        <div className="lg:col-span-1">
                            <h3 className="font-poppins font-semibold mb-2">Download App</h3>
                            <p className="mb-4 text-sm text-gray-600">
                                Download our Apps and get extra 15% Discount on your first Order...!
                            </p>
                            <div className="flex gap-2 ">
                                <button className=" ">
                                    <img src='/app-store.png' alt='' className='w-full h-full' />
                                </button>
                                <button className=" ">
                                    <img src='/android.png' alt='' className='' />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-10 pt-8 border-t border-gray-200 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-center text-gray-500">
                            © 2025 JobRinger. All rights reserved.
                        </p>
                        <ul className="flex flex-wrap justify-center gap-6 text-gray-600">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
