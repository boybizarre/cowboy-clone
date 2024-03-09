"use client"

import React from 'react'
import Navbar from '../Navbar'
import TestRideHero from './TestRideHero'
import TestRideBody from './TestRideBody'

const TestRide = () => {
  return (
    <div>
      <Navbar />    
      <TestRideHero />    
      <TestRideBody />
    </div>
  )
}

export default TestRide;
