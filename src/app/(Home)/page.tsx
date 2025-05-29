"use client"
import React, { useState } from 'react';
import DateTimingDisplay from '../(Home)/DateTimingDisplay';
import StoryImageSec from '../(Home)/StoryImageSec';
import CountrySection from '../(Home)/CountrySection';
import HijirDivider from '../(Home)/HijirDivider';
import Banner from '../(Home)/Banner';

export default function Home() {



  return (
    <>
      <Banner  />
      {/* <Banner/> */}
      <DateTimingDisplay />
      <StoryImageSec />
      <CountrySection />
      <HijirDivider />
    </>
  );
}