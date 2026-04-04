"use client";

import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import HomeExpertise from '@/components/HomeExpertise';
import AboutOverview from '@/components/AboutOverview';
import ExperienceOverview from '@/components/ExperienceOverview';

export default function Home() {
  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. HOME - Hero Section */}
      <Hero />

      {/* 2. ABOUT - High Level Overview */}
      <AboutOverview />

      {/* 3. SKILLS - Expertise Grid */}
      <HomeExpertise />

      {/* 4. PROJECTS - Featured Work */}
      <FeaturedProjects />

      {/* 5. EXPERIENCE - Journey Overview */}
      <ExperienceOverview />
    </div>
  );
}
