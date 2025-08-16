import React from 'react';
import { DotsBackground } from "../components/DotsBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from '../components/EducationSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">  

        {/* Theme Toggle */}

        {/* Background Effects */}
        
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* Footer */}
      </div>
    );
}