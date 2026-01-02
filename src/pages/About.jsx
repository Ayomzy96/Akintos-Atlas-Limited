import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import ExpertAdvice from '../components/About/ExpertAdvice'
import Client from '../components/About/Client'
import Discover from '../components/About/Discover'
// Agents section removed
import Personalized from '../components/About/Personalized'
import Team from '../components/About/Team'

const About = () => {
  return (
    <>
      <AboutBanner />
      <ExpertAdvice />
      <Client />
    <Discover />
    <Team />
    <Personalized />
    </>
  )
}

export default About