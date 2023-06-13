"use client";
import React from 'react';
import Navbar from '../app/components/Navbar';
import Map from '../app/components/Map';

export default function Home() {
  return (
    <main>
      <Navbar links={[]} />
      <h1 className='text-center'>Map</h1>
      <Map />
    </main>
  );
}

