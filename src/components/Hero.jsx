import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                <motion.span
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="text-sm md:text-base font-medium tracking-widest uppercase mb-4 block text-neutral-500 dark:text-neutral-400"
                >
                    hi
                </motion.span>
                <motion.h1
                    variants={{
                        hidden: { opacity: 1 },
                        visible: {
                            opacity: 1,
                            transition: {
                                delayChildren: 0.1,
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="text-6xl md:text-9xl font-bold  mb-8 bg-300%"
                >
                    {["J", "a", "s", "h"].map((letter, index) => (
                        <motion.span
                            key={index}
                            className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-500"
                            variants={{
                                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } }
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed"
                >
                    Crafting minimalistic digital experiences with <span className="font-semibold text-black dark:text-white">React</span> & <span className="font-semibold text-black dark:text-white">Vite</span>.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Hero;
