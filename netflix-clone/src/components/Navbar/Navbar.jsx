import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import Profile_img from '../../assets/profile_img.png'
import Craet_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  const Navref = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        Navref.current.classList.add('dark-nav')
      }else{
        Navref.current.classList.remove ('dark-nav')

      }
    })
  })

  return (
    <div ref={Navref} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" className='N-logo'/>
        <ul>
          <li>Home</li>
          <li>Tv Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Lnaguage</li>
        </ul>
      </div> 
      <div className="navbar-right">
        <img src={Search_icon} alt="" className="icon" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icon" />
        <div className="Navbar_Profile">
          <img src={Profile_img} alt="" className="profile" />
          <img src={Craet_icon} alt="" />
          <div className="Drop">
            <p>Sing out of Netflix</p>
          </div>

        </div>

      
      </div> 
    </div>
  )
}

export default Navbar
