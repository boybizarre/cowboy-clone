'use client';

import Navbar from '../Navbar';
import ClassicBikeHero from './ClassicBikeHero';
import ClassicBikeBody from './ClassicBikeBody'

const ClassicBike = () => {

  return (
    <div id='item-classic'>
      <Navbar inverted />
      <ClassicBikeHero />
      <ClassicBikeBody />
    </div>
  );
};

export default ClassicBike;
