'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header 
      className={`navbar  sticky z-50 py-2 ${isVisible ? '' : ''}`}
      style={{ top: isVisible ? '0' : '-90px' }}
    >
      <div className="header-content">
        <div 
          className="header-logo-container"
          onClick={() => window.location.href = '/'}
        >
          <div className="header-logo-img-cont">
            <Image 
              src="/assets/code_arrow.png" 
              alt="Aman bind Logo Image" 
              width={50}
              height={50}
              className="header-logo-img"
            />
          </div>
          <span className="header-logo-sub">Aman Bind</span>
        </div>

        <div className="header-main">
          <ul className="header-links">
            <li className="header-link-wrapper">
              <Link className="header-link" href="/">Home</Link>
            </li>
            <li className="header-link-wrapper">
              <a className="header-link" href="/#about">Profile</a>
            </li>
            <li className="header-link-wrapper">
              <a className="header-link" href="/#projects">Projects</a>
            </li>
            <li className="header-link-wrapper">
              <a className="header-link" href="https://github.com/amanbind898">
                <span className="mr-2">🔗</span> see GitHub
              </a>
            </li>
          </ul>

          <div className="header-main-ham-menu-cont" onClick={toggleMenu}>
            <Image 
              src="https://www.svgrepo.com/show/444626/horizontal-menu.svg" 
              alt="hamburger menu" 
              width={30}
              height={30}
              className={`header-main-ham-menu ${isMenuOpen ? 'd-none' : ''}`}
            />
            <Image 
              src="https://www.svgrepo.com/show/522087/cross.svg" 
              alt="hamburger menu close" 
              width={30}
              height={30}
              className={`header-main-ham-menu-close ${isMenuOpen ? '' : 'd-none'}`}
            />
          </div>
        </div>
      </div>

      <div className={`header__sm-menu ${isMenuOpen ? 'header__sm-menu--active' : ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <Link href="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="header__sm-menu-link">
              <a href="/#about" onClick={closeMenu}>About</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="/#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="/#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
