"use client"
import React from 'react';
import { Button } from '@mantine/core'
import { signIn } from 'next-auth/react';
import Features from './features';
// import Image from ''
const Data = () => {
  return (
    <div className="w-full h-90vh overflow-x-hidden flex flex-wrap items-center" style={{background:'#A09CA4'}}>
    <div className="lg:w-50 lg:h-50">
    {/*<img
      src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      alt=""
      className="w-600 h-300 object-cover"
  />*/}
  </div>
  <div className="p-10 flex-col Justify-center">
    <h1 className="font-bold text-2xl text-white mt-20 text-center">
      Find the Easiest Root by getting relevant{' '}
      <span style={{ color: '#525678' }}>
      information with our Road Watch app
      </span>
    </h1>
    <div className="flex gap-10 mt-4 justify-center">
      <a href="/Signup">
        <Button variant="outlined" size="sm" sx={{ border: '1px solid white', color: 'whitesmoke' }} onClick={() => signIn()}>
          Create an account
        </Button>
      </a>
      <a href='/login'>
      <Button variant="filled" size="sm" sx={{ border: '1px solid white', color: 'whitesmoke' }} onClick={() => signIn()}>
        Login
      </Button>
      </a>
    <a href="/Signup">
        <Button variant="outlined" size="sm" sx={{ border: '1px solid white', color: 'whitesmoke', backgroundColor:'#539488' }}>
          Learn More
        </Button>
      </a>
    </div>
    <h1 className='text-white mt-20 p-4 text-center font-sans font-bold text-xl'>
      About Us
    </h1>
    <p className='text-white text-[##525678] font-sans'>
      TrafficWatch is an application designed to provide users
      with real-time traffic information and alerts for their selected areas.
      With TrafficWatch, users can stay informed about the current traffic conditions 
      and receive timely alerts about high-traffic areas.
    </p>
    <div className='justify-center p-8'>
    <Features />
    </div>
  </div>
</div>
  );
}

export default Data;
