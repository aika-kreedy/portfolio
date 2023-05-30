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
          I am a full-stack JavaScript developer with a Bachelor's degree in Computer Engineering and a Master's degree in Information Technology. I am passionate about building beautiful and functional web applications that solve real-world problems.

Throughout my academic and professional journey, I have gained extensive experience in front-end development, back-end development, and database management.

As a full-stack developer, I take a holistic approach to problem-solving and am comfortable working on all aspects of a project, from ideation to deployment. I am also a strong collaborator and communicator, and I enjoy working with cross-functional teams to bring ideas to life.

In my free time, I enjoy attending tech conferences and hackathons, where I can network with other developers and learn about emerging technologies. I am also an avid reader and enjoy learning about a wide range of topics, from philosophy to economics.


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