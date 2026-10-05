import React from 'react'
import Layout from '../layout/Layout'
import AboutSections from './../views/about/AboutSections.jsx';
import ToolboxSection from '../views/about/ToolboxSection.jsx';
import Currentlys from './../views/about/Currentlys.jsx';
import Ethics from './../views/about/Ethics.jsx';

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