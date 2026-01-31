import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Projects from './Projects';
import TechStack from './TechStack';
import Contact from './Contact';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Small delay to ensure rendering
        }
    }, [location]);

    return (
        <>
            <Hero />
            <TechStack />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
