import { motion } from 'framer-motion';
import Container from '../components/layout/Container';

const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jash-solanki-5a28a42a7/', icon: 'Lik' }, // Using text/svg placeholders for now if no icons
    { name: 'Twitter', url: 'https://x.com/JashSolanki06', icon: 'Twt' },
    { name: 'GitHub', url: 'https://github.com/jash1212', icon: 'Git' }
];

const Contact = () => {
    return (
        <section id="contact" className="relative min-h-[80vh] bg-black text-white py-32 flex flex-col justify-center overflow-hidden">

            <Container className="flex flex-col items-center text-center z-10">
                {/* Intro "Psst" */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white/60 text-xl md:text-2xl font-medium mb-8 "
                    
                >
                    Psst... exciting opportunities, anyone?
                </motion.p>

                {/* Main Copy */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    style={{ fontFamily: "'Tinos', serif" }}
                    className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-5xl leading-[1.1] mb-12 px-4"
                >
                    I'm open to new projects, part-time gigs, or a full-time adventure.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-white/70 text-lg md:text-xl max-w-2xl mb-16"
                >
                    Just shoot me an email, I'm practically glued to it. No delays, I promise!
                </motion.p>

                {/* Email Link */}
                <motion.a
                    href="mailto:contact@jashsolanki.dev"
                    className="text-xl md:text-3xl font-bold border-b-2 border-white/30 hover:border-white transition-colors pb-2 mb-20 inline-block break-all md:break-normal"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    jashsolanki66@gmail.com
                </motion.a>

                {/* Social Buttons - Funny Hover */}
                <div className="flex gap-8">
                    {socialLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center text-white text-sm font-bold backdrop-blur-sm border border-white/20"
                            whileHover={{
                                scale: 1.2,
                                rotate: [0, -10, 10, -10, 10, 0], // Wiggle animation
                                backgroundColor: "rgba(255, 255, 255, 0.2)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Simple text representation if icons are not set up, can replace with SVGs */}
                            {link.name === 'LinkedIn' && (
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            )}
                            {link.name === 'Twitter' && (
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            )}
                            {link.name === 'GitHub' && (
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            )}
                        </motion.a>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Contact;
