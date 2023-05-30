import React from 'react'
import './navbar.scss'
import {Link, NavLink} from 'react-router-dom'
import logoaika from '../../assests/images/aika-logo2.png'
import { RiHomeHeartFill } from 'react-icons/ri';
import {BsPersonFill,BsGithub,BsLinkedin,BsFacebook,BsFillBagFill} from 'react-icons/bs';
import {GiLoveLetter,GiSkills} from 'react-icons/gi';



const Navbar = () => { 
 
  return (
<div className='nav-bar'>
<Link className='logo' to='/' >
<img   className='aika-logo' src= {logoaika} alt='Aika Logo'  ></img>
</Link> 

<nav>
  <NavLink exact="true" activeclassname='active' to='/'>
  <RiHomeHeartFill  color= "#CFB53B"/><div style={{fontSize:20}}>Home</div> </NavLink>

  <NavLink exact="true" activeclassname='active' className="about-link" to='/about'>
  <BsPersonFill color= "#CFB53B" /><div style={{fontSize:20}}>About</div></NavLink>

  <NavLink exact="true" activeclassname='active' className="contact-link" to='/contact'>
  <GiLoveLetter color= "#CFB53B"/><div style={{fontSize:20}}>Contact</div> </NavLink>

  <NavLink exact="true" activeclassname='active' className="about-link" to='/projects'>
  <BsFillBagFill color= "#CFB53B" /><div style={{fontSize:20}}>Projects</div></NavLink>

  <NavLink exact="true" activeclassname='active' className="about-link" to='/skills'>
  <GiSkills color= "#CFB53B" /><div style={{fontSize:20}}>Skills</div></NavLink>
  
</nav>

  <ul className='socialmedia-link'>
      
          <BsGithub className='socialmedia-link-G' onClick={() => window.open("https://github.com/aika-kreedy")} />  
          <br/><br/>
          <BsLinkedin className='socialmedia-link-L' onClick={() => window.open("https://www.linkedin.com/in/aika-k-75548246/")} />
          <br/><br/>
          <BsFacebook className='socialmedia-link-F'/>
       
  </ul>

    </div>
  )
}

export default Navbar