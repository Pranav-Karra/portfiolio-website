import React, { useState, useEffect, useRef } from "react";
import { Github, X, BookOpen } from "lucide-react";

const projects = [
  {
    title: "Story.0",
    image: "/images/Story0 Demo.gif",
    blurb: "A modern way to present stories through visuals enhanced with AI.",
    skills: ["Python", "OpenAI API", "DALL-E", "Javascript", "HTML", "CSS", "React", "Vite"],
    githubUrl: "https://github.com/Rishith18/Story.0",
    detailedDescription: "A full-stack web application that transforms novels into children's books with consistent AI-generated imagery. The project uses OpenAI's API and DALL-E to generate contextual visual elements that enhance the storytelling experience. The front-end design is built with React and Vite to provide a modern, responsive design that allows users to input PDF formatted files. A Python backend is used to extract text from the PDF and sent it to the OpenAI API to generate kid-friendly captions and prompt-engineered image descriptions for DALL-E. The project demonstrates advanced integration of AI services with web technologies, creating an immersive storytelling environment."
  },
  {
    title: "NFL Predictor ML Model",
    image: "/images/MLModel.jpg",
    blurb: "Predicting NFL outcomes using machine learning from large player and team datasets.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook", "Google Colab"],
    githubUrl: "https://github.com/Pranav-Karra/NFLPredictor",
    detailedDescription: "A machine learning model that analyzes extensive NFL datasets to predict game outcomes with high accuracy. This is a Logistic Regression model that processes over 10000+ rows of player statistics, team performance metrics, and historical data that are directly web-scraped into CSV files. Using pandas and numpy libraries, data is further extracted and trained into the model via scikit-learn. Further fine-tuning techniques like 10-fold cross-validation are applied to achieve an overall average of 72% accurary. Additional visualizations are created with Matplotlib to provide insights into the factors influencing game outcomes, making complex data accessible and understandable to users."
  },
  {
    title: "Carbon-Sim",
    image: "/images/Carbon-Sim Demo.gif",
    blurb: "Data-driven simulation of future CO2 metrics from potential policy changes.",
    skills: ["React", "Node.js", "CSS", "Javascript","Chart.js", "Web-Scraping", "Real-Time Data"],
    githubUrl: "https://github.com/Pranav-Karra/Carbon-Sim",
    detailedDescription: "An interactive web application that simulates the environmental impact of various policy changes on CO2 emissions. Built with React and Node.js, it features real-time data visualization web-scraped from published research and credible environmental agencies. The user can adjust various policies (EV incentives, gas prices, energy rebates, carbon tax, etc) via sliders. This data is sent to a complex mathematical model that projects future CO2 emissions through visuals using Chart.js. This application makes environmental policy analysis accessible to policymakers and the public alike."
  },
  {
    title: "Personal Portfolio Website",
    image: "/images/PersonalPortfolioWebsite.png",
    blurb: "A modern, responsive portfolio to showcase my work and skills.",
    skills: ["React", "TailwindCSS", "Vite", "Vercel"],
    githubUrl: "https://github.com/yourusername/personal-portfolio",
    detailedDescription: "A modern, responsive portfolio website that showcases my work, education, and interests. This website is built with React and TailwindCSS and features smooth animations, interactive components, and a clean design that showcases my projects and experience. Built with Vite for fast development and deployed on Vercel for optimal performance. The portfolio demonstrates proficiency in modern web development technologies and best practices for creating engaging user experiences."
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-2 bg-secondary/30">
      <div className="container mx-auto max-w-none px-30">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-col gradient-border card-hover rounded-lg overflow-hidden bg-background shadow-lg transition-all duration-1000 ease-out delay-${idx * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="flex-1 flex flex-col p-8">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.blurb}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, key) => (
                      <span key={key} className="skill-button">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Github size={18} />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <button
                      onClick={() => openModal(project)}
                      className="reverse-cosmic-button inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-muted to-muted/80 text-muted-foreground font-medium border border-muted-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5"
                    >
                      <BookOpen size={18} />
                      <span className="text-sm">Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-all duration-500 ease-out ${
            isModalOpen 
              ? 'bg-black/50 opacity-100' 
              : 'bg-black/0 opacity-0'
          }`}
        >
          <div 
            className={`bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-500 ease-out transform ${
              isModalOpen 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-4'
            }`}
          >
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-all duration-300 hover:scale-110 border border-primary/30"
              >
                <X size={20} className="text-primary" />
              </button>
              
              {/* Project image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              
              {/* Project content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {selectedProject.title}
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.skills.map((skill, key) => (
                    <span key={key} className="skill-button">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.detailedDescription}
                </p>
                
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}; 