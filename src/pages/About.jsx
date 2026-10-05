import React from 'react'
import Layout from '../layout/Layout'
import AboutSections from './../views/about/AboutSections.jsx';
import Currentlys from './../views/about/Currentlys.jsx';
import Ethics from './../views/about/Ethics.jsx';

const About = () => {
  return (
    <Layout>
      {/* Shares the Home page type system (Instrument Sans + Bricolage Grotesque) */}
      <div className="home-page overflow-x-clip">
        <AboutSections/>
        <Currentlys/>
        <Ethics/>
      </div>
    </Layout>
  )
}

export default About
