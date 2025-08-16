import React, { useState, useEffect, useRef } from "react";

export const ExperienceSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const experiences = [
        {
            role: "Software Developer",
            company: "Try Catch Robotics",
            period: "May 2025 - Aug. 2025",
            description: "Engineered educational robotics kits (including microcontrollers, breadboards, sensors, etc.) utilizing C++ and Arduino IDE. Mentored 10+ underprivileged students to create their own robotics projects.",
            tools: ["C++", "Arduino", "Computer Vision", "Git", "Electrical Engineering"],
            companyImage: "/images/TryCatchRobotics.png"
        },
        {
            role: "Full-Stack Developer Intern",
            company: "Tata Motors",
            period: "Jun. 2024 - Aug. 2025",
            description: "Built responsive UIs and interactive elements for dealership website to enhance user experience. Wrote SEO algorithms and integrated RESTful APIs to improve online visibility and optimize full-stack performance.",
            tools: ["React", "HTML", "CSS", "Django", "RESTful APIs", "SEO", "Google Ads"],
            companyImage: "/images/TataMotors.jpg"
        },
        {
            role: "Inventory Automation Developer",
            company: "New Liberty Pharmacy",
            period: "Sep. 2022 - Jun. 2024",
            description: "Developed a custom inventory management system in Excel using VBA macros to streamline inventory tracking and sales management. Utilized SQL queries to analyze trends and manage orders accordingly.",
            tools: ["Excel", "VBA", "SQL", "pandas", "numpy"],
            companyImage: "/images/NewLibertyPharmacy.jpg"
        }
    ];

    return (
        <section ref={sectionRef} id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    Work <span className="text-primary"> Experience</span>
                </h2>
                
                <div className="relative">
                    {/* Vertical timeline line - moved to the right to avoid icon overlap */}
                    <div className="absolute left-60 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                    
                    {/* Experience cards */}
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <div key={index} className={`relative flex items-start transition-all duration-1000 ease-out delay-${index * 200} ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                            }`}>
                                {/* Company icon - left side - made bigger */}
                                <div className={`w-45 h-45 rounded-full bg-muted flex items-center justify-center mr-8 flex-shrink-0 overflow-hidden transition-all duration-1000 ease-out delay-${index * 200 + 100} ${
                                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                }`}>
                                    <img 
                                        src={experience.companyImage} 
                                        alt={`${experience.company} logo`}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                
                                {/* Timeline dot - centered exactly on the line */}
                                <div className="absolute left-60 w-4 h-4 bg-primary rounded-full border- border-background shadow-lg transform -translate-x-1/2 z-10"></div>
                                
                                {/* Experience card - positioned to the right of the timeline line */}
                                <div className="ml-20 flex-1 gradient-border p-6 card-hover">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-primary">
                                            {experience.role} @ {experience.company}
                                        </h3>
                                        <p className="text-muted-foreground font-medium">
                                            {experience.period}
                                        </p>
                                    </div>
                                    
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {experience.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {experience.tools.map((tool, toolIndex) => (
                                            <span 
                                                key={toolIndex}
                                                className="skill-button"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}