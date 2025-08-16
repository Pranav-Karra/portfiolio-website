import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

export const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showResumeModal, setShowResumeModal] = useState(false);
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

    const openResumeModal = () => {
        setShowResumeModal(true);
    };

    const closeResumeModal = () => {
        setShowResumeModal(false);
    };

    const frontendSkills = [
        "HTML5",
        "CSS3",
        "Javascript",
        "React",
        "TailwindCSS",
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "Java",
        "C/C++",
        "SQL",
        "MongoDB",
    ];

    const devopsSkills = [
        "Git",
        "AWS",
        "Docker",
        "CI/CD",
        "Linux/Unix",
        "Vim",
        "VS Code",
        "Firebase"
    ];

    const mlLibraries = [
        "PyTorch",
        "TorchVision",
        "OpenCV",
        "Matplotlib",
        "scikit-learn",
        "pandas",
        "numpy",
    ];

    return (
        <section ref={sectionRef} id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}>
                        <div className="flex justify-center items-start self-start -mt-8">
                            <img 
                                src="/images/Myself.jpg"
                                alt="Pranav Karra"
                                className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full border-1 border-primary 
                                           shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                                           hover:scale-105 active:scale-95"
                            />
                        </div>
                        <p className="text-muted-foreground text-lg">
                            Hey, I'm Pranav! I am studying Computer Science at Carnegie Mellon University. I am interested in Software Engineering, AI/ML, and Fin-Tech. 
                        </p>

                        <p className="text-muted-foreground text-lg">
                            I am passionate about leveraging modern technologies to create positive change. I enjoy traveling, trying new things and connecting with new people.
                        </p>

                        <p className="text-muted-foreground text-lg">
                            Feel free to reach out!
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-4 justify-center mt-10">
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="cosmic-button inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <span>Get In Touch</span>
                            </button>
                            <button
                                onClick={openResumeModal}
                                className="reverse-cosmic-button inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-muted to-muted/80 text-muted-foreground font-medium border border-muted-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5"
                            >
                                <span>View Resume</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className={`gradient-border p-6 card-hover transition-all duration-1000 ease-out delay-200 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                        }`}>
                            <h3 className="text-xl font-bold mb-4"> Frontend Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="skill-button"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className={`gradient-border p-6 card-hover transition-all duration-1000 ease-out delay-200 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                        }`}>
                            <h3 className="text-xl font-bold mb-4"> Backend Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="skill-button"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className={`gradient-border p-6 card-hover transition-all duration-1000 ease-out delay-200 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                        }`}>
                            <h3 className="text-xl font-bold mb-4"> DevOps & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {devopsSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="skill-button"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className={`gradient-border p-6 card-hover transition-all duration-1000 ease-out delay-200 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                        }`}>
                            <h3 className="text-xl font-bold mb-4"> ML Libraries</h3>
                            <div className="flex flex-wrap gap-2">
                                {mlLibraries.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="skill-button"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resume Modal */}
            {showResumeModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                        <div className="relative">
                            {/* Close button */}
                            <button
                                onClick={closeResumeModal}
                                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-all duration-300 hover:scale-110 border border-primary/30"
                            >
                                <X size={20} className="text-primary" />
                            </button>
                            
                            {/* Resume PDF */}
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-[90vh] rounded-lg"
                                title="Pranav Karra Resume"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}