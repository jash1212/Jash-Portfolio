import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Python", "Java", "JavaScript", "Django", "FastAPI",
    "Express.js", "REST APIs", "React", "Tailwind CSS",
    "PostgreSQL", "MySQL", "MongoDB", "Pandas", "NumPy",
    "ETL basics", "Data Pipelines"
];

const TechStack = () => {
    return (
        <section id="skills" className="py-20 px-6 md:px-20 text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl md:text-5xl font-bold mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-500"
            >
                Tech Stack
            </motion.h2>

            <motion.div
                className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.05
                        }
                    }
                }}
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm text-sm md:text-base font-medium hover:border-black dark:hover:border-white transition-colors cursor-default"
                    >
                        {skill}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TechStack;
