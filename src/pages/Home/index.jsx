import React from 'react'
import HelloSection from './HelloSection/HelloSection'
import AirMax from './AirMax/AirMax'
import FeatureSection from './FeatureSection/FeatureSection'
import StepSection from './StepSection/StepSection'
import DontMiss from './DontMissSection/DontMiss'
import Essentials from './Essentials/Essentials'
import CategoriesSection from './CategoriesSection/CategoriesSection'

const Home = () => {
  return (
    <>
        <HelloSection/>
        <AirMax/>
        <FeatureSection/>
        <StepSection/>
        <DontMiss/>
        <Essentials/>
        <CategoriesSection/>
    </>
  )
}

export default Home