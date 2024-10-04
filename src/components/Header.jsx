// import React from 'react';
import './Header.css';
import React, { useEffect, useState } from 'react';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import gmail from '../assets/gmail.png';
import telephone from '../assets/telephone.png';

export default function Header() {

    const [isSticky, setIsSticky] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > document.querySelector('.header-above').offsetHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="m-0">
            <div className='header-above flex justify-between bg-blue-200 m-0 p-1'>
                <div className='flex items-center socials'>
                    {/* these addresses need to be updated */}
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="icon icon1 p-2 h-8" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className="icon icon2 p-2 h-8" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" className="icon icon3 p-2 h-8" />
                    </a>
                </div>
                <div className='icons flex items-center mails'>
                    <a href="mailto:example@example.com" className="contact-link flex items-center p-2">
                        <img src={gmail} alt="Email" className="icon icon-email h-4" />
                    </a>
                    <a href="tel:+1234567890" className="contact-link flex items-center p-2">
                        <img src={telephone} alt="Phone" className="icon icon-phone h-4" />
                        <span className='text-black'>+1234567890</span>
                    </a>
                </div>
            </div>


            <div className={`header-below flex justify-between items-center ${isSticky ? 'fixed top-0 left-0 right-0' : ''} bg-white shadow-md p-5 pb-2 pt-2`}>
                <div className='logo flex items-center ml-10'>
                    {/* fill logo here */}
                    <img src="" alt="" />
                    <h1>DocMed</h1>
                </div>
                <div>
                    <nav>
                        <ul className="nav-links flex items-center">
                            <li className="p-2"><a href="/home" className="p-2">Home</a></li>
                            <li className="p-2"><a href="/department" className="p-2">Department</a></li>
                            <li className="p-2"><a href="/chat" className="p-2">Chat</a></li>
                            <li className="p-2"><a href="/appointment" className="p-2">Appointment</a></li>
                            <li className="p-2"><a href="/doctors" className="p-2">Doctors</a></li>
                            <li className="p-2"><a href="/contact" className="p-2">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='mt-2 mb-2'>
                    <a className="p-2 bg-blue-500 text-white rounded-md mr-10">Login/Signup</a>
                </div>
            </div>
        </header>
    );
}
