"use client"
import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={require('../../../public/svg-101.svg')} alt="Icon1" />
          <ServicesH2>Location</ServicesH2>
          <ServicesP>We help reduce your time finding useful information when it's urgently needed.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={require('../../../public/svg-102.svg')} alt="Icon2" />
          <ServicesH2>Upload an Incidents</ServicesH2>
          <ServicesP>You can access our services anywhere online, on a phone or laptop.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={require('../../../public/svg-103.svg')} alt="Icon3" />
          <ServicesH2>Search Incidents</ServicesH2>
          <ServicesP>We guarantee secure data.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
