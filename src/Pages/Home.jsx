import React from 'react';
import Hero from '../components/Hero';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Hero/>
        <Outlet/>
    </div>
  )
}

export default Home;