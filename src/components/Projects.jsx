import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';


const projectsData = [
    {
        title: "CubeView",
        overview: "Data Quality & Metadata Observability Platform. Engineered a data-quality platform supporting cataloging, metadata extraction, and rule-based anomaly detection.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tech: ["Django", "React", "PostgreSQL", "Pandas", "REST APIs"],
        git: "https://github.com",
        link: "https://example.com"
    },
    {
        title: "Cricket Analysis Tool",
        overview: "Designed interactive dashboards to analyze players, teams, and matches. Implemented player comparison features (strike rate, consistency) and real-time filtering using Streamlit and simple MySQL queries.",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
        tech: ["Python", "Streamlit", "MySQL"],
        git: "https://github.com",
        link: "https://example.com"
    },
    {
        title: "CareerPrep Platform",
        overview: "Developed modular FastAPI backend services with JWT authentication. Integrated with React frontend for stable user flows and reliable data access.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        tech: ["FastAPI", "React", "MySQL"],
        git: "https://github.com",
        link: "https://example.com"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 px-6 md:px-20 lg:px-40 text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl md:text-5xl font-bold mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-500"
            >
                Selected Work
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }
                        }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <div className="flex gap-3">
                                    <a href={project.git} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors"><Github size={18} /></a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors"><ExternalLink size={18} /></a>
                                </div>
                            </div>

                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed">
                                {project.overview}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-xs font-medium border border-neutral-200 dark:border-neutral-700 rounded-full bg-neutral-50 dark:bg-neutral-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
