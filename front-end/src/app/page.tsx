"use client";
import React from 'react';
import Navbar from '../app/components/Navbar';
import Map from '../app/components/Map';
import Incidents from '../app/components/Incidents';

export default function Home() {
  return (
    <main className=' w-full h-screen text-textLight  overflow-x-hidden overflow-scroll border-10'>
      <Navbar links={[]} />
      <div className='h-[88vh] w-full mx-auto p-8 mt-0 border-r-8'>
      <Map />
      </div>
      <div className='h-[88vh] w-full mx-auto p-10'>
      <Incidents />
      </div>
    </main>
  );
}

