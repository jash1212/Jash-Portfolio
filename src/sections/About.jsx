import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const About = () => {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen bg-black text-white px-5 py-24 md:py-32 z-20"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
                {/* Left Side - Label */}
                <div className="md:w-1/4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-white/50 text-xl md:text-2xl font-medium sticky top-32"
                    >
                        About
                    </motion.h2>
                </div>

                {/* Right Side - Content */}
                <div className="md:w-3/4 flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight"
                    >
                        <p>
                           Am Jash Solanki,  developer who enjoys building systems that solve real problems.
                           <br/>
                           I am earning my Bachelor’s degree in Computer Science and Engineering from LJ University, where I developing my skills in software development, data structures, and system design.
                        </p>
                    </motion.div>

                    

                    
                </div>
            </div>
        </section>
    );
};

export default About;
