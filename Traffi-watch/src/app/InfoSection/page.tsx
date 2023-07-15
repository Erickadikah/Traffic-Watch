"use client"
import React from 'react';
import { Button } from '@mantine/core'
import { signIn } from 'next-auth/react';
import Features from './features';
// import Image from ''
const Data = () => {
  return (
    <div className="w-full h-100vh overflow-x-hidden flex flex-wrap" style={{background:'#A09CA4'}}>
  <div className="lg:w-50 lg:h-50">
    <img
      src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      alt=""
      className="lg:w-full lg:h-full object-cover"
    />
  </div>
  <div className="lg:w-1/2 sm:w-full p-10 sm:flex-col">
    <h1 className="font-bold lg:text-3xl text-white">
      Find the Easiest Root by getting relevant{' '}
      <span style={{ color: '#525678' }}>information with our Road Watch app</span>
    </h1>
    <div className="flex gap-10 mt-4">
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
    <h1 className='text-white mt-20 p-8'>
      SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. 
      LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY UNCHANGED. IT WAS POPULARISED IN THE 1960S WITH THE RELEASE OF LETRASET SHEETS CONTAINING LOREM IPSUM PASSAGES, 
      AND MORE RECENTLY WITH DESKTOP PUBLISHING SOFTWARE LIKE ALDUS 
      PAGEMAKER INCLUDING VERSIONS OF LOREM IPSUM.
    </h1>
    <Features />
  </div>
</div>
  );
}

export default Data;
