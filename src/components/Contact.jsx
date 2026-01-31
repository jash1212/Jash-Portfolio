import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/jash1212', handle: '@jash' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/jash-solanki-5a28a42a7/', handle: 'Jash Profile' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/JashSolanki06', handle: '@jash_dev' },
];

const Contact = () => {
    return (
        <section id="contact" className="min-h-[80vh] flex flex-col justify-center px-6 md:px-20 lg:px-40 pb-20 text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl md:text-5xl font-bold mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-500"
            >
                Let's Connect
            </motion.h2>

            <motion.div
                className="flex flex-wrap justify-center gap-12"
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
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={{
                            hidden: { opacity: 0, scale: 0.5 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }
                        }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-300"
                        title={link.name}
                    >
                        <link.icon size={48} />
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
};

export default Contact;
