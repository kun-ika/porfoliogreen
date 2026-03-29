"use client";

import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import HomeExpertise from '@/components/HomeExpertise';

export default function Home() {
  return (
    <div className="w-full bg-[#FAF9F6]">
      <Hero />
      <FeaturedProjects />
      <HomeExpertise />
    </div>
  );
}
