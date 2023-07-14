"use client"
import React from 'react';
import { Button } from '@mantine/core'
import { signIn } from 'next-auth/react';
// import Image from ''
const Data = () => {
  return (
    <div className="w-full h-100vh overflow-x-hidden flex flex-wrap" style={{background:'#A09CA4'}}>
  <div className="lg:w-1/2">
    <img
      src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      alt=""
      className="lg:w-full lg:h-96 object-cover"
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
    </div>
    <p style={{ color: 'white', marginTop: '20px'}}>Create an Account and Add incidents on a road or look for for incidents to avoid traffic</p>
  </div>
  <div className="lg:flex sm:flex-col">
  <div className="lg:w-1/2 p-10">
    <h1 className="font-bold lg:text-3xl sm:text-sm text-white">
      Find the Easiest Root by getting relevant{' '}
      <span style={{ color: '#525678' }}>information with our Road Watch app</span>
    </h1>
    <p style={{ color: 'white', marginTop: '20px' }}>Create an Account and Add incidents on a road or look for incidents to avoid traffic</p>
     <div className="flex gap-10 mt-4">
      <a href="/Signup">
        <Button variant="outlined" size="sm" sx={{ border: '1px solid white', color: 'whitesmoke', backgroundColor:'#539488' }}>
          Learn More
        </Button>
      </a>
    </div>
  </div>
  <div className="lg:w-1/2 sm:flex-col">
    <img
      src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      alt=""
      className="lg:w-full lg:h-96 object-cover sm:w-full"
    />
  </div>
</div>
  </div>

  );
}

export default Data;
