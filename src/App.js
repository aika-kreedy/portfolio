import React from 'react';
import './App.scss';
import { Route,Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import {Projects} from './components/projects/Projects';
import Skills from './components/skills/Skills';
const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills/>} />
          <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
    </>
  )
}

export default App