import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/layout/Container';
import Navbar from '../components/layout/Navbar';
import { useLenis } from '../hooks/useLenis';

const blogs = [
    {
        id: 1,
        title: "Starting soon..",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        date: "Oct 2023"
    }
];

const Blog = () => {
    useLenis();
    const [hoveredBlog, setHoveredBlog] = useState(null);

    return (
        <div className="relative min-h-screen bg-[#E6E6E6] text-black overflow-hidden">
            {/* Static Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 100%'
                }}
            ></div>

            {/* Noise Texture */}
            <div className="bg-noise"></div>

            <Navbar />

            <Container className="pt-40 pb-20 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-20"
                >
                    Thoughts
                </motion.h1>

                <div className="flex flex-col">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="group relative flex items-center justify-between py-12 border-t border-black/10 cursor-pointer"
                            onMouseEnter={() => setHoveredBlog(blog)}
                            onMouseLeave={() => setHoveredBlog(null)}
                        >
                            {/* Title */}
                            <motion.h2
                                className="text-4xl md:text-6xl font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-300"
                            >
                                {blog.title}
                            </motion.h2>

                            {/* Date/Arrow */}
                            <span className="text-xl opacity-40 group-hover:opacity-100 transition-opacity">
                                {blog.date}
                            </span>

                            {/* Floating Image Reveal - Positioned Absolute/Fixed relative to cursor or container? 
                                User asked: "pic of blog is visble at right side of titlte"
                                Let's put it fixed on the right side of the item or following cursor. 
                                "right side of title" suggests near the text. 
                                simple approach: Absolute positioned within the row, right aligned.
                            */}
                            <AnimatePresence>
                                {hoveredBlog?.id === blog.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, x: -20, rotate: -5 }}
                                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, x: -20, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 md:right-20 top-1/2 -translate-y-1/2 pointer-events-none z-20"
                                        style={{
                                            height: '300px',
                                            width: '400px',
                                        }}
                                    >
                                        {/* Image with Blur Edges */}
                                        <div className="w-full h-full p-2 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                                            <div
                                                className="w-full h-full bg-cover bg-center"
                                                style={{
                                                    backgroundImage: `url(${blog.image})`,
                                                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                                                    WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 100%)' // Trying radial for "blurry sides"
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <div className="border-t border-black/10"></div>
                </div>
            </Container>
        </div>
    );
};

export default Blog;
