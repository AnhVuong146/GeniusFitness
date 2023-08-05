import React from 'react'
import './nav2.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
import { IoIosFitness } from "react-icons/io"
import { GiWeightLiftingUp } from "react-icons/gi"
import { GiLeg } from "react-icons/gi"
import { GiBiceps } from "react-icons/gi"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#Legs" onClick={() => setActiveNav('#Legs')} className={activeNav === '#Legs' ? 'active' : ''}>
        <GiLeg />
      </a>
      <a href="#Arms" onClick={() => setActiveNav('#Arms')} className={activeNav === '#Arms' ? 'active' : ''}>
        <GiBiceps />
      </a>
      {/* <a href="#Legs" onClick={() => setActiveNav('#Legs')} className={activeNav === '#Legs' ? 'active' : ''}>
        <GiLeg />
      </a> */}
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