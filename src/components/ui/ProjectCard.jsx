import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Lower magnetic strength for larger element
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="group relative w-full cursor-pointer"
        >
            {/* Card Container - Acts as the 'Thick Border' / Frame */}
            <div className="bg-black p-4 rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">

                {/* Upper Image Section */}
                <div className="relative h-[350px] w-full rounded-2xl overflow-hidden bg-zinc-900">
                    {/* Background Image */}
                    <div
                        className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                        style={{
                            backgroundImage: `url(${project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'})`,
                        }}
                    />



                    {/* Dark Overlay with Description (Hover only) */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                        <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {project.title}
                        </h4>
                        <p className="text-white/90 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 mb-4">
                            {project.description}
                        </p>

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.29 9.5 21.05C9.5 20.83 9.5 20.2 9.5 19.38C6.9 19.86 6.15 18.66 5.91 17.97C5.77 17.58 5.11 16.38 4.82 16.22C4.59 16.09 3.99 15.65 4.81 15.64C5.58 15.63 6.13 16.35 6.31 16.64C7.2 18.15 8.63 17.72 9.18 17.47C9.27 16.83 9.53 16.39 9.81 16.14C7.55 15.89 5.18 15.01 5.18 11.1C5.18 9.98 5.58 9.07 6.24 8.36C6.13 8.1 5.78 7.04 6.34 5.62C6.34 5.62 7.2 5.35 9.17 6.68C9.99 6.45 10.86 6.34 11.74 6.34C12.62 6.34 13.49 6.45 14.31 6.68C16.27 5.34 17.14 5.62 17.14 5.62C17.7 7.04 17.35 8.1 17.24 8.36C17.9 9.07 18.29 9.98 18.29 11.1C18.29 15.02 15.91 15.88 13.63 16.13C13.99 16.44 14.32 17.05 14.32 17.97C14.32 19.3 14.3 20.38 14.3 21.05C14.3 21.29 14.47 21.59 14.97 21.5C18.93 20.16 21.8 16.42 21.8 12C21.8 6.477 17.32 2 12 2Z" fill="currentColor" />
                                </svg>
                                View Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Bottom Border Section - Title and Details */}
                <div className="pt-6 pb-2 px-2 flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight leading-none mb-1">
                            {project.title}
                        </h3>
                        <p className="text-white/40 text-sm">{project.tags.join(" • ")}</p>
                    </div>
                    {/* Arrow Icon or Year */}
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
