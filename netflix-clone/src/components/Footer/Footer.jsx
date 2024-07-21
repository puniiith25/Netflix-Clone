import React from 'react'
import './Footer.css'
import FaceBook_icon from '../../assets/facebook_icon.png'
import InstaGram_icon from '../../assets/instagram_icon.png'
import Twitter_icon from '../../assets/twitter_icon.png'
import YouTube_icon from '../../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="Footer-icons">
        <img src={FaceBook_icon} alt="" />
        <img src={InstaGram_icon} alt="" />
        <img src={Twitter_icon} alt="" />
        <img src={YouTube_icon} alt="" />
      </div>
      <ul className='Ul-list'>
      <li>Audio Description</li>
      <li>Help Centre</li>
      <li>Gift Cards</li>
      <li>Media Centre</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>terms of Use</li>
      <li>Privecy</li>
      <li>Legal Notices</li>
      <li>Cookie PreFerences</li>
      <li>Contact Us</li>
      </ul>
      <p className="CopyRight-Text">© 1997-2023 Netflix, Inc.</p>
      
    </div>
  )
}

export default Footer
