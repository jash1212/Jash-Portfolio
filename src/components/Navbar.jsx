import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Lightbulb, FolderKanban, Mail, FileUser, Moon, Sun, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'skills', icon: Lightbulb, label: 'Tech Stack', path: '/#skills' },
    { id: 'projects', icon: FolderKanban, label: 'Projects', path: '/#projects' },
    { id: 'contact', icon: Mail, label: 'Contact', path: '/#contact' },
    { id: 'blog', icon: BookOpen, label: 'Blog', path: '/blog' },
];

const Navbar = ({ theme, toggleTheme }) => {
    const [activeTab, setActiveTab] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (item) => {
        setActiveTab(item.id);

        if (item.path.startsWith('/#')) {
            // It's a section on the home page
            const sectionId = item.id;

            if (location.pathname !== '/') {
                navigate('/');
                // Small delay to allow navigation to complete before scrolling
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.getElementById(sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // It's a route
            navigate(item.path);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            className="fixed bottom-6 left-1/2 z-50 flex items-center justify-between md:justify-center gap-1 md:gap-2 p-2 md:p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg w-[90%] md:w-auto max-w-lg"
        >
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={cn(
                        "relative p-2 md:px-5 md:py-3 rounded-full transition-colors duration-200 group flex items-center justify-center shrink-0",
                        activeTab === item.id ? "text-white dark:text-black" : "text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 "
                    )}
                >
                    {activeTab === item.id && (
                        <motion.div
                            layoutId="bubble"
                            className="absolute inset-0 bg-black dark:bg-white rounded-full -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative z-10"
                    >
                        <item.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                    </motion.div>
                    <AnimatePresence>
                        {/* Tooltip on Hover */}
                        <span className="sr-only">{item.label}</span>
                    </AnimatePresence>
                </button>
            ))}

            <div className="w-px h-6 md:h-8 bg-black/20 dark:bg-white/20 mx-1" />

            <motion.button
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={toggleTheme}
                className="relative p-2 md:p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
                title="Toggle Theme"
            >
                {theme === 'dark' ? <Sun className="w-5 h-5 md:w-6 md:h-6" /> : <Moon className="w-5 h-5 md:w-6 md:h-6" />}
            </motion.button>

            <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 p-2 md:p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
                title="Resume"
            >
                <FileUser className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
        </motion.div>
    );
};

export default Navbar;
