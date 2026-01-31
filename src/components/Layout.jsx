import React, { useState, useEffect } from 'react';
import LiveBackground from './LiveBackground';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="min-h-screen w-full relative overflow-hidden font-sans">
            <LiveBackground theme={theme} />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className="relative z-0">
                {children}
            </main>
        </div>
    );
};

export default Layout;
