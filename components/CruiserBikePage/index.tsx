"use client"

import Navbar from '../Navbar';
import CruiserBikeHero from './CruiserBikeHero';
import CruiserBikeBody from './CruiserBikeBody';

const CruiserBike = () => {
  return (
    <div id='intro'>
      <Navbar inverted />
      <CruiserBikeHero />
      <CruiserBikeBody />
    </div>
  )
}

export default CruiserBike