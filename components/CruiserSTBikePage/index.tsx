"use client"

import Navbar from '../Navbar';
import CruiserSTBikeHero from './CruiserSTBikeHero'
import CruiserSTBikeBody from './CruiserSTBikeBody'

const CruiserSTBike = () => {

  return (
    <div id='cruiser-st'>
      <Navbar inverted />
      <CruiserSTBikeHero />
      <CruiserSTBikeBody />
    </div>
  )
}

export default CruiserSTBike;
