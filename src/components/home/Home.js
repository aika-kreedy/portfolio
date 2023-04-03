import {React,useState,useEffect} from 'react';
import './home.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../animated-letters/AnimatedLetters';
import{BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs';
import Aikaphoto from '../../assests/images/aika-photo.jpg';



    const Home = () => {
        const [letterClass, setLetterClass] = useState('text-animate')
      
        const nameArray = ['','A', 'i', 'k', 'a']
        const jobArray = [
          'S',
          'o',
          'f',
          't',
          'w',
          'a',
          'r',
          'e',
          '',
          'd',
          'e',
          'v',
          'e',
          'l',
          'o',
          'p',
          'e',
          'r',
          '.',
        ]
      
        useEffect(() => {
          return setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
        }, [])
      
  return (
   <>
  
<div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>am</span>
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}/>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}/>
          </h1>
           
          <h2>Software Developer full-stack with passion to frontend blabalahjgysadfyfg dGUQETTGGDFUHEWIUYlkjfdskljgihf</h2>
        
          <button className='download-btn' >
    <a href="assests/cv/aika/cv.pdf" target="_blank" download>
         download CV
    </a>
</button>
<img className='aika-photo' src={Aikaphoto} alt='aika-photo' />
        
<div className='footer-items' ><p>©2023 Aika K. | All Rights Reserved  </p><BsTwitter href='#'/>  <BsInstagram href='#'/>  <BsFacebook href='#'/> 
 </div>
  
   <Loader type="pacman" />
   </div>
  </div> 
  </>
    
  )
}

export default Home;