import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import Hero_banner from '../../assets/hero_banner.jpg'
import Hero_Title from '../../assets/hero_title.png'
import Play_icon from '../../assets/play_icon.png'
import Info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Foooter from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className="Hero">
        <img src={Hero_banner} alt=""  className='Banner-img'/>
        <div className="Hero-Caption">
          <img src={Hero_Title} alt="" className='Hero-Caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul
             embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="Hero-Btns">
            <button className='Btn'><img src={Play_icon} alt="" />Play</button>
            <button className='Btn Dark-Btn'><img src={Info_icon} alt="" />More Info</button>
          </div>
          <TitleCard/>
        </div>
       </div>
       <div className="More-Card">
       <TitleCard title={"BlockBuster Movies"} Cateogory={"top_rated"}/>
       <TitleCard title={"Only On Netflix"} Cateogory={"popular"}/>
       <TitleCard title={"UpComing"} Cateogory={"upcoming"}/>
       <TitleCard title={"Top Pics For You"} Cateogory={"now_playing"}/>
       </div>
       <Foooter/>
    </div>

  )
}

export default Home
