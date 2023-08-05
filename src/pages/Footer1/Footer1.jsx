import React from 'react'
import './footer1.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { Link } from "react-router-dom";
import { BsLinkedin } from 'react-icons/bs'

const Footer1 = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'> Genius Fitness</a>

            <ul className='permalinks'>
                <li><Link to="/homepage"> Home </Link></li>
                <li><Link to="/contact"> Contact </Link></li>
                <li><Link to="/login"> Logout </Link></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://www.facebook.com/bushvuong/'><FaFacebookF /></a>
                <a href='https://www.instagram.com/aadragon_/'><FiInstagram /></a>
                <a href='https://twitter.com/Aadragon_'><IoLogoTwitter /></a>
                <a href="https://www.linkedin.com/in/anhvuong146/"><BsLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Anh Vuong Genius Fitness. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer1