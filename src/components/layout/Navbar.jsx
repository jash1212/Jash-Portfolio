import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navItems = ['About', 'Projects','Contact' ,'Blog' ];
    const [hovered, setHovered] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (id) => {
        const target = document.getElementById(id);
        if (target) {
            window.lenis?.scrollTo(target);
        }
    };

    const handleNavigation = (e, item) => {
        e.preventDefault();
        const lowerItem = item.toLowerCase();

        if (lowerItem === 'blog') {
            navigate('/blog');
            return;
        }

        if (lowerItem === 'home') {
            if (location.pathname !== '/') {
                navigate('/');
            } else {
                handleScroll('home');
            }
            return;
        }

        // About, Projects, Contact
        const targetId = lowerItem.replace(' ', '-');

        if (location.pathname !== '/') {
            // Navigate home then scroll (simple approach: just nav home, user can scroll)
            // Or better: nav to /#id (React Router handles hash links somewhat, but Lenis might need help)
            navigate('/');
            setTimeout(() => {
                handleScroll(targetId);
            }, 100);
        } else {
            handleScroll(targetId);
        }
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="
                flex items-center gap-1 px-3 py-2.5 
                bg-white/30 
                border border-white/50 shadow-xl shadow-black/5
                rounded-full ring-1 ring-white/60
            ">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={item.toLowerCase() === 'blog' ? '/blog' : `#${item.toLowerCase().replace(' ', '-')}`}
                        onClick={(e) => handleNavigation(e, item)}
                        onMouseEnter={() => setHovered(item)}
                        onMouseLeave={() => setHovered(null)}
                        className={`relative px-4 py-2 text-lg font-medium transition-colors ${(location.pathname === '/blog' && item === 'Blog') || (location.pathname === '/' && item === 'Home' && !window.location.hash)
                                ? 'text-black font-bold'
                                : 'text-black/80 hover:text-black'
                            }`}
                    >
                        {hovered === item && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-white/60 rounded-full -z-10 shadow-sm"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
