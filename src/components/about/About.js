import React from 'react';
import './about.scss';
import { useEffect, useState } from 'react'
import {TbLetterA} from 'react-icons/tb';
import AnimatedLetters from '../animated-letters/AnimatedLetters';



const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ',' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p   className='about-text'>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <TbLetterA color="	#CFB53B" />
            </div>
            <div className="face2">
              <TbLetterA  color="#FF007F" />
            </div>
            <div className="face3">
              <TbLetterA color="#3cb371" />
            </div>
            <div className="face4">
              <TbLetterA color="#5ED4F4" />
            </div>
            <div className="face5">
              <TbLetterA color="	#ff00ff" />
            </div>
            <div className="face6">
              <TbLetterA color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default About