"use client"
import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  // Image,
  ServicesH2,
  ServicesP
} from './ServicesElements';
import icon from "../images/svg-101.svg";
import Image from 'next/image';
import icon2 from "../images/location.svg";
import icon3 from "../images/ideas.svg";

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <Image src={icon} className='w-20 h-18' alt="Icon1" />
          <ServicesH2>Location</ServicesH2>
          <ServicesP>We help reduce your time finding useful information when it's urgently needed.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <Image src={icon2} className='w-20 h-18' alt="Icon2" />
          <ServicesH2>Upload an Incidents</ServicesH2>
          <ServicesP>phone or laptop.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <Image src={icon3} className='w-20 h-18' alt="Icon3" />
          <ServicesH2>Share Incidents at Your Location</ServicesH2>
          <ServicesP>We guarantee secure data.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
