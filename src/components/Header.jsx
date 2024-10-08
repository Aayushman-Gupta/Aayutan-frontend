// import React from 'react';
import './Header.css';
import {Button} from "@mui/material"
import React, { useEffect, useState } from 'react';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import gmail from '../assets/gmail.png';
import telephone from '../assets/telephone.png';
import { Link } from 'react-router-dom';


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

    React.useEffect(() => {
        const headerBelow = document.querySelector('.header-below');
        if (isSticky) {
            headerBelow.style.transition = 'top 0.6s ease-in-out';
            headerBelow.style.top = '0';
        } else {
            headerBelow.style.transition = 'top 0.3s ease-in-out';
            headerBelow.style.top = `40px`;
        }
    }, [isSticky]);
    //paste this in header-above --
    // ${isSticky ? 'fixed top-0 left-0 right-0' : ''}

    return (
        <header className="m-0">
            <div className={`header-above flex justify-between bg-blue-200 m-0 p-1`}>
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

            <div className={`header-below flex justify-between items-center bg-white shadow-md p-0 pb-0 pt-0 ${isSticky ? 'fixed top-0 left-0 right-0' : ''}`}>
                <div className='logo flex items-center ml-10'>
                    {/* fill logo here */}
                    <img src="#" alt="" />
                    <h1>DocMed</h1>
                </div>
                <div>
                    <nav>
                        <ul className="nav-links flex items-center">
                            <li className="p-2"><a href="/" className="p-2 hover:scale-120 hover:underline">Home</a></li>
                            <li className="p-2"><a href="/department" className="p-2 hover:scale-120 hover:underline">Department</a></li>
                            <li className="p-2"><a href="/chat" className="p-2 hover:scale-120">Chat</a></li>
                            <li className="p-2"><a href="/appointment" className="p-2 hover:scale-120 hover:underline">Appointment</a></li>
                            <li className="p-2"><a href="/doctors" className="p-2 hover:scale-120 hover:underline">Doctors</a></li>
                            <li className="p-2"><a href="/contact" className="p-2 hover:scale-120 hover:underline">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='mt-2 mr-16 mb-2'>
                    <Link className='mr-4 hover:scale-120' to='/signin'> Login</Link>
                    <Link to='/signup'><button className="bg-blue-950 hover:bg-black text-white font-thin py-2 px-4 rounded-full hover:scale-120">
                    Register
                    </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
