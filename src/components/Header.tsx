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
              src="/apple-icon.png"
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
              <a className="header-link" href="#about">Profile</a>
            </li>
            <li className="header-link-wrapper">
              <a className="header-link" href="#projects">Projects</a>
            </li>
            <li className="header-link-wrapper">
              <a className="header-link" href="#contact">Contact</a>
            </li>
            <li className="header-link-wrapper">
              <a className="header-link" href="https://github.com/amanbind898" target="_blank" rel="noopener noreferrer">
                <svg className="inline-block w-15 h-10    " viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.2-3.37-1.2-.45-1.17-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05.8-.23 1.65-.35 2.5-.35.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.11 2.7.64.72 1.02 1.64 1.02 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
                GitHub
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
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="https://github.com/amanbind898" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
