import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ["Engineer", "Developer", "Problem Solver"];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000); // Changed to 2s for readability, 0.5s is too fast

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="h-screen flex items-center justify-center sticky top-0 z-0 overflow-hidden">
            <div className="z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-black leading-none"
                    style={{ whiteSpace: 'nowrap' }}
                >
                    Jash Solanki
                </motion.h1>
                <div className="mt-4 relative h-8 md:h-12 overflow-hidden w-full flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={roles[index]}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute text-lg md:text-xl text-black/60 font-medium tracking-wide uppercase"
                        >
                            {roles[index]}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Hero;
