import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#Intro" onClick={() => setActiveNav('#Intro')} className={activeNav === '#Intro' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#Benefits" onClick={() => setActiveNav('#Benefits')} className={activeNav === '#Benefits' ? 'active' : ''}>
        <BiBook />
      </a>
      {/* <a href="#Services" onClick={() => setActiveNav('#Traits')} className={activeNav === '#Traits' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a> */}
    </nav>
  )
}

export default Nav