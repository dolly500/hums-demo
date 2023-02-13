import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { RiVipCrownLine } from 'react-icons/ri'
import './Navbar.css'
import {FaBars, FaFacebook, FaLinkedin, FaTimes, FaTwitter} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <IconContext.Provider value={{ color: '#3A4BE6'}}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className= 'navbar-logo' onClick={closeMobileMenu}>
                            <RiVipCrownLine className='navbar-icon' />
                            Hums Medical
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link
                                    className='social-icon-link'
                                    to='/'
                                    target='_blank'
                                    aria-label='Facebook'
                                >
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className='social-icon-link'
                                    to='/'
                                    target='_blank'
                                    aria-label='LinkedIn'
                                >
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className='social-icon-link'
                                    to='/'
                                    target='_blank'
                                    aria-label='Twitter'
                                >
                                    <FaTwitter />
                                </Link>
                            </li>   
                        </ul>
                    </div>

                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
