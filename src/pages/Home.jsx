import React from 'react'
import Layout from './../layout/Layout';
import Hero from '../views/home/Hero';
import FeaturedWork from './../views/home/FeaturedWork';
import OtherProjects from '../views/home/OtherProjects';

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <FeaturedWork/>
      <OtherProjects/>
    </Layout>
  )
}

export default Home