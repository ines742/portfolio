import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    // track if the user has scrolled down the page
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // create an event listener when the user sscrolls down
        const handleScroll = () => {
            // if the user has scrolled more than 10px, set scrolled to true
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

          // add the event listener to the window
        window.addEventListener('scroll', handleScroll);

        // cleanup the event listener when the component is unmounted
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`} >
        <div className='inner'>
            <button className='logo'
                onClick={() => scrollToSection('hero')}
                >Torres | Dev</button>
            <nav className='desktop'> {/* Navigation bar only for desktop view */}
                <ul>
                    {navLinks.map(({ link, name }) => (
                        <li key={name} className='group'>
                            <button onClick={() => scrollToSection(link)}>
                                <span>{name}</span>
                                <span className='underline' />
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <button className='contact-btn group'
                    onClick={() => scrollToSection('contact')}>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>

            </button>
        </div>
    </header>
  )
}

export default NavBar