
import './skills.scss';
import AnimatedLetters from '../animated-letters/AnimatedLetters';
import { useEffect, useState } from 'react';
import python from "../../assests/images/python.svg";
import react from"../../assests/images/react.svg";
import typScript from "../../assests/images/typescript-icon.svg";
import sqlDatabase from "../../assests/images/sql-database-sql-azure.svg";


const Skills = () => {
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
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p   className='about-text'>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <div>
          <div className="col-xs-3 amg-badge"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/173442/HTML5_Badge.svg" alt="HTML5" />
          </div>
          <div className="col-xs-3 amg-badge"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/173442/CSS3_Badge.svg" alt="CSS3" />
          </div>
          <div className="col-xs-3 amg-badge"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/173442/JS_Badge.svg" alt="JavaScript" />
          </div>
          <div className="col-xs-3 amg-badge"><img src={python} alt="Python" />
          </div>
          <div className="col-xs-3 amg-badge"><img src={react} alt="React" />
          </div>
          <div className="col-xs-3 amg-badge"><img src={typScript} alt="TypScript" />
          </div>
          <div className="col-xs-3 amg-badge"><img src={sqlDatabase} alt="SQL_DataBase" />
          </div>
          </div>
          </div>
          </div>
          <div class="cat"></div>
          </>
)


 
}

export default Skills