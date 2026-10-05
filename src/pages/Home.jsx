import React from 'react'
import Layout from './../layout/Layout';
import Hero from '../views/home/Hero';
import FeaturedWork from './../views/home/FeaturedWork';
import OtherProjects from '../views/home/OtherProjects';

const Home = () => {
  return (
    <Layout>
      <div className="home-page overflow-x-hidden">
        <Hero/>
        <FeaturedWork/>
        <OtherProjects/>
      </div>
    </Layout>
  )
}

export default Home