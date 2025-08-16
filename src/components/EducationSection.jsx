import { useState, useEffect } from 'react';

export const EducationSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const images = [
        {
            src: "/images/CMU.jpg",
            alt: "CMU",
            caption: "Go Tartans!"
        },
        {
            src: "/images/AKPSI.jpg",
            alt: "AKPSI",
            caption: "Alpha Kappa Psi"
        },
        {
            src: "/images/BIB.jpg",
            alt: "BIB",
            caption: "Bhangra in the Burgh"
        }
    ];

    const nextImage = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setIsTransitioning(false);
        }, 300); // Half of the transition duration
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index) => {
        if (index !== currentImageIndex) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex(index);
                setIsTransitioning(false);
            }, 300);
        }
    };

    const relevantCoursework = [
        'Data Structures and Algorithms',
        'Computer Systems',
        'Functional Programming',
        'Discrete Math',
        '3D Vector Calculus',
        'Linear Algebra',
      ];

      const affiliations = [
        'Alpha Kappa Psi Professional Business Fraternity',
        'Bhangra in the Burgh',
      ];

    return (
        <section id="education" className="py-24 px-4 relative bg-secondary/30">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    My <span className="text-primary"> Education</span>
                </h2>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-left">
                        <h3 className="text-3xl text-primary font-bold"> Bachelor of Science in Computer Science</h3>
                        <p className="text-lg font-medium">Carnegie Mellon University, Pittsburgh, PA</p>

                        <div>
                            <h4 className="text-xl font-semibold mb-2">Relevant Coursework</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                                {relevantCoursework.map((course, idx) => (
                                    <li key={idx}>{course}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-2">Affiliations</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                                {affiliations.map((aff, idx) => (
                                    <li key={idx}>{aff}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end mt-8 md:mt-12">
                        <div className="text-center">
                            <div className="relative">
                                <div className="w-80 md:w-96 lg:w-[500px] h-60 md:h-72 lg:h-80 overflow-hidden rounded-lg border-1 border-primary shadow-lg">
                                    <img 
                                        src={images[currentImageIndex].src}
                                        alt={images[currentImageIndex].alt}
                                        className={`w-full h-full object-cover transition-opacity duration-600 ease-in-out hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] ${
                                            isTransitioning ? 'opacity-0' : 'opacity-100'
                                        }`}
                                    />
                                </div>
                                
                                {/* Left Arrow */}
                                <button
                                    onClick={() => handleDotClick(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                
                                {/* Right Arrow */}
                                <button
                                    onClick={() => handleDotClick(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
                                    aria-label="Next image"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex justify-center space-x-2 mt-3">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex 
                                                ? 'bg-primary' 
                                                : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                    />
                                ))}
                            </div>
                            <p className="mt-3 text-xl font-semibold text-primary">{images[currentImageIndex].caption}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}