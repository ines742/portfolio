import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navLinks } from '../constants'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Detect scroll for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle section navigation (works from any page)
  const handleSectionNav = (id) => {
    if (location.pathname !== '/') {
      navigate('/')

      // Wait for Home to render, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
        })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`} >
        <div className='inner'>
            <button className='logo'
                onClick={() => handleSectionNav('hero')}>Torres | Dev
            </button>
            <nav className='desktop'> {/* Navigation bar only for desktop view */}
                <ul>
                    {navLinks.map(({ link, name }) => (
                        <li key={name} className='group'>
                            <button onClick={() => handleSectionNav(link)}>
                                <span>{name}</span>
                                <span className='underline' />
                            </button>
                        </li>
                    ))}

                    <li className='group'>
                        <Link to='/projects'>
                        <span>Projects</span>
                        <span className='underline' />
                        </Link>
                    </li>
                </ul>
            </nav>

            <button className='contact-btn group'
                    onClick={() => handleSectionNav('contact')}>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>

            </button>
        </div>
    </header>
  )
}

export default NavBar