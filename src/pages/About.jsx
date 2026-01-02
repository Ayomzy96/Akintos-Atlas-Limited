import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import ExpertAdvice from '../components/About/ExpertAdvice'
import Client from '../components/About/Client'
import Discover from '../components/About/Discover'
// Agents section removed
import Personalized from '../components/About/Personalized'

const About = () => {
  return (
    <>
      <AboutBanner />
      <ExpertAdvice />
      <Client />
  <Discover />
  <Personalized />
    </>
  )
}

export default About