"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import Incidents from '../components/Incidents';
import Link from 'next/link';
import { Button } from '@mantine/core'

export default function Home() {
  return (
    <main className=' w-full h-screen text-textLight  overflow-x-hidden overflow-scroll border-10'>
      <Navbar links={[]} />
      <div className='h-[88vh] w-full mx-auto p-8 mt-0 border-r-8 ' style={{ marginTop: '-9.7rem' }}>
      <Link href='/Add' className='mt-10'>
      <Button className='text-black'> Add Event</Button>
      </Link>
      <Map />
      </div>
      <div className='h-[88vh] w-full mx-auto p-10' style={{ marginTop: '150px' }}>
      <Incidents />
      </div>
    </main>
  );
}

