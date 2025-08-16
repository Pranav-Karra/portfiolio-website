import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from "lucide-react";
import emailjs from 'emailjs-com';

export const ContactSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSending, setIsSending] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        // Initialize EmailJS
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        
        try {
            // EmailJS configuration
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: "Pranav Karra"
            };

            // Send email using EmailJS
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // Reset form
            setFormData({ name: "", email: "", message: "" });
            
            // Show success notification
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 4000);
            
        } catch (error) {
            console.error('Email sending failed:', error);
            // Show error notification
            alert('Failed to send message. Please try again or contact me directly.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    Contact <span className="text-primary"> Me</span>
                </h2>

                <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                    Feel free to reach out. I love to meet new people and I'm always open to chatting about new opportunities.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Contact Information */}
                    <div className={`space-y-8 transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-primary mb-6">
                                Get In Touch
                            </h3>
                            
                            {/* Contact Details */}
                            <div className="space-y-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Mail className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <p className="text-foreground font-medium">pkarra@andrew.cmu.edu</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Phone className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Phone</p>
                                        <p className="text-foreground font-medium">+1 (973) 723-0071</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <MapPin className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Location</p>
                                        <p className="text-foreground font-medium">Pittsburgh, PA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-foreground">
                                Connect With Me
                            </h4>
                            <div className="flex justify-center">
                                <a
                                    href="mailto:pkarra@andrew.cmu.edu"
                                    className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-200 group"
                                >
                                    <Mail className="text-muted-foreground group-hover:text-red-500" size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/pranavkarra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-200 group"
                                >
                                    <Linkedin className="text-muted-foreground group-hover:text-blue-500" size={24} />
                                </a>
                                <a
                                    href="https://github.com/Pranav-Karra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-200 group"
                                >
                                    <Github className="text-muted-foreground group-hover:text-purple-500" size={24} />
                                </a>
                                <a
                                    href="https://instagram.com/pranavkarra_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-200 group"
                                >
                                    <Instagram className="text-muted-foreground group-hover:text-pink-500" size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={`gradient-border p-8 rounded-lg transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                    }`}>
                        <h3 className="text-2xl font-bold text-primary mb-6">
                            Send Me a Message
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
                                    placeholder="Your Message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="cosmic-button w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                                <span>{isSending ? "Sending..." : "Send Message"}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Notification Popup */}
            {showNotification && (
                <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
                    <div className="bg-primary text-white px-6 py-4 rounded-lg shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <p className="font-medium">Message sent! Thanks for reaching out. I will get back to you soon.</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};