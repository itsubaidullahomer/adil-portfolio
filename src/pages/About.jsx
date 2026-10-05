import React from 'react'
import Layout from '../layout/Layout'
import AboutSections from './../views/About/AboutSections.jsx';
import ToolboxSection from '../views/About/ToolboxSection.jsx';
import Currentlys from './../views/About/Currentlys.jsx';
import Ethics from './../views/About/Ethics.jsx';

const About = () => {
  return (
    <Layout>
      <AboutSections/>
      <ToolboxSection/>
      <Currentlys/>
      <Ethics/>
    </Layout>
  )
}

export default About